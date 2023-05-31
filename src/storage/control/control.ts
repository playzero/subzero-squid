import { UnknownVersionError } from '../../common/errors'
import {
    ControlOrgsStorage,
    ControlOrgStatesStorage,
    ControlMemberStatesStorage
} from '../../types/generated/storage'
import * as typesV74 from '../../types/generated/v74'
import * as typesV75 from '../../types/generated/v75'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'

type MemberState = typesV74.MemberState
type Org = typesV75.Org | typesV74.Org
type OrgState = typesV74.OrgState

export async function getOrgStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<Org | undefined> {
    const storage = new ControlOrgsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV75) {
        return await storage.getAsV75(id)
    } else if (storage.isV74) {
        return await storage.getAsV74(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getOrgStateStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<OrgState | undefined> {
    const storage = new ControlOrgStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV74) {
        return await storage.getAsV74(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getMemberStateStorageData(ctx: Context, block: Block, orgId: Uint8Array, accountId: Uint8Array): Promise<MemberState | undefined> {
    const storage = new ControlMemberStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV74) {
        return await storage.getAsV74(orgId, accountId)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
