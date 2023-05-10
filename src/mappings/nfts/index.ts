import { Pallet } from '..'
import { handleCollectionCreatedEvent, handleCollectionForceCreatedEvent } from './events/collectionCreated'
import { handleNftMintedEvent } from './events/nftMinted'
import { handleCollectionMetadataSetEvent } from './events/collectionMetadataSet'
import { handleNftMetadataSetEvent } from './events/itemMetadataSet'
import { handleCollectionOwnerChangedEvent } from './events/collectionOwnerChanged'
import { handleCollectionConfigChangedEvent } from './events/collectionConfigChanged'
import { handleAttributeSetEvent } from './events/attributeSet'
import { handleAttributeClearedEvent } from './events/attributeCleared'
import { handleItemMetadataClearedEvent } from './events/itemMetadataCleared'
import { handleCollectionMetadataClearedEvent } from './events/collectionMetadataCleared'
import { handleCollectionLockedEvent } from './events/collectionLocked'
import { handleItemPropertiesLockedEvent } from './events/itemPropertiesLocked'
import { handleItemTransferLockedEvent, handleItemTransferUnlockedEvent } from './events/itemTransferLockedUnlocked'

export default {
    name: 'Nfts',
    callHandlers: {},
    eventHandlers: {
        'Created': handleCollectionCreatedEvent,
        'ForceCreated': handleCollectionForceCreatedEvent,
        'CollectionConfigChanged': handleCollectionConfigChangedEvent,
        'CollectionMetadataSet': handleCollectionMetadataSetEvent,
        'CollectionMetadataCleared': handleCollectionMetadataClearedEvent,
        'CollectionLocked': handleCollectionLockedEvent, 
        'OwnerChanged': handleCollectionOwnerChangedEvent,
        'AttributeSet': handleAttributeSetEvent,
        'AttributeCleared': handleAttributeClearedEvent,
        'Issued': handleNftMintedEvent,
        'ItemMetadataSet': handleNftMetadataSetEvent,
        'ItemMetadataCleared': handleItemMetadataClearedEvent,
        'ItemPropertiesLocked': handleItemPropertiesLockedEvent,
        'ItemTransferLocked': handleItemTransferLockedEvent,
        'ItemTransferUnlocked': handleItemTransferUnlockedEvent
    },
} as Pallet
