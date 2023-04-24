import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getOrgUpdatedData } from './getters'
import { getOrg } from '../../../common/db/getters'
import { upsertIdentity } from '../../../common/db/identity'
import { storage } from '../../../storage'
import { fetchOrgMetadata } from '../../../common/ipfs/getters'

import { addressCodec, arrayToHexString, slugify } from '../../../common/tools'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleOrgUpdatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const eventData = getOrgUpdatedData(ctx, event)
    let orgId = arrayToHexString(eventData.orgId)

    const storageData = await storage.control.getOrgStorageData(ctx, block.header, eventData.orgId)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'Org', orgId))
        return
    }

    let org = await getOrg(ctx.store, orgId);
    if (!org) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Org', orgId))
        return
    }

    if (eventData.primeId) {
        let primeId = addressCodec.encode(eventData.primeId);
        org.prime = primeId;
        org.primeIdentity = await upsertIdentity(ctx.store, primeId, null);
    }
    if (eventData.orgType) {
        org.type = eventData.orgType.__kind;
    }
    if (eventData.accessModel) {
        org.accessModel = eventData.accessModel.__kind;
    }
    if (eventData.feeModel) {
        org.feeModel = eventData.feeModel.__kind;
    }
    if (eventData.memberLimit) {
        org.memberLimit = eventData.memberLimit;
    }
    if (eventData.memberLimit) {
        org.membershipFee = eventData.membershipFee;
    }
    if (storageData.name) {
        org.name = storageData.name.toString();
    }
    if (storageData.cid) {
        org.cid = storageData.cid.toString();

        // Fetch metadata from ipfs
        let metadata = await fetchOrgMetadata(org.cid, orgId)
        org.name = metadata?.name ?? org.name
        org.description = metadata?.description ?? org.description
        org.website = metadata?.website ?? org.website
        org.email = metadata?.email ?? org.email
        org.repo = metadata?.repo ?? org.repo
        org.logo = metadata?.logo ?? org.logo
        org.header = metadata?.header ?? org.header
        org.url = metadata?.url ?? org.url
        org.location = metadata?.location ?? org.location
        org.tags = metadata?.tags ?? org.tags
        org.slug = metadata?.slug ?? slugify(org.name + '-' + org.id)
    }

    org.updatedAtBlock = block.header.height;

    await ctx.store.save(org);
}

export { handleOrgUpdatedEvent };
