import { EventHandlerContext } from '../../types/contexts'
import { getMemberRemovedData } from './getters'

import { getOrgMember } from '../../util/db/getters'

import { arrayToHexString, addressCodec } from '../../util/helpers'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleMemberRemovedEvent(ctx: EventHandlerContext) {
	const eventData = getMemberRemovedData(ctx)
	let address = addressCodec.encode(eventData.who)
	let orgId = arrayToHexString(eventData.orgId)

	let member = await getOrgMember(ctx.store, orgId, address)
	if (!member) {
		ctx.log.warn(ObjectNotExistsWarn('Member', `${orgId}-${address}`.toLowerCase()))
		return
	}

	await ctx.store.remove(member)
}

export { handleMemberRemovedEvent }
