import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    NftsCreatedEvent,
    NftsCollectionMetadataSetEvent,
    NftsIssuedEvent,
    NftsItemMetadataSetEvent
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

export function getCollectionMetadataSetData(ctx: Context, ev: Event): [number, Uint8Array] {
    const event = new NftsCollectionMetadataSetEvent(ctx, ev)
    if (event.isV74) {
        const { collection, data } = event.asV74
        return [ collection, data ]
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