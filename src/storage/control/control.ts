import { UnknownVersionError } from '../../common/errors'
import { ControlOrgsStorage, ControlOrgStatesStorage } from '../../types/generated/storage'
import { Org, OrgState } from '../../types/generated/v63'
import { Block } from '../../processor'
// import { BatchContext } from '../../mappings/types/contexts'
import { Context } from '../../processor'

export async function getOrgStorageData(ctx: Context, block: Block, hash: Uint8Array): Promise<Org | undefined> {
    const storage = new ControlOrgsStorage(ctx, block.header)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getOrgStateStorageData(ctx: Context, block: Block, hash: Uint8Array): Promise<OrgState | undefined> {
    const storage = new ControlOrgStatesStorage(ctx, block.header)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
