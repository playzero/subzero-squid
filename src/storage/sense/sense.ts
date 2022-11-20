import { UnknownVersionError } from '../../common/errors'
import { SenseEntitiesStorage, SensePropertiesStorage } from '../../types/generated/storage'
import { Entity, EntityProperty, PropertyType } from '../../types/generated/v63'
import { BlockContext } from '../../types/generated/support'


export async function getEntityStorageData(ctx: BlockContext, hash: Uint8Array): Promise<Entity | undefined> {
    const storage = new SenseEntitiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getEntityPropertyStorageData(ctx: BlockContext, propertyType: PropertyType, hash: Uint8Array): Promise<EntityProperty | undefined> {
    const storage = new SensePropertiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(propertyType, hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}