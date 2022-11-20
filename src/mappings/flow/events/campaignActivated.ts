import { EventHandlerContext } from '../../types/contexts'
import { getCampaignActivatedData } from './getters'

import { getCampaign } from '../../util/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleCampaignActivatedEvent(ctx: EventHandlerContext) {
	const campaignIdArray = getCampaignActivatedData(ctx)
	let campaignId = arrayToHexString(campaignIdArray)

	let campaign = await getCampaign(ctx.store, campaignId)
	if (!campaign) {
		ctx.log.warn(ObjectNotExistsWarn('Campaign', campaignId))
		return
	}
	const stateStorageData = await storage.control.getOrgStateStorageData(ctx, campaignIdArray)
    if (!stateStorageData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, campaignId))
		return
    }

	campaign.state = stateStorageData.__kind
	await ctx.store.save(campaign)
}

export { handleCampaignActivatedEvent }
