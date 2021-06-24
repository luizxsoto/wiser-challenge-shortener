import { validator, schema, TypedSchema } from '@ioc:Adonis/Core/Validator'

import { ToValidator, ToValidateMessage } from 'App/Shared/Sanitizers/Error'

import { TValidatorResponse } from './@Types/TValidatorResponse'

class ValidatorProvider<TEntity> {
  public async execute({
    rules,
    register,
  }: {
    rules: TypedSchema
    register: TEntity
  }): Promise<TValidatorResponse<TEntity>> {
    try {
      const validatorSchema = schema.create(rules)

      await validator.validate({
        schema: validatorSchema,
        data: register,
        messages: { '*': ToValidateMessage },
        reporter: validator.reporters.api,
      })

      return { status: 200, register }
    } catch (error) {
      const parsedError = ToValidator<TEntity>({ error, props: { register } })

      return parsedError
    }
  }
}

export default ValidatorProvider
