module.exports = class Data1670434246320 {
  name = 'Data1670434246320'

  async up(db) {
    await db.query(`ALTER TABLE "identity" DROP CONSTRAINT "FK_fef4ebae86a0fbde70b6f1be2a4"`)
    await db.query(`DROP INDEX "public"."IDX_fef4ebae86a0fbde70b6f1be2a"`)
    await db.query(`CREATE TABLE "historical_balance" ("id" character varying NOT NULL, "block" integer NOT NULL, "address" text NOT NULL, "currency_id" text NOT NULL, "free" numeric NOT NULL, "reserved" numeric NOT NULL, "total" numeric NOT NULL, CONSTRAINT "PK_74ac29ad0bdffb6d1281a1e17e8" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_182e1c4040a7932e81ee1dd947" ON "historical_balance" ("address") `)
    await db.query(`CREATE INDEX "IDX_a2a6218b73a74f3540e0ecf7a1" ON "historical_balance" ("currency_id") `)
    await db.query(`CREATE TABLE "account_balance" ("id" character varying NOT NULL, "balance_id" character varying, "identity_id" character varying, CONSTRAINT "PK_bd893045760f719e24a95a42562" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_401dbe0674ebfda5e58638f27c" ON "account_balance" ("balance_id") `)
    await db.query(`CREATE INDEX "IDX_abaa61ef32e9f5c3bf4dcd2ac3" ON "account_balance" ("identity_id") `)
    await db.query(`ALTER TABLE "identity" DROP COLUMN "balance_id"`)
    await db.query(`ALTER TABLE "account_balance" ADD CONSTRAINT "FK_401dbe0674ebfda5e58638f27c1" FOREIGN KEY ("balance_id") REFERENCES "historical_balance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "account_balance" ADD CONSTRAINT "FK_abaa61ef32e9f5c3bf4dcd2ac38" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "identity" ADD CONSTRAINT "FK_fef4ebae86a0fbde70b6f1be2a4" FOREIGN KEY ("balance_id") REFERENCES "balance_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`CREATE INDEX "IDX_fef4ebae86a0fbde70b6f1be2a" ON "identity" ("balance_id") `)
    await db.query(`DROP TABLE "historical_balance"`)
    await db.query(`DROP INDEX "public"."IDX_182e1c4040a7932e81ee1dd947"`)
    await db.query(`DROP INDEX "public"."IDX_a2a6218b73a74f3540e0ecf7a1"`)
    await db.query(`DROP TABLE "account_balance"`)
    await db.query(`DROP INDEX "public"."IDX_401dbe0674ebfda5e58638f27c"`)
    await db.query(`DROP INDEX "public"."IDX_abaa61ef32e9f5c3bf4dcd2ac3"`)
    await db.query(`ALTER TABLE "identity" ADD "balance_id" character varying`)
    await db.query(`ALTER TABLE "account_balance" DROP CONSTRAINT "FK_401dbe0674ebfda5e58638f27c1"`)
    await db.query(`ALTER TABLE "account_balance" DROP CONSTRAINT "FK_abaa61ef32e9f5c3bf4dcd2ac38"`)
  }
}
