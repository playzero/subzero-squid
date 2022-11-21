import { UnknownVersionError } from '../../common/errors'
import { FlowCampaignOfStorage, FlowCampaignStatesStorage } from '../../types/generated/storage'
import { Campaign, CampaignState } from '../../types/generated/v63'
import { BlockContext, Block } from '../../types/generated/support'


export async function getCampaignStorageData(ctx: BlockContext, block: Block, hash: Uint8Array): Promise<Campaign | undefined> {
    const storage = new FlowCampaignOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getCampaignStateStorageData(ctx: BlockContext, block: Block, hash: Uint8Array): Promise<CampaignState | undefined> {
    const storage = new FlowCampaignStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}