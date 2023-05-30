import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassCreatedData } from './getters'
import { getBattlepass, getNftCollection, getOrg } from '../../../common/db/getters'
import { fetchMetadata } from '../../../common/ipfs/getters'
import { upsertIdentity } from '../../../common/db/identity'
import { Battlepass } from '../../../model'
import { storage } from '../../../storage'

import { arrayToHexString, addressCodec } from '../../../common/tools'
import { ObjectExistsWarn, StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'


async function handleBattlepassCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const battlepassId = getBattlepassCreatedData(ctx, event)
    let bpassId = arrayToHexString(battlepassId)

    if (await getBattlepass(ctx.store, bpassId)) {
        ctx.log.warn(ObjectExistsWarn(name, 'Battlepass', bpassId))
        return
    }
    const bpassData = await storage.battlepass.getBattlepassStorageData(ctx, block.header, battlepassId)
    if (!bpassData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'Battlepass', bpassId))
        return
    }
    let orgId = arrayToHexString(bpassData.orgId)
    let org = await getOrg(ctx.store, orgId)
    if (!org) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Org', orgId))
        return
    }
    const state = await storage.battlepass.getBattlepassStateStorageData(ctx, block.header, battlepassId)
    if (!state) {
        ctx.log.warn(StorageNotExistsWarn(name, 'BattlepassState', bpassId))
        return
    }

    let collectionId = bpassData.collectionId.toString()
    let collection = await getNftCollection(ctx.store, collectionId)
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }

    let creator = addressCodec.encode(bpassData.creator)
    let creatorIdentity = await upsertIdentity(ctx.store, creator, null)

    let battlepass = new Battlepass()
    battlepass.id = bpassId
    battlepass.creator = creatorIdentity
    battlepass.organization = org
    battlepass.state = state.__kind
    battlepass.season = bpassData.season.toString()
    battlepass.price = BigInt(bpassData.price)
    battlepass.createdAtBlock = block.header.height
    battlepass.updatedAtBlock = block.header.height
    battlepass.cid = bpassData.cid.toString()
    battlepass.collectionId = collectionId
    battlepass.collection = collection

    // Fetch metadata from ipfs
    let metadata = await fetchMetadata(bpassData.cid.toString(), bpassId, 'battlepass', null)
    battlepass.name = metadata?.name ?? bpassData.name.toString()
    battlepass.description = metadata?.description ?? ''
    battlepass.image = metadata?.image ?? ''

    await ctx.store.save(battlepass)
}

export { handleBattlepassCreatedEvent }
