import {
    FlowActivatedEvent,
    FlowCreatedEvent,
    FlowContributedEvent,
    FlowFailedEvent,
    FlowSucceededEvent
} from '../../../types/generated/events'
import { Event } from '../../../types/generated/support'
import { EventContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'


interface CampaignCreatedData {
    campaignId: Uint8Array,
    creator: Uint8Array,
    admin: Uint8Array,
    target: bigint,
    deposit: bigint,
    expiry: number,
    name: Uint8Array
}

interface CampaignContributedData {
    campaignId: Uint8Array,
    sender: Uint8Array,
    contribution: bigint,
    blockNumber: number
}

export function getCampaignCreatedData(ctx: EventContext, ev: Event): CampaignCreatedData {
    const event = new FlowCreatedEvent(ctx)
    if (event.isV63) {
        const { campaignId, creator, admin, target, deposit, expiry, name } = event.asV63
        return { campaignId, creator, admin, target, deposit, expiry, name }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCampaignContributedData(ctx: EventContext, ev: Event): CampaignContributedData {
    const event = new FlowContributedEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId, sender, contribution, blockNumber } = event.asV63
        return { campaignId, sender, contribution, blockNumber }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCampaignActivatedData(ctx: EventContext, ev: Event): Uint8Array {
    const event = new FlowActivatedEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId } = event.asV63
        return campaignId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCampaignFailedData(ctx: EventContext, ev: Event): Uint8Array {
    const event = new FlowFailedEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId, campaignBalance, blockNumber } = event.asV63
        return campaignId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCampaignSucceededData(ctx: EventContext, ev: Event): Uint8Array {
    const event = new FlowSucceededEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId, campaignBalance, blockNumber } = event.asV63
        return campaignId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}