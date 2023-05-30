import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionCreatedData, getCollectionForceCreatedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectExistsWarn, StorageNotExistsWarn } from '../../../common/errors'
import { NftCollection } from '../../../model/generated/nftCollection.model'
import { addressCodec } from '../../../common/tools'
import { upsertIdentity } from '../../../common/db/identity'
import { storage } from '../../../storage'
import { CollectionSetting, isSettingDisabled } from './common'


async function handleCollectionCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    await handleEvent(ctx, block, event, name, getCollectionCreatedData)
}

async function handleCollectionForceCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    await handleEvent(ctx, block, event, name, getCollectionForceCreatedData)
}

async function handleEvent(ctx: Context, block: Block, event: Event, name: string, getData: (context: any, event: any) => [Uint8Array, number]) {
    const [ owner, collectionId ] = getData(ctx, event)

    if (await getNftCollection(ctx.store, collectionId.toString())) {
        ctx.log.warn(ObjectExistsWarn(name, 'Collection', collectionId))
        return
    }

    let ownerString = addressCodec.encode(owner)
    let ownerIdentity = await upsertIdentity(ctx.store, ownerString, null)

    const collectionConfigData = await storage.nfts.getCollectionConfigOfStorageData(ctx, block.header, collectionId)
    if (!collectionConfigData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'CollectionConfigOf', collectionId))
        return
    }

    let collection = new NftCollection()
    collection.id = collectionId.toString()
    collection.owner = ownerIdentity
    collection.max = collectionConfigData.maxSupply
    collection.maxLocked = isSettingDisabled(collectionConfigData.settings, CollectionSetting.UnlockedMaxSupply)
    collection.transfersLocked = isSettingDisabled(collectionConfigData.settings, CollectionSetting.TransferableItems)
    collection.metadataLocked = isSettingDisabled(collectionConfigData.settings, CollectionSetting.UnlockedMetadata)
    collection.attributesLocked = isSettingDisabled(collectionConfigData.settings, CollectionSetting.UnlockedAttributes)
    collection.mintType = collectionConfigData.mintSettings.mintType.__kind
    collection.mintPrice = collectionConfigData.mintSettings.price
    collection.mintStartBlock = collectionConfigData.mintSettings.startBlock
    collection.mintEndBlock = collectionConfigData.mintSettings.endBlock

    await ctx.store.save(collection)
}

export { handleCollectionCreatedEvent, handleCollectionForceCreatedEvent }
