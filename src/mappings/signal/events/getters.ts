import {
    SignalAbortedEvent,
    SignalAcceptedEvent,
    SignalActivatedEvent,
    SignalCreatedEvent,
    SignalExpiredEvent,
    SignalFinalizedEvent,
    SignalRejectedEvent,
    SignalVotedEvent
} from '../../../types/generated/events'
import { EventContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'


interface ProposalCreatedData {
    account: Uint8Array,
    proposalId: Uint8Array,
    orgId: Uint8Array,
    campaignId: (Uint8Array | undefined),
    amount: (bigint | undefined),
    start: number,
    expiry: number
}

interface ProposalVotedData {
    account: Uint8Array,
    proposalId: Uint8Array,
    voted: boolean,
    yes: bigint,
    no: bigint,
    votePower: bigint
}


export function getProposalCreatedData(ctx: EventContext): ProposalCreatedData {
    const event = new SignalCreatedEvent(ctx)
    if (event.isV63) {
        const { account, proposalId, orgId, campaignId, amount, start, expiry } = event.asV63
        return { account, proposalId, orgId, campaignId, amount, start, expiry }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalVotedData(ctx: EventContext): ProposalVotedData {
    const event = new SignalVotedEvent(ctx)
    if (event.isV63) {
        const { account, proposalId, voted, yes, no, votePower } = event.asV63
        return { account, proposalId, voted, yes, no, votePower }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalActivatedData(ctx: EventContext): Uint8Array {
    const event = new SignalActivatedEvent(ctx)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalAbortedData(ctx: EventContext): Uint8Array {
    const event = new SignalAbortedEvent(ctx)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalAcceptedData(ctx: EventContext): Uint8Array {
    const event = new SignalAcceptedEvent(ctx)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalExpiredData(ctx: EventContext): Uint8Array {
    const event = new SignalExpiredEvent(ctx)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalFinalizedData(ctx: EventContext): Uint8Array {
    const event = new SignalFinalizedEvent(ctx)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalRejectedData(ctx: EventContext): Uint8Array {
    const event = new SignalRejectedEvent(ctx)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}