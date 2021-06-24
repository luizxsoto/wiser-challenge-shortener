import { rules, schema } from '@ioc:Adonis/Core/Validator'

import { TValidatorResponse } from 'App/Shared/Providers/Validator/@Types/TValidatorResponse'
import { TUrlObject, TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'

import ValidatorProvider from 'App/Shared/Providers/Validator'

class UrlStoreValidator {
  protected ValidatorProvider: ValidatorProvider<TUrlStoreObject>

  constructor() {
    this.ValidatorProvider = new ValidatorProvider()
  }

  public async execute({
    registers,
    registersFinded,
  }: {
    registers: TUrlStoreObject[]
    registersFinded: TUrlObject[]
  }): Promise<TValidatorResponse<TUrlStoreObject>[]> {
    const registersValidated: TValidatorResponse<TUrlStoreObject>[] = []
    for (const register of registers) {
      const storeRules = {
        url: schema.string({}, [
          rules.url(),
          rules.maxLength(255),
          rules.compoundUnique({
            register,
            registers: registersFinded,
            fields: ['url'],
          }),
          rules.compoundDistinct({
            register,
            registers,
            fields: ['url'],
          }),
        ]),
      }

      const validatedUser = await this.ValidatorProvider.execute({
        rules: storeRules,
        register,
      })

      registersValidated.push(validatedUser)
    }

    return registersValidated
  }
}

export default UrlStoreValidator
