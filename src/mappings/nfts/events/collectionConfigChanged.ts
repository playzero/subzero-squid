import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionConfigChangedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'
import { storage } from '../../../storage'
import { CollectionSetting, isSettingDisabled } from './common'


async function handleCollectionConfigChangedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const collectionId = getCollectionConfigChangedData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }
    
    const collectionConfigData = await storage.nfts.getCollectionConfigOfStorageData(ctx, block.header, collectionId)
    if (!collectionConfigData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'CollectionConfig', collectionId))
        return
    }

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

export { handleCollectionConfigChangedEvent }
