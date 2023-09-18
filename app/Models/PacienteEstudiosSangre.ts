import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Paciente from './Paciente'


export default class PacienteEstudiosSangre extends BaseModel {
  public static table = 'paciente_estudios_sangre'

  @column({ isPrimary: true })
  public id: number

  @column()
  public pacienteId: number

  @column()
  public porcentajeAzucar: number

  @column()
  public porcentajeGrasa: number

  @column()
  public porcentajeOxigeno: number

  @column()
  public nivelRiesgo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Paciente, {
    localKey: 'id',
    foreignKey: 'pacienteId',
  })
  public paciente: BelongsTo<typeof Paciente>
}
