import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import PacienteEstudiosSangre from './PacienteEstudiosSangre'

export default class Paciente extends BaseModel {
  public static table = 'paciente'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column.date()
  public fechaNacimiento: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => PacienteEstudiosSangre, {
    localKey: 'id',
    foreignKey: 'pacienteId',
  })
  public estudiosSangre: HasMany<typeof PacienteEstudiosSangre>
}
