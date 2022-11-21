import { EventHandlerContext, SubstrateBlock, Event } from '../../types/contexts'
import { getEntityCreatedData } from './getters'

import { getSenseEntity } from '../../util/db/getters'
import { storage } from '../../../storage'
import { SenseEntity } from '../../../model'
import { upsertIdentity } from '../../util/db/identity'

import { arrayToHexString } from '../../util/helpers'
import { ObjectExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleEntityCreatedEvent(ctx: EventHandlerContext, block: SubstrateBlock, event: Event) {
	const eventData = getEntityCreatedData(ctx, event)
	let accountId = arrayToHexString(eventData.accountId)

	if (await getSenseEntity(ctx.store, accountId)) {
		ctx.log.warn(ObjectExistsWarn('SenseEntity', accountId))
		return
	}

	const storageData = await storage.sense.getEntityStorageData(ctx, block, eventData.accountId)
    if (!storageData) {
		ctx.log.warn(StorageNotExistsWarn(event.name, accountId))
		return
    }

    let entity = new SenseEntity()
	entity.id = accountId
    entity.identity = await upsertIdentity(ctx.store, accountId, null)
    entity.experience = BigInt(0)
    entity.trust = BigInt(0)
    entity.reputation = BigInt(0)
    entity.createdAtBlock = storageData.created
    entity.updatedAtBlock = storageData.mutated

	// TODO: Check if cid is valid, fetch metadata from ipfs
	// let metadata = await fetchSenseEntityMetadata(storageData.cid.toString(), accountId)
	entity.cid = storageData.cid.toString()

	await ctx.store.save(entity)
}

export { handleEntityCreatedEvent };
