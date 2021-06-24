import UrlLucidRepositories from 'App/Modules/Urls/Infra/Repositories/Lucid/Url'

import UrlStoreValidator from 'App/Modules/Urls/Validators/UrlStore'

import { ToStore } from 'App/Modules/Urls/Sanitizers/Url'

import { TUrlObject, TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'
import { TValidatorResponse } from 'App/Shared/Providers/Validator/@Types/TValidatorResponse'

class UrlStoreService {
  protected Repository: UrlLucidRepositories
  protected Validator: UrlStoreValidator

  constructor() {
    this.Repository = new UrlLucidRepositories()
    this.Validator = new UrlStoreValidator()
  }

  public async execute({
    registers,
  }: {
    registers: TUrlStoreObject[]
  }): Promise<TValidatorResponse<TUrlObject | TUrlStoreObject>[]> {
    const registersSanitized = ToStore({ registers })

    const validatorData = await this.Repository.findForStoreValidator({
      registers: registersSanitized,
    })

    const registersValidated = await this.Validator.execute({
      ...validatorData,
      registers: registersSanitized,
    })

    const registersCorrect = registersValidated.filter(
      (registerValidated) => registerValidated.status === 200
    )

    const registersToStore = registersCorrect.map((registerCorrect) => {
      const registerParsed = {
        ...registerCorrect.register,
      }

      return registerParsed
    })

    const registersStored = await this.Repository.store({
      registers: registersToStore,
    })

    const registersReturn = registersValidated.map((registerValidated) => {
      const register = registersStored.find(
        (registerStored) => registerStored.url === registerValidated.register.url
      )

      const registerParsed = {
        ...(register || registerValidated.register),
      }

      return {
        ...registerValidated,
        register: registerParsed,
      }
    })

    return registersReturn
  }
}

export default UrlStoreService
