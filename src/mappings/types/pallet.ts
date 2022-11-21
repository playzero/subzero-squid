// TODO: remove any
interface Pallet {
	name: string;
	callHandlers: Record<string, (context: any, block: any, call: any) => Promise<void> >;
	eventHandlers: Record<string, (context: any, block: any, event: any) => Promise<void> >;
}

export { Pallet };
