import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {NftCollection} from "./nftCollection.model"

@Entity_()
export class NftCollectionAttribute {
  constructor(props?: Partial<NftCollectionAttribute>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => NftCollection, {nullable: true})
  collection!: NftCollection

  @Column_("text", {nullable: false})
  namespace!: string

  @Column_("text", {nullable: false})
  key!: string

  @Column_("text", {nullable: false})
  value!: string
}
