import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionLockedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'
import { storage } from '../../../storage'
import { CollectionSetting, isSettingDisabled } from './common'


async function handleCollectionLockedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const collectionId = getCollectionLockedData(ctx, event)

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

    collection.maxLocked = isSettingDisabled(collectionConfigData.settings, CollectionSetting.UnlockedMaxSupply)
    collection.transfersLocked = isSettingDisabled(collectionConfigData.settings, CollectionSetting.TransferableItems)
    collection.metadataLocked = isSettingDisabled(collectionConfigData.settings, CollectionSetting.UnlockedMetadata)
    collection.attributesLocked = isSettingDisabled(collectionConfigData.settings, CollectionSetting.UnlockedAttributes)

    await ctx.store.save(collection)
}

export { handleCollectionLockedEvent }
