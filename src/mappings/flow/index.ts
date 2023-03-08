import { Pallet } from '..'
import { handleCampaignContributedEvent } from './events/campaignContributed'
import { handleCampaignCreatedEvent } from './events/campaignCreated'
import { handleCampaignStateChangedEvent } from './events/campaignStateChanged'

export default {
    name: 'Flow',
    callHandlers: {},
    eventHandlers: {
        'Created': handleCampaignCreatedEvent,
        'Contributed': handleCampaignContributedEvent,
        'Activated': handleCampaignStateChangedEvent,
        'Succeeded': handleCampaignStateChangedEvent,
        'Failed': handleCampaignStateChangedEvent
    }
} as Pallet
