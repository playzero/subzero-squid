module.exports = class Data1669895524234 {
  name = 'Data1669895524234'

  async up(db) {
    await db.query(`ALTER TABLE "organization" ADD "slug" text NOT NULL`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "organization" DROP COLUMN "slug"`)
  }
}
