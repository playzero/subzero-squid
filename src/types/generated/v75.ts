import type {Result, Option} from './support'

export type CurrencyId = CurrencyId_Token | CurrencyId_ForeignAsset

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyId_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export interface Org {
  index: number
  creator: Uint8Array
  prime: Uint8Array
  name: Uint8Array
  cid: Uint8Array
  orgType: OrgType
  feeModel: FeeModel
  membershipFee: (bigint | undefined)
  govCurrency: CurrencyId
  payCurrency: CurrencyId
  accessModel: AccessModel
  memberLimit: number
  created: number
  mutated: number
}

export interface Type_584 {
  index: number
  owner: Uint8Array
  title: Uint8Array
  cid: Uint8Array
  orgId: Uint8Array
  campaignId: (Uint8Array | undefined)
  proposalType: ProposalType
  deposit: bigint
  start: number
  expiry: number
  amount: (bigint | undefined)
  currencyId: (CurrencyId | undefined)
  beneficiary: (Uint8Array | undefined)
  slashingRule: SlashingRule
}

export interface Type_558 {
  free: bigint
  reserved: bigint
  frozen: bigint
}

export type TokenSymbol = TokenSymbol_ZERO | TokenSymbol_PLAY | TokenSymbol_GAME | TokenSymbol_DOT | TokenSymbol_KSM

export interface TokenSymbol_ZERO {
  __kind: 'ZERO'
}

export interface TokenSymbol_PLAY {
  __kind: 'PLAY'
}

export interface TokenSymbol_GAME {
  __kind: 'GAME'
}

export interface TokenSymbol_DOT {
  __kind: 'DOT'
}

export interface TokenSymbol_KSM {
  __kind: 'KSM'
}

export type OrgType = OrgType_Individual | OrgType_Company | OrgType_Dao | OrgType_Hybrid

export interface OrgType_Individual {
  __kind: 'Individual'
}

export interface OrgType_Company {
  __kind: 'Company'
}

export interface OrgType_Dao {
  __kind: 'Dao'
}

export interface OrgType_Hybrid {
  __kind: 'Hybrid'
}

export type FeeModel = FeeModel_NoFees | FeeModel_Reserve | FeeModel_Transfer

export interface FeeModel_NoFees {
  __kind: 'NoFees'
}

export interface FeeModel_Reserve {
  __kind: 'Reserve'
}

export interface FeeModel_Transfer {
  __kind: 'Transfer'
}

export type AccessModel = AccessModel_Open | AccessModel_Voting | AccessModel_Prime

export interface AccessModel_Open {
  __kind: 'Open'
}

export interface AccessModel_Voting {
  __kind: 'Voting'
}

export interface AccessModel_Prime {
  __kind: 'Prime'
}

export type ProposalType = ProposalType_General | ProposalType_Withdrawal | ProposalType_Spending

export interface ProposalType_General {
  __kind: 'General'
}

export interface ProposalType_Withdrawal {
  __kind: 'Withdrawal'
}

export interface ProposalType_Spending {
  __kind: 'Spending'
}

export type SlashingRule = SlashingRule_Automated | SlashingRule_Tribunal

export interface SlashingRule_Automated {
  __kind: 'Automated'
}

export interface SlashingRule_Tribunal {
  __kind: 'Tribunal'
}
