import { rules, schema } from '@ioc:Adonis/Core/Validator'

import { IShowUrlDTO } from 'App/Modules/Urls/Dtos/IUrl'

import { TValidatorResponse } from 'App/Shared/Providers/Validator/@Types/TValidatorResponse'
import { TUrlObject, TUrlShowObject } from 'App/Modules/Urls/@Types/TUrl'

import ValidatorProvider from 'App/Shared/Providers/Validator'

class UrlShowValidator {
  protected ValidatorProvider: ValidatorProvider<TUrlShowObject>

  constructor() {
    this.ValidatorProvider = new ValidatorProvider()
  }

  public async execute({
    register,
    registerFinded,
  }: IShowUrlDTO & { registerFinded: TUrlObject | null }): Promise<
    TValidatorResponse<TUrlShowObject>
  > {
    const storeRules = {
      new_url: schema.string({}, [
        rules.maxLength(255),
        rules.compoundExists({
          register,
          registers: [registerFinded || {}],
          fields: ['new_url'],
          message: ' or expired',
        }),
      ]),
    }

    const registersValidated = await this.ValidatorProvider.execute({
      rules: storeRules,
      register,
    })

    return registersValidated
  }
}

export default UrlShowValidator
