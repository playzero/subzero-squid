import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionOwnerChangedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'
import { addressCodec } from '../../../common/tools'
import { upsertIdentity } from '../../../common/db/identity'


async function handleCollectionOwnerChangedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ collectionId, newOwner ] = getCollectionOwnerChangedData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }
    
    let ownerString = addressCodec.encode(newOwner)
    let ownerIdentity = await upsertIdentity(ctx.store, ownerString, null)

    collection.owner = ownerIdentity

    await ctx.store.save(collection)
}

export { handleCollectionOwnerChangedEvent }
