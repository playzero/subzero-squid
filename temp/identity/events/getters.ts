import { IdentityIdentityClearedEvent } from '../../../types/generated/events'
export { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import { UnknownVersionError } from '../../../common/errors'


export function getIdentityClearedData(ctx: EventContext, ev: Event): Uint8Array {
    const event = new IdentityIdentityClearedEvent(ctx, ev)
    if (event.isV63) {
        const { who, deposit } = event.asV63
        return who
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
