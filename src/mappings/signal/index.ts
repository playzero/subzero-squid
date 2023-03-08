import { Pallet } from '..'
import { handleProposalCreatedEvent } from './events/proposalCreated'
import { handleProposalVotedEvent } from './events/proposalVoted'
import { handleProposalStateChangedEvent } from './events/proposalStateChanged'


export default {
    name: 'Signal',
    callHandlers: {},
    eventHandlers: {
        'Created': handleProposalCreatedEvent,
        'Voted': handleProposalVotedEvent,
        'Activated': handleProposalStateChangedEvent,
        'Accepted': handleProposalStateChangedEvent,
        'Rejected': handleProposalStateChangedEvent,
        'Expired': handleProposalStateChangedEvent,
        'Aborted': handleProposalStateChangedEvent,
        'Finalized': handleProposalStateChangedEvent,
    }
} as Pallet;
