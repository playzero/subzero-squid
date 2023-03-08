import { Pallet } from '..'
import { handleBattlepassCreatedEvent } from './events/battlepassCreated'
import { handleBattlepassClaimedEvent } from './events/battlepassClaimed'
import { handleBattlepassUpdatedEvent } from './events/battlepassUpdated'
import { handleBattlepassStateChangedEvent } from './events/battlepassStateChanged'

export default {
    name: 'Battlepass',
    callHandlers: {},
    eventHandlers: {
        'BattlepassCreated': handleBattlepassCreatedEvent,
        'BattlepassClaimed': handleBattlepassClaimedEvent,
        'BattlepassUpdated': handleBattlepassUpdatedEvent,
        'BattlepassActivated': handleBattlepassStateChangedEvent,
        'BattlepassEnded': handleBattlepassStateChangedEvent,
    },
} as Pallet
