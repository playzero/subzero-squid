import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v74 from './v74'

export class BalancesExistentialDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Balances', 'ExistentialDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') != null
  }
}

export class BalancesMaxLocksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of locks that should exist on an account.
   *  Not strictly enforced, but used for weight estimation.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Balances', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of locks that should exist on an account.
   *  Not strictly enforced, but used for weight estimation.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Balances', 'MaxLocks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'MaxLocks') != null
  }
}

export class BalancesMaxReservesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Balances', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Balances', 'MaxReserves')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'MaxReserves') != null
  }
}

export class BattlepassNativeTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a native token.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Battlepass', 'NativeTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a native token.
   */
  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Battlepass', 'NativeTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Battlepass', 'NativeTokenId') != null
  }
}

export class BattlepassProtocolTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Battlepass', 'ProtocolTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Battlepass', 'ProtocolTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Battlepass', 'ProtocolTokenId') != null
  }
}

export class BattlepassStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name, cid strings stored on-chain.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Battlepass', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name, cid strings stored on-chain.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Battlepass', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Battlepass', 'StringLimit') != null
  }
}

export class BountiesBountyDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for placing a bounty proposal.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'BountyDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for placing a bounty proposal.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'BountyDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'BountyDepositBase') != null
  }
}

export class BountiesBountyDepositPayoutDelayConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The delay period for which a bounty beneficiary need to wait before claim the payout.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'BountyDepositPayoutDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The delay period for which a bounty beneficiary need to wait before claim the payout.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'BountyDepositPayoutDelay')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'BountyDepositPayoutDelay') != null
  }
}

export class BountiesBountyUpdatePeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Bounty duration in blocks.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'BountyUpdatePeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Bounty duration in blocks.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'BountyUpdatePeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'BountyUpdatePeriod') != null
  }
}

export class BountiesBountyValueMinimumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum value for a bounty.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'BountyValueMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum value for a bounty.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'BountyValueMinimum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'BountyValueMinimum') != null
  }
}

export class BountiesCuratorDepositMaxConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMax') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV74(): (bigint | undefined) {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'CuratorDepositMax')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMax') != null
  }
}

export class BountiesCuratorDepositMinConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMin') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV74(): (bigint | undefined) {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'CuratorDepositMin')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMin') != null
  }
}

export class BountiesCuratorDepositMultiplierConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The curator deposit is calculated as a percentage of the curator fee.
   * 
   *  This deposit has optional upper and lower bounds with `CuratorDepositMax` and
   *  `CuratorDepositMin`.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMultiplier') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The curator deposit is calculated as a percentage of the curator fee.
   * 
   *  This deposit has optional upper and lower bounds with `CuratorDepositMax` and
   *  `CuratorDepositMin`.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'CuratorDepositMultiplier')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMultiplier') != null
  }
}

export class BountiesDataDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'DataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'DataDepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'DataDepositPerByte') != null
  }
}

export class BountiesMaximumReasonLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Bounties', 'MaximumReasonLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Bounties', 'MaximumReasonLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'MaximumReasonLength') != null
  }
}

export class ChildBountiesChildBountyValueMinimumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum value for a child-bounty.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('ChildBounties', 'ChildBountyValueMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum value for a child-bounty.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('ChildBounties', 'ChildBountyValueMinimum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ChildBounties', 'ChildBountyValueMinimum') != null
  }
}

export class ChildBountiesMaxActiveChildBountyCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of child bounties that can be added to a parent bounty.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('ChildBounties', 'MaxActiveChildBountyCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of child bounties that can be added to a parent bounty.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('ChildBounties', 'MaxActiveChildBountyCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ChildBounties', 'MaxActiveChildBountyCount') != null
  }
}

export class ContractsDeletionQueueDepthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of contracts that can be pending for deletion.
   * 
   *  When a contract is deleted by calling `seal_terminate` it becomes inaccessible
   *  immediately, but the deletion of the storage items it has accumulated is performed
   *  later. The contract is put into the deletion queue. This defines how many
   *  contracts can be queued up at the same time. If that limit is reached `seal_terminate`
   *  will fail. The action must be retried in a later block in that case.
   * 
   *  The reasons for limiting the queue depth are:
   * 
   *  1. The queue is in storage in order to be persistent between blocks. We want to limit
   *  	the amount of storage that can be consumed.
   *  2. The queue is stored in a vector and needs to be decoded as a whole when reading
   * 		it at the end of each block. Longer queues take more weight to decode and hence
   * 		limit the amount of items that can be deleted per block.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'DeletionQueueDepth') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of contracts that can be pending for deletion.
   * 
   *  When a contract is deleted by calling `seal_terminate` it becomes inaccessible
   *  immediately, but the deletion of the storage items it has accumulated is performed
   *  later. The contract is put into the deletion queue. This defines how many
   *  contracts can be queued up at the same time. If that limit is reached `seal_terminate`
   *  will fail. The action must be retried in a later block in that case.
   * 
   *  The reasons for limiting the queue depth are:
   * 
   *  1. The queue is in storage in order to be persistent between blocks. We want to limit
   *  	the amount of storage that can be consumed.
   *  2. The queue is stored in a vector and needs to be decoded as a whole when reading
   * 		it at the end of each block. Longer queues take more weight to decode and hence
   * 		limit the amount of items that can be deleted per block.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'DeletionQueueDepth')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'DeletionQueueDepth') != null
  }
}

export class ContractsDeletionWeightLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of weight that can be consumed per block for lazy trie removal.
   * 
   *  The amount of weight that is dedicated per block to work on the deletion queue. Larger
   *  values allow more trie keys to be deleted in each block but reduce the amount of
   *  weight that is left for transactions. See [`Self::DeletionQueueDepth`] for more
   *  information about the deletion queue.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'DeletionWeightLimit') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
  }

  /**
   *  The maximum amount of weight that can be consumed per block for lazy trie removal.
   * 
   *  The amount of weight that is dedicated per block to work on the deletion queue. Larger
   *  values allow more trie keys to be deleted in each block but reduce the amount of
   *  weight that is left for transactions. See [`Self::DeletionQueueDepth`] for more
   *  information about the deletion queue.
   */
  get asV74(): v74.Weight {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'DeletionWeightLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'DeletionWeightLimit') != null
  }
}

export class ContractsDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of balance a caller has to pay for each byte of storage.
   * 
   *  # Note
   * 
   *  Changing this value for an existing chain might need a storage migration.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'DepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of balance a caller has to pay for each byte of storage.
   * 
   *  # Note
   * 
   *  Changing this value for an existing chain might need a storage migration.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'DepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'DepositPerByte') != null
  }
}

export class ContractsDepositPerItemConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of balance a caller has to pay for each storage item.
   * 
   *  # Note
   * 
   *  Changing this value for an existing chain might need a storage migration.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'DepositPerItem') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of balance a caller has to pay for each storage item.
   * 
   *  # Note
   * 
   *  Changing this value for an existing chain might need a storage migration.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'DepositPerItem')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'DepositPerItem') != null
  }
}

export class ContractsMaxCodeLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a contract code in bytes. This limit applies to the instrumented
   *  version of the code. Therefore `instantiate_with_code` can fail even when supplying
   *  a wasm binary below this maximum size.
   * 
   *  The value should be chosen carefully taking into the account the overall memory limit
   *  your runtime has, as well as the [maximum allowed callstack
   *  depth](#associatedtype.CallStack). Look into the `integrity_test()` for some insights.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'MaxCodeLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a contract code in bytes. This limit applies to the instrumented
   *  version of the code. Therefore `instantiate_with_code` can fail even when supplying
   *  a wasm binary below this maximum size.
   * 
   *  The value should be chosen carefully taking into the account the overall memory limit
   *  your runtime has, as well as the [maximum allowed callstack
   *  depth](#associatedtype.CallStack). Look into the `integrity_test()` for some insights.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'MaxCodeLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'MaxCodeLen') != null
  }
}

export class ContractsMaxDebugBufferLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of the debug buffer in bytes.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'MaxDebugBufferLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of the debug buffer in bytes.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'MaxDebugBufferLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'MaxDebugBufferLen') != null
  }
}

export class ContractsMaxStorageKeyLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum allowable length in bytes for storage keys.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'MaxStorageKeyLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum allowable length in bytes for storage keys.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'MaxStorageKeyLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'MaxStorageKeyLen') != null
  }
}

export class ContractsScheduleConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Cost schedule and limits.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'Schedule') === 'f7e30dcc680f8843757e16f6b7a9ff4c03efa592b3250e57e6b52095568f7168'
  }

  /**
   *  Cost schedule and limits.
   */
  get asV74(): v74.Schedule {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'Schedule')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'Schedule') != null
  }
}

export class ContractsUnsafeUnstableInterfaceConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Make contract callable functions marked as `#[unstable]` available.
   * 
   *  Contracts that use `#[unstable]` functions won't be able to be uploaded unless
   *  this is set to `true`. This is only meant for testnets and dev nodes in order to
   *  experiment with new features.
   * 
   *  # Warning
   * 
   *  Do **not** set to `true` on productions chains.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Contracts', 'UnsafeUnstableInterface') === 'ad6087d319c50ed2bab855d7787007597248f7ed5d13382638d7da078264028b'
  }

  /**
   *  Make contract callable functions marked as `#[unstable]` available.
   * 
   *  Contracts that use `#[unstable]` functions won't be able to be uploaded unless
   *  this is set to `true`. This is only meant for testnets and dev nodes in order to
   *  experiment with new features.
   * 
   *  # Warning
   * 
   *  Do **not** set to `true` on productions chains.
   */
  get asV74(): boolean {
    assert(this.isV74)
    return this._chain.getConstant('Contracts', 'UnsafeUnstableInterface')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'UnsafeUnstableInterface') != null
  }
}

export class ControlMaxMembersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of members per one org.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Control', 'MaxMembers') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of members per one org.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Control', 'MaxMembers')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'MaxMembers') != null
  }
}

export class ControlMinimumDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The min amount of the deposit which is locked during Org creation (in Protocol tokens).
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Control', 'MinimumDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The min amount of the deposit which is locked during Org creation (in Protocol tokens).
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Control', 'MinimumDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'MinimumDeposit') != null
  }
}

export class ControlPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The ID for this pallet.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Control', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  The ID for this pallet.
   */
  get asV74(): Uint8Array {
    assert(this.isV74)
    return this._chain.getConstant('Control', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'PalletId') != null
  }
}

export class ControlPaymentTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Control', 'PaymentTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Control', 'PaymentTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'PaymentTokenId') != null
  }
}

export class ControlProtocolTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Control', 'ProtocolTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Control', 'ProtocolTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'ProtocolTokenId') != null
  }
}

export class ControlStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name or cid stored on-chain.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Control', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name or cid stored on-chain.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Control', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'StringLimit') != null
  }
}

export class CurrenciesGetNativeCurrencyIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV74() {
    return this._chain.getConstantTypeHash('Currencies', 'GetNativeCurrencyId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Currencies', 'GetNativeCurrencyId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Currencies', 'GetNativeCurrencyId') != null
  }
}

export class DemocracyCooloffPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'CooloffPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') != null
  }
}

export class DemocracyEnactmentPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The period between a proposal being approved and enacted.
   * 
   *  It should generally be a little more than the unstake period to ensure that
   *  voting stakers have an opportunity to remove themselves from the system in the case
   *  where they are on the losing side of a vote.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The period between a proposal being approved and enacted.
   * 
   *  It should generally be a little more than the unstake period to ensure that
   *  voting stakers have an opportunity to remove themselves from the system in the case
   *  where they are on the losing side of a vote.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'EnactmentPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') != null
  }
}

export class DemocracyFastTrackVotingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum voting period allowed for a fast-track referendum.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Minimum voting period allowed for a fast-track referendum.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'FastTrackVotingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') != null
  }
}

export class DemocracyInstantAllowedConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
   *  want to set this permanently to `false`, others may want to condition it on things such
   *  as an upgrade having happened recently.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') === 'ad6087d319c50ed2bab855d7787007597248f7ed5d13382638d7da078264028b'
  }

  /**
   *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
   *  want to set this permanently to `false`, others may want to condition it on things such
   *  as an upgrade having happened recently.
   */
  get asV74(): boolean {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'InstantAllowed')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') != null
  }
}

export class DemocracyLaunchPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How often (in blocks) new public referenda are launched.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How often (in blocks) new public referenda are launched.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'LaunchPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') != null
  }
}

export class DemocracyMaxBlacklistedConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of items which can be blacklisted.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxBlacklisted') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of items which can be blacklisted.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'MaxBlacklisted')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxBlacklisted') != null
  }
}

export class DemocracyMaxDepositsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of deposits a public proposal may have at any time.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxDeposits') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of deposits a public proposal may have at any time.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'MaxDeposits')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxDeposits') != null
  }
}

export class DemocracyMaxProposalsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of public proposals that can exist at any time.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of public proposals that can exist at any time.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'MaxProposals')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') != null
  }
}

export class DemocracyMaxVotesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of votes for an account.
   * 
   *  Also used to compute weight, an overly big value can
   *  lead to extrinsic with very big weight: see `delegate` for instance.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of votes for an account.
   * 
   *  Also used to compute weight, an overly big value can
   *  lead to extrinsic with very big weight: see `delegate` for instance.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'MaxVotes')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') != null
  }
}

export class DemocracyMinimumDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'MinimumDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') != null
  }
}

export class DemocracyVoteLockingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period of vote locking.
   * 
   *  It should be no shorter than enactment period to ensure that in the case of an approval,
   *  those successful voters are locked into the consequences that their votes entail.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The minimum period of vote locking.
   * 
   *  It should be no shorter than enactment period to ensure that in the case of an approval,
   *  those successful voters are locked into the consequences that their votes entail.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'VoteLockingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') != null
  }
}

export class DemocracyVotingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How often (in blocks) to check for new votes.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How often (in blocks) to check for new votes.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Democracy', 'VotingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') != null
  }
}

export class ElectionsCandidacyBondConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How much should be locked up in order to submit one's candidacy.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'CandidacyBond') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  How much should be locked up in order to submit one's candidacy.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'CandidacyBond')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'CandidacyBond') != null
  }
}

export class ElectionsDesiredMembersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of members to elect.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'DesiredMembers') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of members to elect.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'DesiredMembers')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'DesiredMembers') != null
  }
}

export class ElectionsDesiredRunnersUpConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of runners_up to keep.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'DesiredRunnersUp') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of runners_up to keep.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'DesiredRunnersUp')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'DesiredRunnersUp') != null
  }
}

export class ElectionsMaxCandidatesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of candidates in a phragmen election.
   * 
   *  Warning: This impacts the size of the election which is run onchain. Chose wisely, and
   *  consider how it will impact `T::WeightInfo::election_phragmen`.
   * 
   *  When this limit is reached no more candidates are accepted in the election.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'MaxCandidates') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of candidates in a phragmen election.
   * 
   *  Warning: This impacts the size of the election which is run onchain. Chose wisely, and
   *  consider how it will impact `T::WeightInfo::election_phragmen`.
   * 
   *  When this limit is reached no more candidates are accepted in the election.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'MaxCandidates')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'MaxCandidates') != null
  }
}

export class ElectionsMaxVotersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of voters to allow in a phragmen election.
   * 
   *  Warning: This impacts the size of the election which is run onchain. Chose wisely, and
   *  consider how it will impact `T::WeightInfo::election_phragmen`.
   * 
   *  When the limit is reached the new voters are ignored.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'MaxVoters') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of voters to allow in a phragmen election.
   * 
   *  Warning: This impacts the size of the election which is run onchain. Chose wisely, and
   *  consider how it will impact `T::WeightInfo::election_phragmen`.
   * 
   *  When the limit is reached the new voters are ignored.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'MaxVoters')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'MaxVoters') != null
  }
}

export class ElectionsMaxVotesPerVoterConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum numbers of votes per voter.
   * 
   *  Warning: This impacts the size of the election which is run onchain. Chose wisely, and
   *  consider how it will impact `T::WeightInfo::election_phragmen`.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'MaxVotesPerVoter') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum numbers of votes per voter.
   * 
   *  Warning: This impacts the size of the election which is run onchain. Chose wisely, and
   *  consider how it will impact `T::WeightInfo::election_phragmen`.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'MaxVotesPerVoter')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'MaxVotesPerVoter') != null
  }
}

export class ElectionsPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Identifier for the elections-phragmen pallet's lock
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  Identifier for the elections-phragmen pallet's lock
   */
  get asV74(): Uint8Array {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'PalletId') != null
  }
}

export class ElectionsTermDurationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How long each seat is kept. This defines the next block number at which an election
   *  round will happen. If set to zero, no elections are ever triggered and the module will
   *  be in passive mode.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'TermDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How long each seat is kept. This defines the next block number at which an election
   *  round will happen. If set to zero, no elections are ever triggered and the module will
   *  be in passive mode.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'TermDuration')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'TermDuration') != null
  }
}

export class ElectionsVotingBondBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Base deposit associated with voting.
   * 
   *  This should be sensibly high to economically ensure the pallet cannot be attacked by
   *  creating a gigantic number of votes.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Base deposit associated with voting.
   * 
   *  This should be sensibly high to economically ensure the pallet cannot be attacked by
   *  creating a gigantic number of votes.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'VotingBondBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondBase') != null
  }
}

export class ElectionsVotingBondFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of bond that need to be locked for each vote (32 bytes).
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of bond that need to be locked for each vote (32 bytes).
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Elections', 'VotingBondFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondFactor') != null
  }
}

export class FlowCampaignDurationLimitsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Default time limit for a campaign in blocks.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'CampaignDurationLimits') === '89667797236ba996cee700097e48264fab1c5603dc68df58a8ff56acf2809f5c'
  }

  /**
   *  Default time limit for a campaign in blocks.
   */
  get asV74(): [number, number] {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'CampaignDurationLimits')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'CampaignDurationLimits') != null
  }
}

export class FlowCampaignFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of comission to be paid from the Org treasury to GameDAO treasury
   *  after successfull Campaign finalization
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'CampaignFee') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The amount of comission to be paid from the Org treasury to GameDAO treasury
   *  after successfull Campaign finalization
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'CampaignFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'CampaignFee') != null
  }
}

export class FlowGameDAOTreasuryConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The GameDAO Treasury AccountId.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'GameDAOTreasury') === 'cc28a7f7046ec4d0eb3419e4aa142bf25c25992e58d0e8646eb029c7c6b4c0c8'
  }

  /**
   *  The GameDAO Treasury AccountId.
   */
  get asV74(): Uint8Array {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'GameDAOTreasury')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'GameDAOTreasury') != null
  }
}

export class FlowMaxCampaignContributorsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of contributors per one Campaign.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'MaxCampaignContributors') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of contributors per one Campaign.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'MaxCampaignContributors')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MaxCampaignContributors') != null
  }
}

export class FlowMaxCampaignsPerBlockConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of campaigns per one block.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'MaxCampaignsPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of campaigns per one block.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'MaxCampaignsPerBlock')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MaxCampaignsPerBlock') != null
  }
}

export class FlowMaxContributorsProcessingConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of contributors for processing in one block (batch size)
   *  during Campaign finalization.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'MaxContributorsProcessing') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of contributors for processing in one block (batch size)
   *  during Campaign finalization.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'MaxContributorsProcessing')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MaxContributorsProcessing') != null
  }
}

export class FlowMinCampaignDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The min campaign deposit - fraction of a target, default 10%
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'MinCampaignDeposit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The min campaign deposit - fraction of a target, default 10%
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'MinCampaignDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MinCampaignDeposit') != null
  }
}

export class FlowMinContributionConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The min contribution amount in payment tokens
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'MinContribution') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The min contribution amount in payment tokens
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'MinContribution')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MinContribution') != null
  }
}

export class FlowMinNameLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The min length of a campaign name.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'MinNameLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The min length of a campaign name.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'MinNameLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MinNameLength') != null
  }
}

export class FlowPaymentTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'PaymentTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'PaymentTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'PaymentTokenId') != null
  }
}

export class FlowProtocolTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'ProtocolTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'ProtocolTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'ProtocolTokenId') != null
  }
}

export class FlowStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Flow', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Flow', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'StringLimit') != null
  }
}

export class IdentityBasicDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for a registered identity
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for a registered identity
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Identity', 'BasicDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') != null
  }
}

export class IdentityFieldDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit per additional field for a registered identity.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit per additional field for a registered identity.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Identity', 'FieldDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') != null
  }
}

export class IdentityMaxAdditionalFieldsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
   *  required to access an identity, but can be pretty high.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
   *  required to access an identity, but can be pretty high.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Identity', 'MaxAdditionalFields')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') != null
  }
}

export class IdentityMaxRegistrarsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
   *  of, e.g., updating judgements.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
   *  of, e.g., updating judgements.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Identity', 'MaxRegistrars')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') != null
  }
}

export class IdentityMaxSubAccountsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of sub-accounts allowed per identified account.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of sub-accounts allowed per identified account.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Identity', 'MaxSubAccounts')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') != null
  }
}

export class IdentitySubAccountDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for a registered subaccount. This should account for the fact
   *  that one storage item's value will increase by the size of an account ID, and there will
   *  be another trie item whose value is the size of an account ID plus 32 bytes.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for a registered subaccount. This should account for the fact
   *  that one storage item's value will increase by the size of an account ID, and there will
   *  be another trie item whose value is the size of an account ID plus 32 bytes.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Identity', 'SubAccountDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') != null
  }
}

export class MultisigDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating a multisig execution or to
   *  store a dispatch call for later.
   * 
   *  This is held for an additional storage item whose value size is
   *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
   *  `32 + sizeof(AccountId)` bytes.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Multisig', 'DepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating a multisig execution or to
   *  store a dispatch call for later.
   * 
   *  This is held for an additional storage item whose value size is
   *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
   *  `32 + sizeof(AccountId)` bytes.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Multisig', 'DepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'DepositBase') != null
  }
}

export class MultisigDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per unit threshold when creating a multisig execution.
   * 
   *  This is held for adding 32 bytes more into a pre-existing storage value.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Multisig', 'DepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per unit threshold when creating a multisig execution.
   * 
   *  This is held for adding 32 bytes more into a pre-existing storage value.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Multisig', 'DepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'DepositFactor') != null
  }
}

export class MultisigMaxSignatoriesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of signatories allowed in the multisig.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of signatories allowed in the multisig.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Multisig', 'MaxSignatories')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') != null
  }
}

export class NftsApprovalsLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum approvals an item could have.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'ApprovalsLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum approvals an item could have.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'ApprovalsLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'ApprovalsLimit') != null
  }
}

export class NftsAttributeDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved when adding an attribute to an item.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'AttributeDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved when adding an attribute to an item.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'AttributeDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'AttributeDepositBase') != null
  }
}

export class NftsCollectionDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved for collection.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'CollectionDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved for collection.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'CollectionDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'CollectionDeposit') != null
  }
}

export class NftsDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The additional funds that must be reserved for the number of bytes store in metadata,
   *  either "normal" metadata or attribute metadata.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'DepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The additional funds that must be reserved for the number of bytes store in metadata,
   *  either "normal" metadata or attribute metadata.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'DepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'DepositPerByte') != null
  }
}

export class NftsFeaturesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Disables some of pallet's features.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'Features') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  Disables some of pallet's features.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'Features')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'Features') != null
  }
}

export class NftsItemAttributesApprovalsLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum attributes approvals an item could have.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'ItemAttributesApprovalsLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum attributes approvals an item could have.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'ItemAttributesApprovalsLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'ItemAttributesApprovalsLimit') != null
  }
}

export class NftsItemDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved for an item.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'ItemDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved for an item.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'ItemDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'ItemDeposit') != null
  }
}

export class NftsKeyLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of an attribute key.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'KeyLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of an attribute key.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'KeyLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'KeyLimit') != null
  }
}

export class NftsMaxAttributesPerCallConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of attributes a user could set per call.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'MaxAttributesPerCall') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of attributes a user could set per call.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'MaxAttributesPerCall')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'MaxAttributesPerCall') != null
  }
}

export class NftsMaxDeadlineDurationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max duration in blocks for deadlines.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'MaxDeadlineDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max duration in blocks for deadlines.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'MaxDeadlineDuration')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'MaxDeadlineDuration') != null
  }
}

export class NftsMaxTipsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of tips a user could send.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'MaxTips') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of tips a user could send.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'MaxTips')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'MaxTips') != null
  }
}

export class NftsMetadataDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved when adding metadata to your item.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'MetadataDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved when adding metadata to your item.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'MetadataDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'MetadataDepositBase') != null
  }
}

export class NftsStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of data stored on-chain.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of data stored on-chain.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'StringLimit') != null
  }
}

export class NftsValueLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of an attribute value.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Nfts', 'ValueLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of an attribute value.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Nfts', 'ValueLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nfts', 'ValueLimit') != null
  }
}

export class ProxyAnnouncementDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating an announcement.
   * 
   *  This is held when a new storage item holding a `Balance` is created (typically 16
   *  bytes).
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating an announcement.
   * 
   *  This is held when a new storage item holding a `Balance` is created (typically 16
   *  bytes).
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Proxy', 'AnnouncementDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') != null
  }
}

export class ProxyAnnouncementDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per announcement made.
   * 
   *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
   *  into a pre-existing storage value.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per announcement made.
   * 
   *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
   *  into a pre-existing storage value.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Proxy', 'AnnouncementDepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') != null
  }
}

export class ProxyMaxPendingConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of time-delayed announcements that are allowed to be pending.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Proxy', 'MaxPending') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of time-delayed announcements that are allowed to be pending.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Proxy', 'MaxPending')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'MaxPending') != null
  }
}

export class ProxyMaxProxiesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of proxies allowed for a single account.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of proxies allowed for a single account.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Proxy', 'MaxProxies')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') != null
  }
}

export class ProxyProxyDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating a proxy.
   * 
   *  This is held for an additional storage item whose value size is
   *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating a proxy.
   * 
   *  This is held for an additional storage item whose value size is
   *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Proxy', 'ProxyDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') != null
  }
}

export class ProxyProxyDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per proxy added.
   * 
   *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
   *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
   *  into account `32 + proxy_type.encode().len()` bytes of data.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per proxy added.
   * 
   *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
   *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
   *  into account `32 + proxy_type.encode().len()` bytes of data.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Proxy', 'ProxyDepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') != null
  }
}

export class SchedulerMaxScheduledPerBlockConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of scheduled calls in the queue for a single block.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of scheduled calls in the queue for a single block.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Scheduler', 'MaxScheduledPerBlock')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') != null
  }
}

export class SchedulerMaximumWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum weight that may be scheduled per block for any dispatchables.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
  }

  /**
   *  The maximum weight that may be scheduled per block for any dispatchables.
   */
  get asV74(): v74.Weight {
    assert(this.isV74)
    return this._chain.getConstant('Scheduler', 'MaximumWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') != null
  }
}

export class SenseStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Sense', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Sense', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Sense', 'StringLimit') != null
  }
}

export class SignalGameDAOGetsFromSlashingConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  This part of slashing goes to GameDAO treasury (default: 1/4).
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'GameDAOGetsFromSlashing') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  This part of slashing goes to GameDAO treasury (default: 1/4).
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'GameDAOGetsFromSlashing')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'GameDAOGetsFromSlashing') != null
  }
}

export class SignalGameDAOTreasuryConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The GameDAO Treasury AccountId.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'GameDAOTreasury') === 'cc28a7f7046ec4d0eb3419e4aa142bf25c25992e58d0e8646eb029c7c6b4c0c8'
  }

  /**
   *  The GameDAO Treasury AccountId.
   */
  get asV74(): Uint8Array {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'GameDAOTreasury')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'GameDAOTreasury') != null
  }
}

export class SignalMaxMembersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max number of members per organization
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'MaxMembers') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Max number of members per organization
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'MaxMembers')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'MaxMembers') != null
  }
}

export class SignalMaxProposalsPerBlockConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of proposals per one block.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'MaxProposalsPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of proposals per one block.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'MaxProposalsPerBlock')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'MaxProposalsPerBlock') != null
  }
}

export class SignalMinProposalDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Min deposit for Proposal creation
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'MinProposalDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Min deposit for Proposal creation
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'MinProposalDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'MinProposalDeposit') != null
  }
}

export class SignalPaymentTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'PaymentTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'PaymentTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'PaymentTokenId') != null
  }
}

export class SignalProposalDurationLimitsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Default time limit for a proposal in blocks.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'ProposalDurationLimits') === '89667797236ba996cee700097e48264fab1c5603dc68df58a8ff56acf2809f5c'
  }

  /**
   *  Default time limit for a proposal in blocks.
   */
  get asV74(): [number, number] {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'ProposalDurationLimits')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'ProposalDurationLimits') != null
  }
}

export class SignalProtocolTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'ProtocolTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get asV74(): v74.CurrencyId {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'ProtocolTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'ProtocolTokenId') != null
  }
}

export class SignalSlashingMajorityConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Majority of rejection >= {this value} * eligible voters --> slash deposit (default: 2/3).
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'SlashingMajority') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Majority of rejection >= {this value} * eligible voters --> slash deposit (default: 2/3).
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'SlashingMajority')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'SlashingMajority') != null
  }
}

export class SignalStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a string, stored on chain.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Signal', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a string, stored on chain.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Signal', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'StringLimit') != null
  }
}

export class SystemBlockHashCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
   */
  get isV74() {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('System', 'BlockHashCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') != null
  }
}

export class SystemBlockLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get isV74() {
    return this._chain.getConstantTypeHash('System', 'BlockLength') === '9aacf667c67dbae172e6d30e5f4026086c8a56d9ebfe50dfdcca3fe40a9f55ca'
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get asV74(): v74.BlockLength {
    assert(this.isV74)
    return this._chain.getConstant('System', 'BlockLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockLength') != null
  }
}

export class SystemBlockWeightsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Block & extrinsics weights: base values and limits.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'fa5692d9032f25a42ae01892fea053f75130751d1302a6b4db45a7a98a9d0760'
  }

  /**
   *  Block & extrinsics weights: base values and limits.
   */
  get asV74(): v74.BlockWeights {
    assert(this.isV74)
    return this._chain.getConstant('System', 'BlockWeights')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockWeights') != null
  }
}

export class SystemDbWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get asV74(): v74.RuntimeDbWeight {
    assert(this.isV74)
    return this._chain.getConstant('System', 'DbWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'DbWeight') != null
  }
}

export class SystemSS58PrefixConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The designated SS58 prefix of this chain.
   * 
   *  This replaces the "ss58Format" property declared in the chain spec. Reason is
   *  that the runtime should know about the prefix in order to make use of it as
   *  an identifier of the chain.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('System', 'SS58Prefix') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
  }

  /**
   *  The designated SS58 prefix of this chain.
   * 
   *  This replaces the "ss58Format" property declared in the chain spec. Reason is
   *  that the runtime should know about the prefix in order to make use of it as
   *  an identifier of the chain.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('System', 'SS58Prefix')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'SS58Prefix') != null
  }
}

export class SystemVersionConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Get the chain's current version.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('System', 'Version') === 'f6a7df964a5f6d420bccc7ccc38bd9265b00dc71b74c91dc5848badeeaf0cbb8'
  }

  /**
   *  Get the chain's current version.
   */
  get asV74(): v74.RuntimeVersion {
    assert(this.isV74)
    return this._chain.getConstant('System', 'Version')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'Version') != null
  }
}

export class TimestampMinimumPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected*
   *  period that the block production apparatus provides. Your chosen consensus system will
   *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
   *  double this period on default settings.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected*
   *  period that the block production apparatus provides. Your chosen consensus system will
   *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
   *  double this period on default settings.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Timestamp', 'MinimumPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') != null
  }
}

export class TipsDataDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Tips', 'DataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Tips', 'DataDepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'DataDepositPerByte') != null
  }
}

export class TipsMaximumReasonLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Tips', 'MaximumReasonLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Tips', 'MaximumReasonLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'MaximumReasonLength') != null
  }
}

export class TipsTipCountdownConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The period for which a tip remains open after is has achieved threshold tippers.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Tips', 'TipCountdown') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The period for which a tip remains open after is has achieved threshold tippers.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Tips', 'TipCountdown')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipCountdown') != null
  }
}

export class TipsTipFindersFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The percent of the final tip which goes to the original reporter of the tip.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Tips', 'TipFindersFee') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
  }

  /**
   *  The percent of the final tip which goes to the original reporter of the tip.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Tips', 'TipFindersFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipFindersFee') != null
  }
}

export class TipsTipReportDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for placing a tip report.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Tips', 'TipReportDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for placing a tip report.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Tips', 'TipReportDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipReportDepositBase') != null
  }
}

export class TokensMaxLocksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV74() {
    return this._chain.getConstantTypeHash('Tokens', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Tokens', 'MaxLocks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tokens', 'MaxLocks') != null
  }
}

export class TokensMaxReservesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Tokens', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Tokens', 'MaxReserves')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tokens', 'MaxReserves') != null
  }
}

export class TransactionPaymentOperationalFeeMultiplierConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
   *  `priority`
   * 
   *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
   *  added to a tip component in regular `priority` calculations.
   *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
   *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
   * 
   *  ```rust,ignore
   *  // For `Normal`
   *  let priority = priority_calc(tip);
   * 
   *  // For `Operational`
   *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
   *  let priority = priority_calc(tip + virtual_tip);
   *  ```
   * 
   *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
   *  sent with the transaction. So, not only does the transaction get a priority bump based
   *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
   *  transactions.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
  }

  /**
   *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
   *  `priority`
   * 
   *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
   *  added to a tip component in regular `priority` calculations.
   *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
   *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
   * 
   *  ```rust,ignore
   *  // For `Normal`
   *  let priority = priority_calc(tip);
   * 
   *  // For `Operational`
   *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
   *  let priority = priority_calc(tip + virtual_tip);
   *  ```
   * 
   *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
   *  sent with the transaction. So, not only does the transaction get a priority bump based
   *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
   *  transactions.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('TransactionPayment', 'OperationalFeeMultiplier')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') != null
  }
}

export class TreasuryBurnConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Percentage of spare funds (if any) that are burnt per spend period.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Treasury', 'Burn') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Percentage of spare funds (if any) that are burnt per spend period.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Treasury', 'Burn')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'Burn') != null
  }
}

export class TreasuryMaxApprovalsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of approvals that can wait in the spending queue.
   * 
   *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of approvals that can wait in the spending queue.
   * 
   *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Treasury', 'MaxApprovals')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') != null
  }
}

export class TreasuryPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The treasury's pallet id, used for deriving its sovereign account ID.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Treasury', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  The treasury's pallet id, used for deriving its sovereign account ID.
   */
  get asV74(): Uint8Array {
    assert(this.isV74)
    return this._chain.getConstant('Treasury', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'PalletId') != null
  }
}

export class TreasuryProposalBondConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Fraction of a proposal's value that should be bonded in order to place the proposal.
   *  An accepted proposal gets these back. A rejected proposal does not.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Fraction of a proposal's value that should be bonded in order to place the proposal.
   *  An accepted proposal gets these back. A rejected proposal does not.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Treasury', 'ProposalBond')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') != null
  }
}

export class TreasuryProposalBondMaximumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV74(): (bigint | undefined) {
    assert(this.isV74)
    return this._chain.getConstant('Treasury', 'ProposalBondMaximum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') != null
  }
}

export class TreasuryProposalBondMinimumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV74(): bigint {
    assert(this.isV74)
    return this._chain.getConstant('Treasury', 'ProposalBondMinimum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') != null
  }
}

export class TreasurySpendPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Period between successive spends.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Period between successive spends.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Treasury', 'SpendPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') != null
  }
}

export class Utilitybatched_calls_limitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The limit on the number of batched calls.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The limit on the number of batched calls.
   */
  get asV74(): number {
    assert(this.isV74)
    return this._chain.getConstant('Utility', 'batched_calls_limit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') != null
  }
}

export class XTokensBaseXcmWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Base XCM weight.
   * 
   *  The actually weight for an XCM message is `T::BaseXcmWeight +
   *  T::Weigher::weight(&msg)`.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
  }

  /**
   *  Base XCM weight.
   * 
   *  The actually weight for an XCM message is `T::BaseXcmWeight +
   *  T::Weigher::weight(&msg)`.
   */
  get asV74(): v74.Weight {
    assert(this.isV74)
    return this._chain.getConstant('XTokens', 'BaseXcmWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') != null
  }
}

export class XTokensSelfLocationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Self chain location.
   */
  get isV74() {
    return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') === '9427c3584e190cdb6b915f9592427dbb2551fbad0e8c8ab9a42e5bff424455f1'
  }

  /**
   *  Self chain location.
   */
  get asV74(): v74.V3MultiLocation {
    assert(this.isV74)
    return this._chain.getConstant('XTokens', 'SelfLocation')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') != null
  }
}
