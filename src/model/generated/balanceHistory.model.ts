import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class BalanceHistory {
  constructor(props?: Partial<BalanceHistory>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("int4", {nullable: false})
  block!: number

  @Index_()
  @Column_("text", {nullable: false})
  address!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  free!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  reserved!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  total!: bigint
}
