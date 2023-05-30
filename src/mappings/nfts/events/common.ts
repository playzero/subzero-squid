export const enum CollectionSetting {
    TransferableItems,
    UnlockedMetadata,
    UnlockedAttributes,
    UnlockedMaxSupply,
    DepositRequired
}

export const enum ItemSetting {
	Transferable,
	UnlockedMetadata,
	UnlockedAttributes
}

export function isSettingDisabled(settings: bigint, flag: number) {
    if (settings & BigInt(1 << flag)) {
        return true
    }
    return false
}