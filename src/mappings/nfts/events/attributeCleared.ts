import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getAttributeClearedData } from './getters'
import { getNftAttribute, getNftCollectionAttribute } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'
import { constructNftAttributeId } from '../../../common/tools'


async function handleAttributeClearedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ collectionId, maybeItemId, key, namespace ] = getAttributeClearedData(ctx, event)

    let attribute = null
    let attributeId = null
    let attributeTable = null
    if (maybeItemId === undefined) {
        attributeTable = 'NftCollectionAttribute'
        attributeId = constructNftAttributeId(collectionId, namespace, key)
        attribute = await getNftCollectionAttribute(ctx.store, attributeId)
    } else {
        attributeTable = 'NftAttribute'
        attributeId = constructNftAttributeId(maybeItemId, namespace, key)
        attribute = await getNftAttribute(ctx.store, attributeId)
    }

    if (!attribute) {
        ctx.log.warn(ObjectNotExistsWarn(name, attributeTable, attributeId))
        return
    }
    
    ctx.store.remove(attribute)
}

export { handleAttributeClearedEvent }
