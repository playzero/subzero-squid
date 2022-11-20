// TODO: remove any
interface Pallet {
	name: string;
	extrinsicHandlers: Record<string, (context: any, block: any, call: any) => void >;
	eventHandlers: Record<string, (context: any, block: any, event: any) => void >;
}

export { Pallet };
