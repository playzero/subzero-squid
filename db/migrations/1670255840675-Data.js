module.exports = class Data1670255840675 {
  name = 'Data1670255840675'

  async up(db) {
    await db.query(`CREATE TABLE "chain_state" ("id" character varying NOT NULL, "token_balance" numeric NOT NULL, "token_holders" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, CONSTRAINT "PK_e28e46a238ada7cbbcf711b3f6c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_b15977afb801d90143ea51cdec" ON "chain_state" ("timestamp") `)
    await db.query(`CREATE INDEX "IDX_5596acea2cba293bbdc32b577c" ON "chain_state" ("block_number") `)
    await db.query(`CREATE TABLE "balance_history" ("id" character varying NOT NULL, "block" integer NOT NULL, "address" text NOT NULL, "free" numeric NOT NULL, "reserved" numeric NOT NULL, "total" numeric NOT NULL, CONSTRAINT "PK_dc0b0a31a6896d2e4fd3f08042c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_a420e714d295af97bf84830c54" ON "balance_history" ("block") `)
    await db.query(`CREATE INDEX "IDX_47119a187aa8f44786fbe271c5" ON "balance_history" ("address") `)
    await db.query(`CREATE TABLE "current_chain_state" ("id" character varying NOT NULL, "token_balance" numeric NOT NULL, "token_holders" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, CONSTRAINT "PK_635aee56410df525938bf40f669" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_b610f50e22008c895b1c9912bd" ON "current_chain_state" ("timestamp") `)
    await db.query(`CREATE INDEX "IDX_a9c38ffcf2e78137f75e24f88c" ON "current_chain_state" ("block_number") `)
    await db.query(`ALTER TABLE "identity" ADD "balance_id" character varying`)
    await db.query(`CREATE INDEX "IDX_fef4ebae86a0fbde70b6f1be2a" ON "identity" ("balance_id") `)
    await db.query(`ALTER TABLE "identity" ADD CONSTRAINT "FK_fef4ebae86a0fbde70b6f1be2a4" FOREIGN KEY ("balance_id") REFERENCES "balance_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "chain_state"`)
    await db.query(`DROP INDEX "public"."IDX_b15977afb801d90143ea51cdec"`)
    await db.query(`DROP INDEX "public"."IDX_5596acea2cba293bbdc32b577c"`)
    await db.query(`DROP TABLE "balance_history"`)
    await db.query(`DROP INDEX "public"."IDX_a420e714d295af97bf84830c54"`)
    await db.query(`DROP INDEX "public"."IDX_47119a187aa8f44786fbe271c5"`)
    await db.query(`DROP TABLE "current_chain_state"`)
    await db.query(`DROP INDEX "public"."IDX_b610f50e22008c895b1c9912bd"`)
    await db.query(`DROP INDEX "public"."IDX_a9c38ffcf2e78137f75e24f88c"`)
    await db.query(`ALTER TABLE "identity" DROP COLUMN "balance_id"`)
    await db.query(`DROP INDEX "public"."IDX_fef4ebae86a0fbde70b6f1be2a"`)
    await db.query(`ALTER TABLE "identity" DROP CONSTRAINT "FK_fef4ebae86a0fbde70b6f1be2a4"`)
  }
}
