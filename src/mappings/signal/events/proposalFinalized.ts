import { EventHandlerContext, SubstrateBlock, Event } from '../../types/contexts'
import { getProposalFinalizedData } from './getters'

import { getProposal } from '../../util/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'

async function handleProposalFinalizedEvent(ctx: EventHandlerContext, block: SubstrateBlock, event: Event) {
	let proposalIdArray = getProposalFinalizedData(ctx, event)
	let proposalId = arrayToHexString(proposalIdArray)
	let proposal = await getProposal(ctx.store, proposalId)
	if (!proposal) {
		ctx.log.warn(ObjectNotExistsWarn('Proposal', proposalId))
		return
	}
	const proposalState = await storage.signal.getProposalStateStorageData(ctx, block, proposalIdArray)
    if (!proposalState) {
		ctx.log.warn(StorageNotExistsWarn(event.name, proposalId))
		return
    }
	proposal.state = proposalState.__kind
	await ctx.store.save(proposal)
}

export { handleProposalFinalizedEvent }
