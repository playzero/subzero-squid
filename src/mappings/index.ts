import flow from './flow'
import control from './control'
import identity from './identity'
import sense from './sense'
import signal from './signal'

const extrinsicHandlers: Record<string, (context: any) => void > = {};
const eventHandlers: Record<string, (context: any) => void > = {};

[control, flow, signal, sense, identity].forEach((pallet) => {
	const mergeHandlers = (
		handlers: Record<string, (context: any) => void >,
		saveHandlers: Record<string, (context: any) => void >) =>
	{
		for (const name in handlers) {
			saveHandlers[`${pallet.name}.${name}`] = handlers[name]
		}
	};
	mergeHandlers(pallet.extrinsicHandlers, extrinsicHandlers);
	mergeHandlers(pallet.eventHandlers, eventHandlers);
});

export { extrinsicHandlers, eventHandlers }
