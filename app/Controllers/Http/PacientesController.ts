import { inject } from '@adonisjs/core/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { PacienteRepository } from 'App/Repositories';
import { PacienteValidator } from 'App/Validators';


@inject()
export default class PacientesController {

  constructor(
    private pacienteRepo: PacienteRepository
    ) {}

  public async create({ request, response }: HttpContextContract) {
    try {

      const data = await request.validate(PacienteValidator);
      const paciente = await this.pacienteRepo.create(data);
      return response.status(201).json({ message: 'Paciente creado exitosamente.', paciente });
    } catch (error) {

      return response.status(400).json({ message: 'Error en los datos proporcionados.' });
    }
  }

  public async index({ response }: HttpContextContract) {
    const pacientes = await this.pacienteRepo.getAll();
    return response.json(pacientes);
  }

}

