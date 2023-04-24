module.exports = class Data1682333210230 {
  name = 'Data1682333210230'

  async up(db) {
    await db.query(`CREATE UNIQUE INDEX "IDX_a08804baa7c5d5427067c49a31" ON "organization" ("slug") `)
  }

  async down(db) {
    await db.query(`DROP INDEX "public"."IDX_a08804baa7c5d5427067c49a31"`)
  }
}
