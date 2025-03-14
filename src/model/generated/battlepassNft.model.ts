import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Battlepass} from "./battlepass.model"
import {Nft} from "./nft.model"

@Entity_()
export class BattlepassNft {
  constructor(props?: Partial<BattlepassNft>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Battlepass, {nullable: true})
  battlepass!: Battlepass

  @Index_()
  @ManyToOne_(() => Nft, {nullable: true})
  nft!: Nft
}
