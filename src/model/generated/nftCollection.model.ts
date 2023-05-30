import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Identity} from "./identity.model"
import {Nft} from "./nft.model"
import {NftCollectionAttribute} from "./nftCollectionAttribute.model"

@Entity_()
export class NftCollection {
  constructor(props?: Partial<NftCollection>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  owner!: Identity

  @Column_("int4", {nullable: true})
  max!: number | undefined | null

  @Column_("bool", {nullable: false})
  metadataLocked!: boolean

  @Column_("bool", {nullable: false})
  maxLocked!: boolean

  @Column_("bool", {nullable: false})
  transfersLocked!: boolean

  @Column_("bool", {nullable: false})
  attributesLocked!: boolean

  @Column_("text", {nullable: false})
  mintType!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  mintPrice!: bigint | undefined | null

  @Column_("int4", {nullable: true})
  mintStartBlock!: number | undefined | null

  @Column_("int4", {nullable: true})
  mintEndBlock!: number | undefined | null

  @Column_("text", {nullable: true})
  metadata!: string | undefined | null

  @Column_("text", {nullable: true})
  name!: string | undefined | null

  @Column_("text", {nullable: true})
  description!: string | undefined | null

  @Column_("text", {nullable: true})
  image!: string | undefined | null

  @OneToMany_(() => Nft, e => e.collection)
  nfts!: Nft[]

  @OneToMany_(() => NftCollectionAttribute, e => e.collection)
  attributes!: NftCollectionAttribute[]
}
