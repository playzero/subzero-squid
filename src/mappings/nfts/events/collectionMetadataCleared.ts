import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionMetadataClearedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleCollectionMetadataClearedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const collectionId = getCollectionMetadataClearedData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }

    collection.metadata = null
    collection.name = null
    collection.description = null
    collection.image = null

    await ctx.store.save(collection)
}

export { handleCollectionMetadataClearedEvent }
