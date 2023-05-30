import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getItemPropertiesLockedData } from './getters'
import { getNft, getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'
import { constructNftId } from '../../../common/tools'


async function handleItemPropertiesLockedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ collectionId, itemId, lockMetadata, lockAttributes ] = getItemPropertiesLockedData(ctx, event)

    let nftId = constructNftId(collectionId, itemId)
    let nft = await getNft(ctx.store, nftId)
    if (!nft) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Nft', nftId))
        return
    }

    if (!await getNftCollection(ctx.store, collectionId.toString())) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }

    nft.metadataLocked = nft.metadataLocked || lockMetadata
    nft.attributesLocked = nft.attributesLocked || lockAttributes

    await ctx.store.save(nft)
}

export { handleItemPropertiesLockedEvent }
