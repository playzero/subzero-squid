import { Pallet } from '../types/pallet';
import { handleProposalCreatedEvent } from './events/proposalCreated';
import { handleProposalActivatedEvent } from './events/proposalActivated';
import { handleProposalAcceptedEvent } from './events/proposalAccepted';
import { handleProposalRejectedEvent } from './events/proposalRejected';
import { handleProposalExpiredEvent } from './events/proposalExpired';
import { handleProposalAbortedEvent } from './events/proposalAborted';
import { handleProposalFinalizedEvent } from './events/proposalFinalized';
import { handleProposalVotedEvent } from './events/proposalVoted';

export default {
	name: 'Signal',
	extrinsicHandlers: {},
	eventHandlers: {
		'Created': handleProposalCreatedEvent,
		'Activated': handleProposalActivatedEvent,
		'Accepted': handleProposalAcceptedEvent,
		'Rejected': handleProposalRejectedEvent,
		'Expired': handleProposalExpiredEvent,
		'Aborted': handleProposalAbortedEvent,
		'Finalized': handleProposalFinalizedEvent,
		'Voted': handleProposalVotedEvent
	}
} as Pallet;
