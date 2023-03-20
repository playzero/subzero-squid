module.exports = class Data1679317828391 {
  name = 'Data1679317828391'

  async up(db) {
    await db.query(`ALTER TABLE "battlepass" ADD "description" text`)
    await db.query(`ALTER TABLE "battlepass" ADD "image" text`)
    await db.query(`ALTER TABLE "nft_collection" ADD "name" text`)
    await db.query(`ALTER TABLE "nft_collection" ADD "description" text`)
    await db.query(`ALTER TABLE "nft_collection" ADD "image" text`)
    await db.query(`ALTER TABLE "nft" ADD "name" text`)
    await db.query(`ALTER TABLE "nft" ADD "description" text`)
    await db.query(`ALTER TABLE "nft" ADD "image" text`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "battlepass" DROP COLUMN "description"`)
    await db.query(`ALTER TABLE "battlepass" DROP COLUMN "image"`)
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "name"`)
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "description"`)
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "image"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "name"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "description"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "image"`)
  }
}
