import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
//import { EscalaCriterioRepository, NivelRiesgoRepository, PacienteEstudiosSangreRepository, PacienteRepository } from 'App/Repositories';

export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings



    /*
    this.app.container.singleton('App/Repositories/PacienteEstudiosSangreRepository', () => {
      return new PacienteEstudiosSangreRepository();
    });


    this.app.container.singleton('App/Repositories/PacienteRepository', () => {
      return new PacienteRepository();
    });

    this.app.container.singleton('App/Repositories/NivelRiesgoRepository', () => {
      return new NivelRiesgoRepository();
    });

    this.app.container.singleton('App/Repositories/EscalaCriterioRepository', () => {
      return new EscalaCriterioRepository(new NivelRiesgoRepository());
    });
    */
  }

  public async boot () {
    // IoC container is ready
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
