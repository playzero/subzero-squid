// TODO: remove any
interface Pallet {
	name: string;
	extrinsicHandlers: Record<string, (context: any) => void >;
	eventHandlers: Record<string, (context: any) => void >;
}

export { Pallet };
