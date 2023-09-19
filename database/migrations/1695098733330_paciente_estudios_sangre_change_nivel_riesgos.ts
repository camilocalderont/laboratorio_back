import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'paciente_estudios_sangre'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('nivel_riesgo_id').unsigned().after('porcentaje_oxigeno')
      table.foreign('nivel_riesgo_id', 'fk_nivel_riesgo_a_estudios_sangre').references('id').inTable('nivel_riesgo').onDelete('RESTRICT')
      table.dropColumn('nivel_riesgo')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('nivel_riesgo_id', 'fk_nivel_riesgo_a_estudios_sangre')
      table.dropColumn('nivel_riesgo_id')
      table.string('nivel_riesgo').after('porcentaje_oxigeno')

    })
  }
}
