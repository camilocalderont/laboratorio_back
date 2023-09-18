import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Paciente from 'App/Models/Paciente';
import PacienteEstudiosSangre from 'App/Models/PacienteEstudiosSangre';

export default class EstudiosSangreController {
  public async create({ request, response, params }: HttpContextContract) {
    try {
      const paciente = await Paciente.find(params.id);
      if (!paciente) {
        return response.status(404).json({ message: 'Paciente no encontrado.' });
      }
      const data = request.only(['porcentajeAzucar', 'porcentajeGrasa', 'porcentajeOxigeno']);
      const estudio = await PacienteEstudiosSangre.create({ ...data, pacienteId: paciente.id });
      return response.status(201).json({ message: 'Estudio de sangre creado exitosamente.', estudio });
    } catch (error) {
      return response.status(400).json({ message: 'Error en los datos proporcionados.' });
    }
  }

  public async index({ params, response }: HttpContextContract) {
    const paciente = await Paciente.find(params.id);
    if (!paciente) {
      return response.status(404).json({ message: 'Paciente no encontrado.' });
    }
    await paciente.load('estudiosSangre');
    return response.json(paciente.estudiosSangre);
  }
}
