import { schema } from '@ioc:Adonis/Core/Validator'

import { TValidatorResponse } from 'App/Shared/Providers/Validator/@Types/TValidatorResponse'

import ValidatorProvider from 'App/Shared/Providers/Validator'

class SharedStoreValidator {
  protected ValidatorProvider: ValidatorProvider<object>

  constructor() {
    this.ValidatorProvider = new ValidatorProvider()
  }

  public async execute(storeData: { data: object[] }): Promise<TValidatorResponse<object>> {
    const storeRules = {
      data: schema.array().members(schema.object().members({})),
    }

    const registersValidated = await this.ValidatorProvider.execute({
      rules: storeRules,
      register: storeData,
    })

    return registersValidated
  }
}

export default SharedStoreValidator
