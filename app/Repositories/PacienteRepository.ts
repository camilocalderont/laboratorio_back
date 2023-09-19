
import { ICreate, IFind, IGetAll } from 'App/Interfaces';
import Paciente from 'App/Models/Paciente';

export default class PacienteRepository implements ICreate<Paciente>, IGetAll<Paciente>, IFind<Paciente> {

  public async create(data: Partial<Paciente>): Promise<Paciente> {
    try {
      return await Paciente.create(data);
    } catch (error) {
      throw new Error('Error al crear el paciente.');
    }
  }

  public async getAll(): Promise<Paciente[]> {
    try {
      return await Paciente.query().preload('estudiosSangre');
    } catch (error) {
      throw new Error('Error al obtener los pacientes.');
    }
  }

  public async find(id: number): Promise<Paciente | null> {
    try {
      return await Paciente.find(id);
    } catch (error) {
      throw new Error('Error al buscar el paciente.');
    }
  }
}
