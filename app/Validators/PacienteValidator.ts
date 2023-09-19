import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PacienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(255)
    ]),
    fechaNacimiento: schema.date({}, [
      rules.required(),
      rules.before('today')
    ])
  })

  public messages: CustomMessages = {
    required: 'El campo {{ field }} es requerido',
    maxLength: 'El campo {{ field }} debe tener máximo 255 caracteres',
    before: 'El campo {{ field }} debe ser una fecha anterior a hoy'
  }
}
