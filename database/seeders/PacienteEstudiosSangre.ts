import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PacienteEstudiosSangre from 'App/Models/PacienteEstudiosSangre'

export default class extends BaseSeeder {
  public async run () {
    await PacienteEstudiosSangre.createMany([
      {
        pacienteId: 1,
        porcentajeAzucar: 60,
        porcentajeGrasa: 75,
        porcentajeOxigeno: 65,
        nivelRiesgoId: 1,
      },
      {
        pacienteId: 2,
        porcentajeAzucar: 80,
        porcentajeGrasa: 90,
        porcentajeOxigeno: 55,
        nivelRiesgoId: 1,
      },
      {
        pacienteId: 3,
        porcentajeAzucar: 40,
        porcentajeGrasa: 60,
        porcentajeOxigeno: 75,
        nivelRiesgoId: 2,
      }
    ])
  }
}
