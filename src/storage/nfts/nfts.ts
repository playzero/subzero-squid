import { UnknownVersionError } from '../../common/errors'
import { NftsCollectionConfigOfStorage, NftsItemConfigOfStorage } from '../../types/generated/storage'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'
import { CollectionConfig, ItemConfig } from '../../types/generated/v74'

export async function getCollectionConfigOfStorageData(ctx: Context, block: Block, id: number): Promise<CollectionConfig | undefined> {
    const storage = new NftsCollectionConfigOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV74) {
        return await storage.getAsV74(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getItemConfigOfStorageData(ctx: Context, block: Block, collectionId: number, itemId: number): Promise<ItemConfig | undefined> {
    const storage = new NftsItemConfigOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV74) {
        return await storage.getAsV74(collectionId, itemId)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
