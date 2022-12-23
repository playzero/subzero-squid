import type {Result, Option} from './support'

export type BattlepassState = BattlepassState_DRAFT | BattlepassState_ACTIVE | BattlepassState_ENDED

export interface BattlepassState_DRAFT {
  __kind: 'DRAFT'
}

export interface BattlepassState_ACTIVE {
  __kind: 'ACTIVE'
}

export interface BattlepassState_ENDED {
  __kind: 'ENDED'
}

export interface Battlepass {
  creator: Uint8Array
  orgId: Uint8Array
  name: Uint8Array
  cid: Uint8Array
  season: number
  price: number
  collectionId: number
}
