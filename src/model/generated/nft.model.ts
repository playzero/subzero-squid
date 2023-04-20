import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Identity} from "./identity.model"
import {NftCollection} from "./nftCollection.model"

@Entity_()
export class Nft {
  constructor(props?: Partial<Nft>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  owner!: Identity

  @Column_("text", {nullable: true})
  metadata!: string | undefined | null

  @Column_("bool", {nullable: true})
  metadataIsFrozen!: boolean | undefined | null

  @Index_()
  @ManyToOne_(() => NftCollection, {nullable: true})
  collection!: NftCollection

  @Column_("text", {nullable: true})
  name!: string | undefined | null

  @Column_("text", {nullable: true})
  description!: string | undefined | null

  @Column_("text", {nullable: true})
  image!: string | undefined | null
}
