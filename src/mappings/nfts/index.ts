import { Pallet } from '..'
import { handleCollectionCreatedEvent } from './events/collectionCreated'
import { handleNftMintedEvent } from './events/nftMinted'
import { handleCollectionMetadataSetEvent } from './events/collectionMetadataSet'
import { handleNftMetadataSetEvent } from './events/nftMetadataSet'

export default {
    name: 'Nfts',
    callHandlers: {},
    eventHandlers: {
        'Created': handleCollectionCreatedEvent,
        'Issued': handleNftMintedEvent,
        'CollectionMetadataSet': handleCollectionMetadataSetEvent,
        'ItemMetadataSet': handleNftMetadataSetEvent
    },
} as Pallet
