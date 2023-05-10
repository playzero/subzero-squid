import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getItemTransferLockedData, getItemTransferUnlockedData } from './getters'
import { getNft, getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'
import { constructNftId } from '../../../common/tools'


async function handleItemTransferLockedEvent(ctx: Context, block: Block, event: Event, name: string) {
    handleEvent(ctx, block, event, name, true, getItemTransferLockedData)
}

async function handleItemTransferUnlockedEvent(ctx: Context, block: Block, event: Event, name: string) {
    handleEvent(ctx, block, event, name, false, getItemTransferUnlockedData)
}

async function handleEvent(ctx: Context, block: Block, event: Event, name: string, locked: boolean, getData: (context: any, event: any) => [number, number]) {
    const [ collectionId, itemId ] = getData(ctx, event)

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

    nft.transfersLocked = locked

    await ctx.store.save(nft)
}

export { handleItemTransferLockedEvent, handleItemTransferUnlockedEvent }
