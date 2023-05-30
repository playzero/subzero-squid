import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    NftsCreatedEvent,
    NftsCollectionMetadataSetEvent,
    NftsIssuedEvent,
    NftsItemMetadataSetEvent,
    NftsForceCreatedEvent,
    NftsOwnerChangedEvent,
    NftsCollectionConfigChangedEvent,
    NftsAttributeSetEvent,
    NftsAttributeClearedEvent,
    NftsItemMetadataClearedEvent,
    NftsCollectionMetadataClearedEvent,
    NftsCollectionLockedEvent,
    NftsItemPropertiesLockedEvent,
    NftsItemTransferLockedEvent,
    NftsItemTransferUnlockedEvent
} from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'


export function getNftMintedData(ctx: Context, ev: Event): [Uint8Array, number, number] {
    const event = new NftsIssuedEvent(ctx, ev)
    if (event.isV74) {
        const { owner, collection, item } = event.asV74
        return [ owner, collection, item ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionCreatedData(ctx: Context, ev: Event): [Uint8Array, number] {
    const event = new NftsCreatedEvent(ctx, ev)
    if (event.isV74) {
        const { owner, collection } = event.asV74
        return [ owner, collection ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionForceCreatedData(ctx: Context, ev: Event): [Uint8Array, number] {
    const event = new NftsForceCreatedEvent(ctx, ev)
    if (event.isV74) {
        const { owner, collection } = event.asV74
        return [ owner, collection ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionMetadataSetData(ctx: Context, ev: Event): [number, Uint8Array] {
    const event = new NftsCollectionMetadataSetEvent(ctx, ev)
    if (event.isV74) {
        const { collection, data } = event.asV74
        return [ collection, data ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionMetadataClearedData(ctx: Context, ev: Event): number {
    const event = new NftsCollectionMetadataClearedEvent(ctx, ev)
    if (event.isV74) {
        const { collection } = event.asV74
        return collection
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getNftMetadataSetData(ctx: Context, ev: Event): [number, number, Uint8Array] {
    const event = new NftsItemMetadataSetEvent(ctx, ev)
    if (event.isV74) {
        const { collection, item, data } = event.asV74
        return [ collection, item, data ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getNftMetadataClearedData(ctx: Context, ev: Event): [number, number] {
    const event = new NftsItemMetadataClearedEvent(ctx, ev)
    if (event.isV74) {
        const { collection, item } = event.asV74
        return [ collection, item ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionOwnerChangedData(ctx: Context, ev: Event): [number, Uint8Array] {
    const event = new NftsOwnerChangedEvent(ctx, ev)
    if (event.isV74) {
        const { collection, newOwner } = event.asV74
        return [ collection, newOwner ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionConfigChangedData(ctx: Context, ev: Event): number {
    const event = new NftsCollectionConfigChangedEvent(ctx, ev)
    if (event.isV74) {
        const { collection } = event.asV74
        return collection
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getAttributeSetData(ctx: Context, ev: Event): [number, number | undefined, string, string, string ] {
    const event = new NftsAttributeSetEvent(ctx, ev)
    if (event.isV74) {
        const { collection, maybeItem, key, value, namespace } = event.asV74
        return [ collection, maybeItem, key.toString(), value.toString(), namespace.__kind ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getAttributeClearedData(ctx: Context, ev: Event): [number, number | undefined, string, string ] {
    const event = new NftsAttributeClearedEvent(ctx, ev)
    if (event.isV74) {
        const { collection, maybeItem, key, namespace } = event.asV74
        return [ collection, maybeItem, key.toString(), namespace.__kind ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionLockedData(ctx: Context, ev: Event): number {
    const event = new NftsCollectionLockedEvent(ctx, ev)
    if (event.isV74) {
        const { collection } = event.asV74
        return collection
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getItemPropertiesLockedData(ctx: Context, ev: Event): [number, number, boolean, boolean] {
    const event = new NftsItemPropertiesLockedEvent(ctx, ev)
    if (event.isV74) {
        const { collection, item, lockMetadata, lockAttributes } = event.asV74
        return [ collection, item, lockMetadata, lockAttributes ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getItemTransferLockedData(ctx: Context, ev: Event): [number, number] {
    const event = new NftsItemTransferLockedEvent(ctx, ev)
    if (event.isV74) {
        const { collection, item } = event.asV74
        return [ collection, item ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getItemTransferUnlockedData(ctx: Context, ev: Event): [number, number] {
    const event = new NftsItemTransferUnlockedEvent(ctx, ev)
    if (event.isV74) {
        const { collection, item } = event.asV74
        return [ collection, item ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}