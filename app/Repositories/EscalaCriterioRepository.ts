import { ICreate, IFind, IGetAll } from 'App/Interfaces';
import { EscalaCriterio, NivelRiesgo, PacienteEstudiosSangre } from 'App/Models';
import { NivelRiesgoRepository } from '.';
import { inject } from '@adonisjs/core/build/standalone';

@inject(['App/Repositories/NivelRiesgoRepository'])
export default class EscalaCriterioRepository  implements ICreate<EscalaCriterio>, IGetAll<EscalaCriterio>, IFind<EscalaCriterio>{

  constructor(
    private nivelRiesgoRepo: NivelRiesgoRepository
    ) {
  }
  public async create(data: Partial<EscalaCriterio>): Promise<EscalaCriterio> {
    try {
      return await EscalaCriterio.create(data);
    } catch (error) {
      throw new Error('Error al crear el paciente.');
    }
  }

  public async getAll(): Promise<EscalaCriterio[]> {
    try {
      return await EscalaCriterio.query();
    } catch (error) {
      throw new Error('Error al obtener los EscalaCriterios.');
    }
  }

  public async find(id: number): Promise<EscalaCriterio | null> {
    try {
      return await EscalaCriterio.find(id);
    } catch (error) {
      throw new Error('Error al buscar el EscalaCriterio.');
    }
  }

  public async getNivelRiesgo(estudio: PacienteEstudiosSangre): Promise<NivelRiesgo> {
    try {
      // Paso 1
      const criterios = await this.getAll();
      const nivelesRiesgo = await this.nivelRiesgoRepo.getAll();

      // Paso 2
      const totalRiesgo = Object.keys(estudio).reduce((total, key) => {
        const criterio = criterios.find(c => c.codigoInterno === key && estudio[key] > c.rangoDesde && estudio[key] <= c.rangoHasta);
        return total + (criterio ? criterio.valor : 0);
      }, 0);
      // Paso 3
      const nivelCorrespondiente = nivelesRiesgo.find(nivel => totalRiesgo >= nivel.rangoDesde && totalRiesgo <= nivel.rangoHasta);

      if (!nivelCorrespondiente) {
        throw new Error('No se encontró un nivel de riesgo correspondiente.');
      }

      return nivelCorrespondiente;

    } catch (error) {
      throw new Error(`Error al calcular el nivel de riesgo: ${error.message}`);
    }
  }
}
