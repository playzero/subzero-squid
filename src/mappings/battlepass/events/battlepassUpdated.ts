import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassUpdatedData } from './getters'
import { getBattlepass } from '../../../common/db/getters'
import { fetchMetadata } from '../../../common/ipfs/getters'

import { arrayToHexString } from '../../../common/tools'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleBattlepassUpdatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [battlepassId, battlepassName, cid, price] = getBattlepassUpdatedData(ctx, event)
    let bpassId = arrayToHexString(battlepassId)

    let battlepass = await getBattlepass(ctx.store, bpassId)
    if (!battlepass) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Battlepass', bpassId))
        return
    }

    if (battlepassName) battlepass.name = battlepassName.toString()
    if (price) battlepass.price = BigInt(price)
    if (cid) {
        battlepass.cid = cid.toString()

        // Fetch metadata from ipfs
        let metadata = await fetchMetadata(battlepass.cid, bpassId, 'battlepass', null)
        battlepass.name = metadata?.name ?? battlepass.name
        battlepass.description = metadata?.description ?? battlepass.description
        battlepass.image = metadata?.image ?? battlepass.image
    }

    await ctx.store.save(battlepass)
}

export { handleBattlepassUpdatedEvent }
