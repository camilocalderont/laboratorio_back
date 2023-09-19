import { IFind, IGetAll } from "App/Interfaces";
import { NivelRiesgo } from "App/Models";

export default class NivelRiesgoRepository  implements IGetAll<NivelRiesgo>, IFind<NivelRiesgo>{


  public async getAll(): Promise<NivelRiesgo[]> {
    try {
      return await NivelRiesgo.query();
    } catch (error) {
      throw new Error('Error al obtener los NivelRiesgos.');
    }
  }

  public async find(id: number): Promise<NivelRiesgo | null> {
    try {
      return await NivelRiesgo.find(id);
    } catch (error) {
      throw new Error('Error al buscar el NivelRiesgo.');
    }
  }
}
