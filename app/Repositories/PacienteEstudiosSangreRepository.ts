import { ICreate } from 'App/Interfaces';
import { PacienteEstudiosSangre, Paciente } from 'App/Models';

export default class PacienteEstudiosSangreRepository implements ICreate<PacienteEstudiosSangre>{

  public async create(data: Partial<PacienteEstudiosSangre>): Promise<PacienteEstudiosSangre> {
    try {
      return await PacienteEstudiosSangre.create(data);
    } catch (error) {
      throw new Error('Error al crear el Estudios de Sangre para el paciente.');
    }
  }

  public async getEstudiosByPacienteId(pacienteId: number): Promise<PacienteEstudiosSangre[]> {
    const paciente = await Paciente.find(pacienteId);
    if (paciente) {
      await paciente.load('estudiosSangre');
      return paciente.estudiosSangre;
    }
    return [];
  }
}
