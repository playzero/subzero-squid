// import flow from './flow'
import control from './control'
// import identity from './identity'
// import sense from './sense'
// import signal from './signal'
import { Context, Block } from '../processor'
import { Call, Event } from '../types/generated/support';


const callHandlers: Record<string, (context: any, block: any, call: any, name: string) => Promise<void> > = {};
const eventHandlers: Record<string, (context: any, block: any, event: any, name: string) => Promise<void> > = {};

[control].forEach((pallet) => {
	for (const name in pallet.callHandlers) {
		callHandlers[`${pallet.name}.${name}`] = pallet.callHandlers[name]
	}
	for (const name in pallet.eventHandlers) {
		eventHandlers[`${pallet.name}.${name}`] = pallet.eventHandlers[name]
	}
});

export { callHandlers, eventHandlers }
