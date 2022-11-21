import {
    BatchContext,
    BatchProcessorItem,
    SubstrateBatchProcessor,
    BatchBlock
} from "@subsquid/substrate-processor"
import { Store, TypeormDatabase } from "@subsquid/typeorm-store"
import { eventHandlers, callHandlers } from './mappings'
import { archiveGQL, chainRPC } from './config.json'

const processor = new SubstrateBatchProcessor()
    .setTypesBundle('zeroTypesBundle.json')
    .setBlockRange({from: 0})
    .setDataSource({
        archive: archiveGQL,
        chain: chainRPC,
    });

for (const eventName in eventHandlers) {
    processor.addEvent(eventName, {data: { event: { args: true } }} as const)
}
for (const callName in callHandlers) {
    processor.addCall(callName, {data: { call: { origin: true } }} as const)
}
processor.includeAllBlocks()

export type Item = BatchProcessorItem<typeof processor>
export type Context = BatchContext<Store, Item>

// Need some investigatoin: after declaration of types 
// EventItem and CallItem the Event doesn't have field "args"

// type EventItem = BatchProcessorEventItem<typeof processor>
// type CallItem = BatchProcessorCallItem<typeof processor>

export type Block = BatchBlock<Item>

processor.run(new TypeormDatabase(), run)

async function run(ctx: Context): Promise<void> {
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.kind === 'event') {
                if (item.name in eventHandlers) {
                    await eventHandlers[item.name](ctx, block, item.event, item.name)
                }
            }
            if (item.kind === 'call') {
                if (item.name in callHandlers) {
                    await callHandlers[item.name](ctx, block, item.call, item.name)
                }
            }
        }
    }
}