import { inject } from '@adonisjs/core/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { PacienteEstudiosSangre } from 'App/Models';
import { EscalaCriterioRepository, PacienteEstudiosSangreRepository, PacienteRepository } from 'App/Repositories';
import EstudioSangreValidator from 'App/Validators/EstudioSangreValidator';

@inject()
export default class EstudiosSangreController {

  constructor(
    private estudioRepo: PacienteEstudiosSangreRepository,
    private pacienteRepo: PacienteRepository,
    private escalaRepo: EscalaCriterioRepository
    ) {}

  public async create({ request, response, params }: HttpContextContract) {
    try {
      const data = await request.validate(EstudioSangreValidator);
      const nivelRiesgo = await this.escalaRepo.getNivelRiesgo(data as PacienteEstudiosSangre);

      const estudio = await this.estudioRepo.create({...data, nivelRiesgoId: nivelRiesgo.id, pacienteId: params.id});
      return response.status(201).json({ message: 'Estudio de sangre creado exitosamente.', estudio });
    } catch (error) {
      return response.status(400).json({ message: 'Error en los datos proporcionados. HPD', error: error.message || error });
    }
  }

  public async index({ params, response }: HttpContextContract) {
    const paciente = await this.pacienteRepo.find(params.id);
    if (!paciente) {
      return response.status(404).json({ message: 'Paciente no encontrado.' });
    }
    await paciente.load('estudiosSangre');
    return response.json(paciente.estudiosSangre);
  }
}
