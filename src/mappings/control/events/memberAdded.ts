import { Context, EventItem, Block } from '../../../processor'

import { getMemberAddedData } from './getters'
import { getOrg, getOrgMember } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { OrganizationMember } from '../../../model'

import { arrayToHexString, addressCodec } from '../../util/helpers'
import { ObjectExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'


async function handleMemberAddedEvent(ctx: Context, block: Block, item: EventItem) {
	const eventData = getMemberAddedData(ctx, item.event)
	let address = addressCodec.encode(eventData.who)
	let orgId = arrayToHexString(eventData.orgId)

	if (await getOrgMember(ctx.store, orgId, address)) {
		ctx.log.warn(ObjectExistsWarn(item.name, 'Member', `${orgId}-${address}`.toLowerCase()))
		return
	}
	const org = await getOrg(ctx.store, orgId)
	if (!org) {
		ctx.log.warn(ObjectNotExistsWarn(item.name, 'Org', orgId))
		return
	}

	const member = new OrganizationMember()
	member.id = `${orgId}-${address}`.toLowerCase()
	member.organization = org
	member.address = address
	member.identity = await upsertIdentity(ctx.store, address, null)

	await ctx.store.save(member)
}

export { handleMemberAddedEvent }
