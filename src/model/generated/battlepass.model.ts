import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Identity} from "./identity.model"
import {Organization} from "./organization.model"
import {NftCollection} from "./nftCollection.model"
import {BattlepassNft} from "./battlepassNft.model"

@Entity_()
export class Battlepass {
  constructor(props?: Partial<Battlepass>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  creator!: Identity

  @Index_()
  @ManyToOne_(() => Organization, {nullable: true})
  organization!: Organization

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  state!: string

  @Column_("text", {nullable: false})
  season!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  price!: bigint

  @Column_("int4", {nullable: true})
  activeFromBlock!: number | undefined | null

  @Column_("int4", {nullable: true})
  activeToBlock!: number | undefined | null

  @Column_("int4", {nullable: false})
  createdAtBlock!: number

  @Column_("int4", {nullable: false})
  updatedAtBlock!: number

  @Column_("text", {nullable: false})
  collectionId!: string

  @Index_()
  @ManyToOne_(() => NftCollection, {nullable: true})
  collection!: NftCollection

  @Column_("text", {nullable: false})
  cid!: string

  @Column_("text", {nullable: true})
  description!: string | undefined | null

  @Column_("text", {nullable: true})
  image!: string | undefined | null

  @OneToMany_(() => BattlepassNft, e => e.battlepass)
  claimedNfts!: BattlepassNft[]
}
