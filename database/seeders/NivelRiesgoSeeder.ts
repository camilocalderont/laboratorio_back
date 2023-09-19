import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import NivelRiesgo from 'App/Models/NivelRiesgo'

export default class extends BaseSeeder {
  public async run () {
    await NivelRiesgo.createMany([
      { id: 1, nombre: 'ALTO', rangoDesde: 7, rangoHasta: 9, color: '#FF0000' },
      { id: 2, nombre: 'MEDIO', rangoDesde: 5, rangoHasta: 6, color: '#FFFF00' },
      { id: 3, nombre: 'BAJO', rangoDesde: 3, rangoHasta: 4, color: '#008000' },
    ])
  }
}
