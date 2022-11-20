import { EventHandlerContext } from '../../types/contexts'
import { getProposalCreatedData } from './getters'

import { getProposal, getVoting, getOrg, getCampaign } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { Voting, Proposal } from '../../../model'
import { fetchProposalMetadata } from '../../util/ipfs/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { ObjectExistsWarn, ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleProposalCreatedEvent(ctx: EventHandlerContext) {
	const eventData = getProposalCreatedData(ctx)
	let proposalId = arrayToHexString(eventData.proposalId)
	if (await getProposal(ctx.store, proposalId)) {
		ctx.log.warn(ObjectExistsWarn('Proposal', proposalId))
		return
	}
	let votingId = proposalId;
	if (await getVoting(ctx.store, votingId)) {
		ctx.log.warn(ObjectExistsWarn('Voting', votingId))
		return
	}
	const proposalData = await storage.signal.getProposalStorageData(ctx, eventData.proposalId)
    if (!proposalData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, proposalId))
		return
    }
	const votingData = await storage.signal.getVotingStorageData(ctx, eventData.proposalId)
    if (!votingData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, votingId))
		return
    }
	const proposalState = await storage.signal.getProposalStateStorageData(ctx, eventData.proposalId)
    if (!proposalState) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, proposalId))
		return
    }
	let orgId = arrayToHexString(proposalData.orgId)
	let org = await getOrg(ctx.store, orgId)
	if (!org) {
		ctx.log.warn(ObjectNotExistsWarn('Org', orgId))
		return
	}
	let beneficiary = proposalData.beneficiary ? (arrayToHexString(proposalData.beneficiary) as string) : null
	let campaign = proposalData.campaignId ? await getCampaign(ctx.store, arrayToHexString(proposalData.campaignId)) : null

	// Create Voting
	let voting = new Voting()
	voting.id = votingId
	voting.unit = votingData.unit.__kind
	voting.scale = votingData.scale.__kind
	voting.yes = 0n
	voting.no = 0n
	voting.quorum = votingData.quorum?.toString()
	voting.majority = votingData.majority.__kind
	await ctx.store.save(voting)

	// Create Proposal
	let proposal = new Proposal()
	proposal.id = proposalId
	proposal.creator = arrayToHexString(proposalData.owner)
	proposal.creatorIdentity = await upsertIdentity(ctx.store, arrayToHexString(proposalData.owner), null)
	proposal.organization = org
	proposal.campaign = campaign
	proposal.type = proposalData.proposalType.__kind
	proposal.start = proposalData.start
	proposal.expiry = proposalData.expiry
	proposal.amount = proposalData.amount
	proposal.currencyId = proposalData.currencyId?.__kind
	proposal.beneficiary = beneficiary
	proposal.beneficiaryIdentity = beneficiary ? await upsertIdentity(ctx.store, beneficiary, null) : null
	// TODO: use constants instead: SignalGameDAOGetsFromSlashingConstant
	proposal.slashingRule = 'Automated'
	proposal.deposit = proposalData.deposit
	proposal.state = proposalState.__kind
	proposal.voting = voting
	proposal.cid = proposalData.cid.toString()

	// Fetch metadata from ipfs
	let metadata = await fetchProposalMetadata(proposalData.cid.toString(), proposalId);
	if (!metadata) {
		ctx.log.warn(ObjectNotExistsWarn(`${ctx.event.name} - Metadata`, proposal.cid))
	}
	proposal.name = metadata?.name ?? '';
	proposal.description = metadata?.description ?? '';
	await ctx.store.save(proposal);
}

export { handleProposalCreatedEvent };
