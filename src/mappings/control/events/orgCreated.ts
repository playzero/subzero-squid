import { EventHandlerContext } from '../../types/contexts'
import { getOrgCreatedData } from './getters'
import { CurrencyId } from '../../../types/generated/v63'

import { getOrg } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { Organization } from '../../../model'
import { fetchOrgMetadata } from '../../util/ipfs/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { ObjectExistsWarn, ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleOrgCreatedEvent(ctx: EventHandlerContext) {
	const eventData = getOrgCreatedData(ctx)
	let orgId = arrayToHexString(eventData.orgId)
	let treasury = arrayToHexString(eventData.treasuryId)

	if (await getOrg(ctx.store, orgId)) {
		ctx.log.warn(ObjectExistsWarn('Org', orgId))
		return
	}

	const storageData = await storage.control.getOrgStorageData(ctx, eventData.orgId)
    if (!storageData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, orgId))
		return
    }
	const stateStorageData = await storage.control.getOrgStateStorageData(ctx, eventData.orgId)
    if (!stateStorageData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, orgId))
		return
    }

	let creator = arrayToHexString(storageData.creator)
	let prime = arrayToHexString(storageData.prime)

	let creatorIdentity = await upsertIdentity(ctx.store, creator, null)
	let primeIdentity = await upsertIdentity(ctx.store, prime, null)
	let treasuryIdentity = await upsertIdentity(ctx.store, treasury, null);

	let org = new Organization()
	org.id = orgId
	org.creator = creator
	org.creatorIdentity = creatorIdentity
	org.prime = prime
	org.primeIdentity = primeIdentity
	org.treasury = treasury
	org.treasuryIdentity = treasuryIdentity
	org.accessModel = storageData.accessModel.__kind
	org.feeModel = storageData.feeModel.__kind
	org.type = storageData.orgType.__kind
	org.membershipFee = storageData.membershipFee
	org.createdAtBlock = storageData.created
	org.updatedAtBlock = storageData.mutated
	org.state = stateStorageData.__kind
	org.govCurrency = getCurrencyValue(storageData.govCurrency) // ProtocolTokenId
	org.payCurrency = getCurrencyValue(storageData.payCurrency) // PaymentTokenId
	org.memberLimit = storageData.memberLimit
	// TODO: add deposit to the event
	// org.deposit = eventData.deposit;
	org.deposit = BigInt(10 ^ 10) // 1 GAME Dollar (default)
	org.cid = storageData.cid.toString()

	// Fetch metadata from ipfs
	let metadata = await fetchOrgMetadata(storageData.cid.toString(), orgId)
	if (!metadata) {
		ctx.log.warn(ObjectNotExistsWarn(`${ctx.event.name} - Metadata`, org.cid))
	}
	org.name = metadata?.name ?? ''
	org.description = metadata?.description ?? ''
	org.website = metadata?.website ?? ''
	org.email = metadata?.email ?? ''
	org.repo = metadata?.repo ?? ''
	org.logo = metadata?.logo ?? ''
	org.header = metadata?.header ?? ''

	await ctx.store.save(org)
}

function getCurrencyValue(currency: CurrencyId) {
	if (currency.__kind == 'Token') {
		return currency.__kind
	} else {
		return currency.value.toString()
	}
}

export { handleOrgCreatedEvent }
