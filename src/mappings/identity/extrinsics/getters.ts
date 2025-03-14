import { Call } from '../../../types/generated/support'
import { Context } from '../../../processor'

import { IdentityInfo } from '../../../types/generated/v74'
import { IdentitySetIdentityCall } from '../../../types/generated/calls'
import { UnknownVersionError } from '../../../common/errors'


export function getIdentitySetData(ctx: Context, call: Call): IdentityInfo {
    const c = new IdentitySetIdentityCall(ctx, call)
    if (c.isV74) {
        const { info } = c.asV74
        return info
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}
