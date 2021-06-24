import { rules, schema } from '@ioc:Adonis/Core/Validator'

import ValidatorProvider from 'App/Shared/Providers/Validator'

import { IStoreUrlDTO } from '../Dtos/IUrl'

import { TValidatorResponse } from 'App/Shared/Providers/Validator/@Types/TValidatorResponse'
import { TUrlObject } from 'App/Modules/Urls/@Types/TUrl'

class UrlStoreValidator {
  protected ValidatorProvider: ValidatorProvider<IStoreUrlDTO['registers'][0]>

  constructor() {
    this.ValidatorProvider = new ValidatorProvider()
  }

  public async execute({
    registers,
    registersFinded,
  }: {
    registers: IStoreUrlDTO['registers']
    registersFinded: TUrlObject[]
  }): Promise<TValidatorResponse<IStoreUrlDTO['registers'][0]>[]> {
    const registersValidated: TValidatorResponse<IStoreUrlDTO['registers'][0]>[] = []
    for (const register of registers) {
      const storeRules = {
        url: schema.string({}, [
          rules.url(),
          rules.maxLength(255),
          rules.compoundUnique({
            register,
            registers: registersFinded,
            fields: ['url'],
            message: ' or has not expired yet',
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
