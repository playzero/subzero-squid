import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassClaimedData } from './getters'
import { getBattlepass, getNft } from '../../../common/db/getters'

import { arrayToHexString, constructNftId } from '../../../common/tools'
import { ObjectNotExistsWarn } from '../../../common/errors'
import { BattlepassNft } from '../../../model'


async function handleBattlepassClaimedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ battlepassId, itemId ] = getBattlepassClaimedData(ctx, event)
    let bpassId = arrayToHexString(battlepassId)

    let battlepass = await getBattlepass(ctx.store, bpassId)
    if (!battlepass) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Battlepass', bpassId))
        return
    }
    let nftId = constructNftId(battlepass.collectionId, itemId)
    let nft = await getNft(ctx.store, nftId)
    if (!nft) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Nft', nftId))
        return
    }

    let bNft = new BattlepassNft()
    bNft.id = nftId
    bNft.battlepass = battlepass
    bNft.nft = nft

    await ctx.store.save(bNft)
}

export { handleBattlepassClaimedEvent }
