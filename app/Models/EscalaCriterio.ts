import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'


export default class EscalaCriterio extends BaseModel {
  public static table = 'escala_criterio'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public rangoDesde: number

  @column()
  public rangoHasta: number

  @column()
  public valor: number

  @column()
  public codigoInterno: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
