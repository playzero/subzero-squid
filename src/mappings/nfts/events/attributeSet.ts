import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getAttributeSetData } from './getters'
import { getNft, getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'
import { NftAttribute, NftCollectionAttribute } from '../../../model'
import { constructNftAttributeId, constructNftId } from '../../../common/tools'


async function handleAttributeSetEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [collectionId, maybeItemId, key, value, namespace] = getAttributeSetData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }

    let attribute = null
    if (maybeItemId === undefined) {
        attribute = new NftCollectionAttribute()
        attribute.id = constructNftAttributeId(collectionId, namespace, key)
        attribute.collection = collection
    } else {
        let nftId = constructNftId(collectionId, maybeItemId)
        let nft = await getNft(ctx.store, nftId)
        if (!nft) {
            ctx.log.warn(ObjectNotExistsWarn(name, 'Nft', nftId))
            return
        }
        attribute = new NftAttribute()
        attribute.id = constructNftAttributeId(maybeItemId, namespace, key)
        attribute.nft = nft
    }

    attribute.namespace = namespace
    attribute.key = key
    attribute.value = value

    await ctx.store.save(attribute)
}

export { handleAttributeSetEvent }
