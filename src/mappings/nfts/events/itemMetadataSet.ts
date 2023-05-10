import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getNftMetadataSetData } from './getters'
import { getNft } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'
import { fetchMetadata } from '../../../common/ipfs/getters'
import { constructNftId } from '../../../common/tools'


async function handleNftMetadataSetEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [collectionId, itemId, metadata] = getNftMetadataSetData(ctx, event)

    let nftId = constructNftId(collectionId, itemId)
    let nft = await getNft(ctx.store, nftId)
    if (!nft) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Nft', nftId))
        return
    }

    nft.metadata = metadata.toString()

    // Fetch metadata from ipfs
    let meta = await fetchMetadata(nft.metadata, nftId, 'nft', null)
    nft.name = meta?.name ?? nft.name
    nft.description = meta?.description ?? nft.description
    nft.image = meta?.image ?? nft.image

    await ctx.store.save(nft)
}

export { handleNftMetadataSetEvent }
