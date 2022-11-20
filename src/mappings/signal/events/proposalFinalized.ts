import { EventHandlerContext } from '../../types/contexts'
import { getProposalFinalizedData } from './getters'

import { getProposal } from '../../util/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'

async function handleProposalFinalizedEvent(ctx: EventHandlerContext) {
	let proposalIdArray = getProposalFinalizedData(ctx)
	let proposalId = arrayToHexString(proposalIdArray)
	let proposal = await getProposal(ctx.store, proposalId);
	if (!proposal) {
		ctx.log.warn(ObjectNotExistsWarn('Proposal', proposalId))
		return
	}
	const proposalState = await storage.signal.getProposalStateStorageData(ctx, proposalIdArray)
    if (!proposalState) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, proposalId))
		return
    }
	proposal.state = proposalState.__kind
	await ctx.store.save(proposal)
}

export { handleProposalFinalizedEvent }
