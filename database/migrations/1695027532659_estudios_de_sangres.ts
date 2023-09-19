import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'paciente_estudios_sangre'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('paciente_id').unsigned()
      // Especificando un nombre personalizado para la clave externa
      table.foreign('paciente_id', 'fk_paciente_a_estudios_sangre').references('id').inTable('paciente').onDelete('RESTRICT')
      table.float('porcentaje_azucar',5,2).notNullable()
      table.float('porcentaje_grasa',5,2).notNullable()
      table.float('porcentaje_oxigeno',5,2).notNullable()
      table.string('nivel_riesgo').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
