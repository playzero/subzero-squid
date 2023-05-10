import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Nft} from "./nft.model"

@Entity_()
export class NftAttribute {
  constructor(props?: Partial<NftAttribute>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Nft, {nullable: true})
  nft!: Nft

  @Column_("text", {nullable: false})
  namespace!: string

  @Column_("text", {nullable: false})
  key!: string

  @Column_("text", {nullable: false})
  value!: string
}
