import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Paciente from 'App/Models/Paciente';

export default class PacientesController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['nombre', 'fechaNacimiento']);
      const paciente = await Paciente.create(data);
      return response.status(201).json({ message: 'Paciente creado exitosamente.', paciente });
    } catch (error) {
      return response.status(400).json({ message: 'Error en los datos proporcionados.' });
    }
  }

  public async index({ response }: HttpContextContract) {
    const pacientes = await Paciente.query().preload('estudiosSangre');
    return response.json(pacientes);
}

}

