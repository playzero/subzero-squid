import { Context, EventItem, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getMemberRemovedData } from './getters'
import { getOrgMember } from '../../util/db/getters'

import { arrayToHexString, addressCodec } from '../../util/helpers'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleMemberRemovedEvent(ctx: Context, block: Block, item: EventItem) {
	const eventData = getMemberRemovedData(ctx, item.event)
	let address = addressCodec.encode(eventData.who)
	let orgId = arrayToHexString(eventData.orgId)

	let member = await getOrgMember(ctx.store, orgId, address)
	if (!member) {
		ctx.log.warn(ObjectNotExistsWarn(item.name, 'Member', `${orgId}-${address}`.toLowerCase()))
		return
	}

	await ctx.store.remove(member)
}

export { handleMemberRemovedEvent }
