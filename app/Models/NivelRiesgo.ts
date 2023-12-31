import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NivelRiesgo extends BaseModel {
  public static table = 'nivel_riesgo'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public rangoDesde: number

  @column()
  public rangoHasta: number

  @column()
  public color: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
