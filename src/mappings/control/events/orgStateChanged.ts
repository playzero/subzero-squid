import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getOrgEnabledData, getOrgDisabledData } from './getters'
import { getOrg } from '../../../common/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../../common/tools'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'

const getData: Record<string, (context: any, event: any) => Uint8Array > = {
    'Control.OrgEnabled': getOrgEnabledData,
    'Control.OrgDisabled': getOrgDisabledData,
}

async function handleOrgStateChangedEvent(ctx: Context, block: Block, event: Event, name: string) {
    if (!(name in getData)) {
        ctx.log.warn(`Unknown Control event: ${name}`)
        return
    }
    let orgIdArray = getData[name](ctx, event)
    let orgId = arrayToHexString(orgIdArray)

    let org = await getOrg(ctx.store, orgId);
    if (!org) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Org', orgId))
        return
    }
    const state = await storage.control.getOrgStateStorageData(ctx, block.header, orgIdArray)
    if (!state) {
        ctx.log.warn(StorageNotExistsWarn(name, 'OrgState', orgId))
        return
    }

    org.state = state.__kind
    org.updatedAtBlock = block.header.height;

    await ctx.store.save(org);
}

export { handleOrgStateChangedEvent };
