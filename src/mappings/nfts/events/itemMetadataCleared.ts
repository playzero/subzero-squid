import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getNftMetadataClearedData } from './getters'
import { getNft } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'
import { constructNftId } from '../../../common/tools'


async function handleItemMetadataClearedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ collectionId, itemId ] = getNftMetadataClearedData(ctx, event)

    let nftId = constructNftId(collectionId, itemId)
    let nft = await getNft(ctx.store, nftId)
    if (!nft) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Nft', nftId))
        return
    }

    nft.metadata = null
    nft.name = null
    nft.description = null
    nft.image = null

    await ctx.store.save(nft)
}

export { handleItemMetadataClearedEvent }
