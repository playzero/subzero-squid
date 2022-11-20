import { IdentityInfo } from '../../../types/generated/v63'
import { IdentitySetIdentityCall } from '../../../types/generated/calls'
import { CallContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'


export function getIdentitySetData(ctx: CallContext): IdentityInfo {
    const call = new IdentitySetIdentityCall(ctx)
    if (call.isV63) {
        const { info } = call.asV63
        return info
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}
