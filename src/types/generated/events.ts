import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v74 from './v74'
import * as v75 from './v75'

export class BalancesBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A balance was set by root.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
  }

  /**
   * A balance was set by root.
   */
  get asV74(): {who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get asV74(): {who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was created with some free balance.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
  }

  /**
   * An account was created with some free balance.
   */
  get asV74(): {account: Uint8Array, freeBalance: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get asV74(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v74.BalanceStatus} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV74(): {who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get asV74(): {who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transfer succeeded.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV74(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV74(): {who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asV74(): {who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BattlepassBattlepassActivatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Battlepass.BattlepassActivated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * BattlePass activated
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Battlepass.BattlepassActivated') === 'ed9ce68bcc372a15c62e00f3ce751cb6e3a85f61f6b0120cdf6f66c1b12bd7f4'
  }

  /**
   * BattlePass activated
   */
  get asV74(): {byWho: Uint8Array, orgId: Uint8Array, battlepassId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BattlepassBattlepassClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Battlepass.BattlepassClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * BattlePass claimed
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Battlepass.BattlepassClaimed') === '91b65ec51f0be74163e08c1db4ffd953096cb532abd4723bc59943ae482f0a5c'
  }

  /**
   * BattlePass claimed
   */
  get asV74(): {byWho: Uint8Array, forWho: Uint8Array, orgId: Uint8Array, battlepassId: Uint8Array, nftId: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BattlepassBattlepassCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Battlepass.BattlepassCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New BattlePass created
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Battlepass.BattlepassCreated') === '545dafcb8ce124c08cb42a6300e91ef56347c87c5f7645f2ab6024315c5c4494'
  }

  /**
   * New BattlePass created
   */
  get asV74(): {orgId: Uint8Array, battlepassId: Uint8Array, season: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BattlepassBattlepassEndedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Battlepass.BattlepassEnded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * BattlePass ended
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Battlepass.BattlepassEnded') === 'ed9ce68bcc372a15c62e00f3ce751cb6e3a85f61f6b0120cdf6f66c1b12bd7f4'
  }

  /**
   * BattlePass ended
   */
  get asV74(): {byWho: Uint8Array, orgId: Uint8Array, battlepassId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class BattlepassBattlepassUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Battlepass.BattlepassUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * BattlePass updated
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Battlepass.BattlepassUpdated') === 'c42e6eb126d7c581b6815d40882d669d25a54d0c8d877a077e981d793f673b26'
  }

  /**
   * BattlePass updated
   */
  get asV74(): {battlepassId: Uint8Array, name: (Uint8Array | undefined), cid: (Uint8Array | undefined), price: (number | undefined)} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlFundsSpendedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.FundsSpended')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Control.FundsSpended') === '099c5be51a66396abb273e830e2058b941aad39f3071d1634c96f9b293f58a04'
  }

  get asV74(): {orgId: Uint8Array, beneficiary: Uint8Array, amount: bigint, currencyId: v74.CurrencyId, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  get isV75(): boolean {
    return this._chain.getEventHash('Control.FundsSpended') === 'b75c498ec937404f8ad0743d97d27426027fac3fffadaaf2dda1e5eb9ca4da66'
  }

  get asV75(): {orgId: Uint8Array, beneficiary: Uint8Array, amount: bigint, currencyId: v75.CurrencyId, blockNumber: number} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlMemberAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.MemberAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A member has been added to the Org.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Control.MemberAdded') === 'c57cca31f3dcf3e0516f54aad1cbcd104d3e4afc717e4fb5667c8c9e8b1d1e27'
  }

  /**
   * A member has been added to the Org.
   */
  get asV74(): {orgId: Uint8Array, who: Uint8Array, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlMemberRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.MemberRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A member has been removed from the Org.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Control.MemberRemoved') === 'c57cca31f3dcf3e0516f54aad1cbcd104d3e4afc717e4fb5667c8c9e8b1d1e27'
  }

  /**
   * A member has been removed from the Org.
   */
  get asV74(): {orgId: Uint8Array, who: Uint8Array, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlMemberUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.MemberUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A member state has been updated
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Control.MemberUpdated') === '6069a7b283e802eb4c0771681dd9a8b3b907bb28dc8cc80b636d8717f0238e8b'
  }

  /**
   * A member state has been updated
   */
  get asV74(): {orgId: Uint8Array, who: Uint8Array, state: v74.MemberState, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlOrgCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.OrgCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Org was successfully created.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Control.OrgCreated') === '6dc87039cf7ad8828c149f473dd3d7aabd1dd4c9e85e2f729bf294df9474ccc1'
  }

  /**
   * Org was successfully created.
   */
  get asV74(): {orgId: Uint8Array, creator: Uint8Array, treasuryId: Uint8Array, createdAt: number, realmIndex: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlOrgDisabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.OrgDisabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Org was disabled and it's state become Inactive.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Control.OrgDisabled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Org was disabled and it's state become Inactive.
   */
  get asV74(): Uint8Array {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlOrgEnabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.OrgEnabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Org was enabled and it's state become Active.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Control.OrgEnabled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Org was enabled and it's state become Active.
   */
  get asV74(): Uint8Array {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlOrgUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.OrgUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Control.OrgUpdated') === '56e286ff0883c501a4abbab304815f66e27195e490410248f38fdd3ec39562a4'
  }

  get asV74(): {orgId: Uint8Array, primeId: (Uint8Array | undefined), orgType: (v74.OrgType | undefined), accessModel: (v74.AccessModel | undefined), memberLimit: (number | undefined), feeModel: (v74.FeeModel | undefined), membershipFee: (bigint | undefined), blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowActivatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Activated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Flow.Activated') === '1298080916d3502103b1b010f17c51ff90da4cfa7278463486275e928c258bc5'
  }

  get asV74(): {campaignId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowContributedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Contributed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Campaign was contributed.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Flow.Contributed') === 'd8db14008bc916744d2223c9ae64c77e900996ff702695e41ec566ede7ee72db'
  }

  /**
   * Campaign was contributed.
   */
  get asV74(): {campaignId: Uint8Array, sender: Uint8Array, contribution: bigint, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Campaign was successfully created.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Flow.Created') === 'ff2ecea79f1fe30537e2d7e89f486cb3705ec64411ac17525c02b4c7369601c4'
  }

  /**
   * Campaign was successfully created.
   */
  get asV74(): {campaignId: Uint8Array, creator: Uint8Array, admin: Uint8Array, target: bigint, deposit: bigint, expiry: number, name: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Failed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Campaign failed - successfully reverted.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Flow.Failed') === '8c26af8c0dbcf4eedccfc26b2eaa166ab0f2b6cd9cb14b67768380ced0d0251b'
  }

  /**
   * Campaign failed - successfully reverted.
   */
  get asV74(): {campaignId: Uint8Array, campaignBalance: bigint, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowSucceededEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Succeeded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Campaign was finalized.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Flow.Succeeded') === '8c26af8c0dbcf4eedccfc26b2eaa166ab0f2b6cd9cb14b67768380ced0d0251b'
  }

  /**
   * Campaign was finalized.
   */
  get asV74(): {campaignId: Uint8Array, campaignBalance: bigint, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentityClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentityCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get asV74(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsAttributeClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.AttributeCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Attribute metadata has been cleared for a `collection` or `item`.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.AttributeCleared') === '4d246c14b51f1093b2b931b12ca433d89593c617b09ce2082dfc43ef8671765e'
  }

  /**
   * Attribute metadata has been cleared for a `collection` or `item`.
   */
  get asV74(): {collection: number, maybeItem: (number | undefined), key: Uint8Array, namespace: v74.AttributeNamespace} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsAttributeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.AttributeSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New attribute metadata has been set for a `collection` or `item`.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.AttributeSet') === 'df375b4dee7b64ffeab47159334313f546d6fbe1d31d90f2253a667f6ac2799f'
  }

  /**
   * New attribute metadata has been set for a `collection` or `item`.
   */
  get asV74(): {collection: number, maybeItem: (number | undefined), key: Uint8Array, value: Uint8Array, namespace: v74.AttributeNamespace} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsCollectionConfigChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.CollectionConfigChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `collection` has had its config changed by the `Force` origin.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.CollectionConfigChanged') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
  }

  /**
   * A `collection` has had its config changed by the `Force` origin.
   */
  get asV74(): {collection: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsCollectionLockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.CollectionLocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some `collection` was locked.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.CollectionLocked') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
  }

  /**
   * Some `collection` was locked.
   */
  get asV74(): {collection: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsCollectionMetadataClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.CollectionMetadataCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Metadata has been cleared for a `collection`.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.CollectionMetadataCleared') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
  }

  /**
   * Metadata has been cleared for a `collection`.
   */
  get asV74(): {collection: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsCollectionMetadataSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.CollectionMetadataSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New metadata has been set for a `collection`.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.CollectionMetadataSet') === 'fbd84faf888505e9d8faf18bd544737c4436c745e6318c812a3065bb1a666c44'
  }

  /**
   * New metadata has been set for a `collection`.
   */
  get asV74(): {collection: number, data: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `collection` was created.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.Created') === 'a5c293082b1f3ffb16eaecc5b8d430ca1bb8c7bd090079ebcefcbf303cbfec61'
  }

  /**
   * A `collection` was created.
   */
  get asV74(): {collection: number, creator: Uint8Array, owner: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsForceCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.ForceCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `collection` was force-created.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.ForceCreated') === '6059bcf1dd7c48dc760f017d00a2c7c6719e745b3de9bde2046cbe26347c562f'
  }

  /**
   * A `collection` was force-created.
   */
  get asV74(): {collection: number, owner: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsIssuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.Issued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An `item` was issued.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.Issued') === '281c96f4233cbe042ed549cfca1fafa833d625f8d832ed29682ac34cdceb017d'
  }

  /**
   * An `item` was issued.
   */
  get asV74(): {collection: number, item: number, owner: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsItemMetadataClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.ItemMetadataCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Metadata has been cleared for an item.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.ItemMetadataCleared') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
  }

  /**
   * Metadata has been cleared for an item.
   */
  get asV74(): {collection: number, item: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsItemMetadataSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.ItemMetadataSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New metadata has been set for an item.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.ItemMetadataSet') === '83275a0de68e1c50aff60fe3090e27ba46bb68a77375edc5172d160af095826d'
  }

  /**
   * New metadata has been set for an item.
   */
  get asV74(): {collection: number, item: number, data: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsItemPropertiesLockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.ItemPropertiesLocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * `item` metadata or attributes were locked.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.ItemPropertiesLocked') === 'b6965c94a3e24b173446abb1e12a56b541de3d666894c46f3753c4d9029db290'
  }

  /**
   * `item` metadata or attributes were locked.
   */
  get asV74(): {collection: number, item: number, lockMetadata: boolean, lockAttributes: boolean} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsItemTransferLockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.ItemTransferLocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An `item` became non-transferable.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.ItemTransferLocked') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
  }

  /**
   * An `item` became non-transferable.
   */
  get asV74(): {collection: number, item: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsItemTransferUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.ItemTransferUnlocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An `item` became transferable.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.ItemTransferUnlocked') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
  }

  /**
   * An `item` became transferable.
   */
  get asV74(): {collection: number, item: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftsOwnerChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Nfts.OwnerChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The owner changed.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Nfts.OwnerChanged') === '0331b0b161c2f2db690f574540ade7765af19f5306dc65443561fbaa5825f323'
  }

  /**
   * The owner changed.
   */
  get asV74(): {collection: number, newOwner: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SenseEntityCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sense.EntityCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New Sense Entity was created.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Sense.EntityCreated') === 'd3f988a96c009c7a300ad9d1a0a932132d9cf8dea1768ddfe92a0cb29894fe4a'
  }

  /**
   * New Sense Entity was created.
   */
  get asV74(): {accountId: Uint8Array, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SensePropertyUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sense.PropertyUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Property was updated.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Sense.PropertyUpdated') === '0157fb72fdc70f6e0e7ea46a8962076e41d58d3a328d02f9a1c027127ad8d048'
  }

  /**
   * Property was updated.
   */
  get asV74(): {propertyType: v74.PropertyType, accountId: Uint8Array, blockNumber: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SignalAbortedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Signal.Aborted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Signal.Aborted') === '6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
  }

  get asV74(): {proposalId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SignalAcceptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Signal.Accepted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Signal.Accepted') === '6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
  }

  get asV74(): {proposalId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SignalActivatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Signal.Activated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Signal.Activated') === '6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
  }

  get asV74(): {proposalId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SignalCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Signal.Created')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Signal.Created') === 'a32001d595a80cd793e2fb41d5441290f20cdb8b2c9e5bccb6809adc21ae606a'
  }

  get asV74(): {account: Uint8Array, proposalId: Uint8Array, orgId: Uint8Array, campaignId: (Uint8Array | undefined), amount: (bigint | undefined), start: number, expiry: number} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SignalExpiredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Signal.Expired')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Signal.Expired') === '6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
  }

  get asV74(): {proposalId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SignalFinalizedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Signal.Finalized')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Signal.Finalized') === '6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
  }

  get asV74(): {proposalId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SignalRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Signal.Rejected')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Signal.Rejected') === '6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
  }

  get asV74(): {proposalId: Uint8Array} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class SignalVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Signal.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV74(): boolean {
    return this._chain.getEventHash('Signal.Voted') === 'c017b1f31028a2d6a927c9c9de81e8be0f84cc28fdc5daba87b671932d1be3be'
  }

  get asV74(): {account: Uint8Array, proposalId: Uint8Array, voted: boolean, yes: bigint, no: bigint, votePower: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A balance was set by root.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === '3f56a4a163d9a349f4c507f05504bcd8f7406e05ee2cf2afb71a1c95fe6e7d1c'
  }

  /**
   * A balance was set by root.
   */
  get asV74(): {currencyId: v74.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root.
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === '2709e4d5e22cc0ffc9ea83acb14a91d34f51c23570b58c7871580cb0e1a23c88'
  }

  /**
   * A balance was set by root.
   */
  get asV75(): {currencyId: v75.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Deposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Deposited some balance into an account
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.Deposited') === '35102e9f3a659dee57ab6c44339be31cb90f32cda97fce9385fc2d7a377f802c'
  }

  /**
   * Deposited some balance into an account
   */
  get asV74(): {currencyId: v74.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposited some balance into an account
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.Deposited') === '3814216330cce90459a7dd87eec5ce6633dd558e4b6fec814e6564a0b7857f54'
  }

  /**
   * Deposited some balance into an account
   */
  get asV75(): {currencyId: v75.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was created with some free balance.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '35102e9f3a659dee57ab6c44339be31cb90f32cda97fce9385fc2d7a377f802c'
  }

  /**
   * An account was created with some free balance.
   */
  get asV74(): {currencyId: v74.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '3814216330cce90459a7dd87eec5ce6633dd558e4b6fec814e6564a0b7857f54'
  }

  /**
   * An account was created with some free balance.
   */
  get asV75(): {currencyId: v75.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.ReserveRepatriated') === 'a93dbb961e7f37d006d3220134514ba1066319d31be02d782186e789abcfc997'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV74(): {currencyId: v74.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, status: v74.BalanceStatus} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.ReserveRepatriated') === 'f813154b4308967544cd1e0d173fe297c626584572f7990b8fd3239258b7b552'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV75(): {currencyId: v75.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, status: v75.BalanceStatus} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '35102e9f3a659dee57ab6c44339be31cb90f32cda97fce9385fc2d7a377f802c'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV74(): {currencyId: v74.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '3814216330cce90459a7dd87eec5ce6633dd558e4b6fec814e6564a0b7857f54'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV75(): {currencyId: v75.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.Slashed') === '611c8b13cd678a091c12c056524c777a2fa70819508e6433c85e94de0ee4fa98'
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get asV74(): {currencyId: v74.CurrencyId, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.Slashed') === '4ead49c39564a26b5ba44d2e818e364e8557710596888aea9c2b3db9562bbdb9'
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get asV75(): {currencyId: v75.CurrencyId, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transfer succeeded.
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === '0f49550afefd50a4550d665734a88abea6cef833393aac4878f8f5f4a1c23321'
  }

  /**
   * Transfer succeeded.
   */
  get asV74(): {currencyId: v74.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === 'c1074a221eae2ba3d0c748125ab33d8ad8fb8d5d2e48a41b1f9ade2b726ab43d'
  }

  /**
   * Transfer succeeded.
   */
  get asV75(): {currencyId: v75.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '35102e9f3a659dee57ab6c44339be31cb90f32cda97fce9385fc2d7a377f802c'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV74(): {currencyId: v74.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '3814216330cce90459a7dd87eec5ce6633dd558e4b6fec814e6564a0b7857f54'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV75(): {currencyId: v75.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Withdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get isV74(): boolean {
    return this._chain.getEventHash('Tokens.Withdrawn') === '35102e9f3a659dee57ab6c44339be31cb90f32cda97fce9385fc2d7a377f802c'
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get asV74(): {currencyId: v74.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV74)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Tokens.Withdrawn') === '3814216330cce90459a7dd87eec5ce6633dd558e4b6fec814e6564a0b7857f54'
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get asV75(): {currencyId: v75.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}
