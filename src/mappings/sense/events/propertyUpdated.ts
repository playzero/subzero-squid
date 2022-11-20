import { EventHandlerContext, SubstrateBlock, Event } from '../../types/contexts'
import { getPropertyUpdatedData } from './getters'

import { getSenseEntity } from '../../util/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handlePropertyUpdatedEvent(ctx: EventHandlerContext, block: SubstrateBlock, event: Event) {
    const eventData = getPropertyUpdatedData(ctx, event)
	let accountId = arrayToHexString(eventData.accountId)

    let entity = await getSenseEntity(ctx.store, accountId)
    if (!entity) {
		ctx.log.warn(ObjectNotExistsWarn('SenseEntity', accountId))
		return
	}

    // TODO: update Event with value instead of looking into a storage
    const storageData = await storage.sense.getEntityPropertyStorageData(ctx, block, eventData.propertyType, eventData.accountId)
    if (!storageData) {
		ctx.log.warn(StorageNotExistsWarn(event.name, accountId))
		return
    }

    if (eventData.propertyType.__kind == 'Experience') {
        entity.experience = storageData.value
    } else if (eventData.propertyType.__kind == 'Trust') {
        entity.trust = storageData.value
    } else if (eventData.propertyType.__kind == 'Reputation') {
        entity.reputation = storageData.value
    }

    await ctx.store.save(entity)
}

export { handlePropertyUpdatedEvent };
