// import flow from './flow'
import control from './control'
// import identity from './identity'
// import sense from './sense'
// import signal from './signal'
import { EventItem, CallItem, Context, Block } from '../processor'


const callHandlers: Record<string, (context: Context, block: Block, item: CallItem) => Promise<void> > = {};
const eventHandlers: Record<string, (context: Context, block: Block, item: EventItem) => Promise<void> > = {};

[control].forEach((pallet) => {
	for (const name in pallet.callHandlers) {
		callHandlers[`${pallet.name}.${name}`] = pallet.callHandlers[name]
	}
	for (const name in pallet.eventHandlers) {
		eventHandlers[`${pallet.name}.${name}`] = pallet.eventHandlers[name]
	}
});

export { callHandlers, eventHandlers }
