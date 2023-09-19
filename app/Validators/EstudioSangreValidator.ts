import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EstudioSangreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    pacienteId: schema.number([
      rules.required(),
      rules.exists({ table: 'paciente', column: 'id' })
    ]),
    porcentajeAzucar: schema.number([
      rules.required(),
      rules.range(0, 100)
    ]),
    porcentajeGrasa: schema.number([
      rules.required(),
      rules.range(0, 100)
    ]),
    porcentajeOxigeno: schema.number([
      rules.required(),
      rules.range(0, 100)
    ])
  })

  public messages: CustomMessages = {
    required: 'El campo {{ field }} es requerido',
    number: 'El campo {{ field }} debe ser un número',
    exists: 'El paciente no existe',
    range: 'El campo {{ field }} debe estar entre 0 y 100'
  }
}
