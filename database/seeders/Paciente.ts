import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Paciente from 'App/Models/Paciente'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    await Paciente.createMany([
      {
        id: 1,
        nombre: 'Juan Pérez',
        fechaNacimiento: DateTime.fromJSDate(new Date(1990, 1, 1)),
      },
      {
        id: 2,
        nombre: 'Ana Soto',
        fechaNacimiento: DateTime.fromJSDate(new Date(1985, 5, 20)),
      },
      {
        id: 3,
        nombre: 'Pedro Gómez',
        fechaNacimiento: DateTime.fromJSDate(new Date(1992, 10, 15)),
      }
    ])
  }
}
