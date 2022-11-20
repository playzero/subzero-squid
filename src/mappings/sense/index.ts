import { Pallet } from '../types/pallet';
import { handleEntityCreatedEvent } from './events/entityCreated';
import { handlePropertyUpdatedEvent } from './events/propertyUpdated';

export default {
	name: 'Sense',
	extrinsicHandlers: {},
	eventHandlers: {
		'EntityCreated': handleEntityCreatedEvent,
		'PropertyUpdated': handlePropertyUpdatedEvent,
	}
} as Pallet;
