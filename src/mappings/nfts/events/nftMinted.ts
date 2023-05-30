import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getNftMintedData } from './getters'
import { getNft, getNftCollection } from '../../../common/db/getters'

import { ObjectExistsWarn, ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'
import { addressCodec, constructNftId } from '../../../common/tools'
import { Nft } from '../../../model/generated/nft.model'
import { upsertIdentity } from '../../../common/db/identity'
import { storage } from '../../../storage'
import { ItemSetting, isSettingDisabled } from './common'


async function handleNftMintedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ owner, collectionId, itemId ] = getNftMintedData(ctx, event)

    let nftId = constructNftId(collectionId, itemId)
    if (await getNft(ctx.store, nftId)) {
        ctx.log.warn(ObjectExistsWarn(name, 'Nft', nftId))
        return
    }

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }

    const itemConfigData = await storage.nfts.getItemConfigOfStorageData(ctx, block.header, collectionId, itemId)
    if (!itemConfigData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'ItemConfigOf', `collectionId: ${collectionId}, itemId: ${itemId}`))
        return
    }

    let ownerString = addressCodec.encode(owner)
    let ownerIdentity = await upsertIdentity(ctx.store, ownerString, null)

    let nft = new Nft()
    nft.id = nftId
    nft.itemId = itemId.toString()
    nft.owner = ownerIdentity
    nft.collection = collection
    nft.transfersLocked = isSettingDisabled(itemConfigData.settings, ItemSetting.Transferable)
    nft.metadataLocked = isSettingDisabled(itemConfigData.settings, ItemSetting.UnlockedMetadata)
    nft.attributesLocked = isSettingDisabled(itemConfigData.settings, ItemSetting.UnlockedAttributes)

    await ctx.store.save(nft)
}

export { handleNftMintedEvent }
