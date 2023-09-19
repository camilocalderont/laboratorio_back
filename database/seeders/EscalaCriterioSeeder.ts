import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import EscalaCriterio from 'App/Models/EscalaCriterio'

export default class extends BaseSeeder {
  public async run () {
    await EscalaCriterio.createMany([
      { nombre: 'PORCENTAJE OXIGENO', rangoDesde: 0, rangoHasta: 60, valor: 3, codigoInterno: 'porcentaje_oxigeno' },
      { nombre: 'PORCENTAJE AZUCAR', rangoDesde: 70, rangoHasta: 100, valor: 3, codigoInterno: 'porcentaje_azucar' },
      { nombre: 'PORCENTAJE GRASA', rangoDesde: 88.5, rangoHasta: 100, valor: 3, codigoInterno: 'porcentaje_grasa' },
      { nombre: 'PORCENTAJE OXIGENO', rangoDesde: 60, rangoHasta: 70, valor: 2, codigoInterno: 'porcentaje_oxigeno' },
      { nombre: 'PORCENTAJE AZUCAR', rangoDesde: 50, rangoHasta: 70, valor: 2, codigoInterno: 'porcentaje_azucar' },
      { nombre: 'PORCENTAJE GRASA', rangoDesde: 62.2, rangoHasta: 88.5, valor: 2, codigoInterno: 'porcentaje_grasa' },
      { nombre: 'PORCENTAJE OXIGENO', rangoDesde: 70, rangoHasta: 100, valor: 1, codigoInterno: 'porcentaje_oxigeno' },
      { nombre: 'PORCENTAJE AZUCAR', rangoDesde: 0, rangoHasta: 50, valor: 1, codigoInterno: 'porcentaje_azucar' },
      { nombre: 'PORCENTAJE GRASA', rangoDesde: 0, rangoHasta: 62.2, valor: 1, codigoInterno: 'porcentaje_grasa' },
    ])
  }
}
