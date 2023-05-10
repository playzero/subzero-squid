import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {NftCollection} from "./nftCollection.model"
import {Identity} from "./identity.model"
import {NftAttribute} from "./nftAttribute.model"

@Entity_()
export class Nft {
  constructor(props?: Partial<Nft>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  itemId!: string

  @Index_()
  @ManyToOne_(() => NftCollection, {nullable: true})
  collection!: NftCollection

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  owner!: Identity

  @Column_("bool", {nullable: false})
  metadataLocked!: boolean

  @Column_("bool", {nullable: false})
  transfersLocked!: boolean

  @Column_("bool", {nullable: false})
  attributesLocked!: boolean

  @Column_("text", {nullable: true})
  metadata!: string | undefined | null

  @Column_("text", {nullable: true})
  name!: string | undefined | null

  @Column_("text", {nullable: true})
  description!: string | undefined | null

  @Column_("text", {nullable: true})
  image!: string | undefined | null

  @OneToMany_(() => NftAttribute, e => e.nft)
  attributes!: NftAttribute[]
}
