import {
    IdentityIdentityClearedEvent,
} from '../../../types/generated/events'
import { EventContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'


export function getIdentityClearedData(ctx: EventContext): Uint8Array {
    const event = new IdentityIdentityClearedEvent(ctx)
    if (event.isV63) {
        const { who, deposit } = event.asV63
        return who
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
