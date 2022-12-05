import {
    BatchContext,
    BatchProcessorItem,
    SubstrateBatchProcessor,
    BatchBlock,
    decodeHex
} from "@subsquid/substrate-processor"
import { Store, TypeormDatabase } from "@subsquid/typeorm-store"
import { eventHandlers, callHandlers } from './mappings'
import config from './config'
import { saveCurrentChainState, saveRegularChainState } from './chainState'
import { ChainState } from './model'
import { processBalancesEventItem, saveAccounts } from './balances'


const processor = new SubstrateBatchProcessor()
    .setDataSource(config.dataSource)
    .setBlockRange(config.blockRange || { from: 0 })
    .addEvent('Balances.Endowed', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Transfer', { data: { event: { args: true } }} as const)
    .addEvent('Balances.BalanceSet', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Reserved', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Unreserved', { data: { event: { args: true } }} as const)
    .addEvent('Balances.ReserveRepatriated', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Deposit', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Withdraw', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Slashed', { data: { event: { args: true } }} as const)

for (const eventName in eventHandlers) {
    processor.addEvent(eventName, {data: { event: { args: true } }} as const)
}
for (const callName in callHandlers) {
    processor.addCall(callName, {data: { call: { origin: true } }} as const)
}
processor

processor.includeAllBlocks()

export type Item = BatchProcessorItem<typeof processor>
export type Context = BatchContext<Store, Item>
export type Block = BatchBlock<Item>

processor.run(new TypeormDatabase(), run)

const SAVE_PERIOD = 12 * 60 * 60 * 1000
let lastStateTimestamp: number | undefined

async function getLastChainState(store: Store) {
    return await store.get(ChainState, {
        where: {},
        order: {
            timestamp: 'DESC',
        },
    })
}

async function run(ctx: Context): Promise<void> {
    const accountIdsHex = new Set<string>()

    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.kind === 'event') {
                if (item.name in eventHandlers) {
                    await eventHandlers[item.name](ctx, block, item.event, item.name)
                } else {
                    processBalancesEventItem(ctx, item.event, item.name, accountIdsHex)
                }
            }
            if (item.kind === 'call') {
                if (item.name in callHandlers) {
                    await callHandlers[item.name](ctx, block, item.call, item.name)
                }
            }
        }
        if (lastStateTimestamp == null) {
            lastStateTimestamp = (await getLastChainState(ctx.store))?.timestamp.getTime() || 0
        }
        if (block.header.timestamp - lastStateTimestamp >= SAVE_PERIOD) {
            
            if (accountIdsHex.size != 0) {
                const accountIdsU8 = [...accountIdsHex].map((id) => decodeHex(id))
                await saveAccounts(ctx, block.header, accountIdsU8)
                await saveRegularChainState(ctx, block.header)
            }

            lastStateTimestamp = block.header.timestamp
            accountIdsHex.clear()
        }
    }

    const block = ctx.blocks[ctx.blocks.length - 1]

    if (accountIdsHex.size != 0) {
        const accountIdsU8 = [...accountIdsHex].map((id) => decodeHex(id))
        await saveAccounts(ctx, block.header, accountIdsU8)
        await saveCurrentChainState(ctx, block.header)
    }
}
