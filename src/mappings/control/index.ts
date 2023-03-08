import { Pallet } from '..'
import { handleMemberAddedEvent } from './events/memberAdded'
import { handleOrgCreatedEvent } from './events/orgCreated'
import { handleMemberRemovedEvent } from './events/memberRemoved'
import { handleMemberUpdatedEvent } from './events/memberUpdated'
import { handleOrgUpdatedEvent } from './events/orgUpdated'
import { handleOrgStateChangedEvent } from './events/orgStateChanged'


export default {
    name: 'Control',
    callHandlers: {},
    eventHandlers: {
        'OrgCreated': handleOrgCreatedEvent,
        'OrgUpdated': handleOrgUpdatedEvent,
        'OrgEnabled': handleOrgStateChangedEvent,
        'OrgDisabled': handleOrgStateChangedEvent,
        'MemberAdded': handleMemberAddedEvent,
        'MemberRemoved': handleMemberRemovedEvent,
        'MemberUpdated': handleMemberUpdatedEvent,
    },
} as Pallet
