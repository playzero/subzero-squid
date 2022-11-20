import { EventHandlerContext, SubstrateBlock, Event } from '../../types/contexts'
import { getCampaignSucceededData } from './getters'

import { getCampaign } from '../../util/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleCampaignSucceededEvent(ctx: EventHandlerContext, block: SubstrateBlock, event: Event) {
	const campaignIdArray = getCampaignSucceededData(ctx, event)
	let campaignId = arrayToHexString(campaignIdArray)

	let campaign = await getCampaign(ctx.store, campaignId)
	if (!campaign) {
		ctx.log.warn(ObjectNotExistsWarn('Campaign', campaignId))
		return
	}
	const stateStorageData = await storage.control.getOrgStateStorageData(ctx, block, campaignIdArray)
    if (!stateStorageData) {
		ctx.log.warn(StorageNotExistsWarn(event.name, campaignId))
		return
    }

	campaign.state = stateStorageData.__kind
	await ctx.store.save(campaign)
}

export { handleCampaignSucceededEvent }
