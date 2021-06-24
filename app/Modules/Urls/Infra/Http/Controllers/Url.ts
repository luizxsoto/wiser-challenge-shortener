import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UrlServices from 'App/Modules/Urls/Services/Url'

import SharedStoreValidator from 'App/Shared/Validators/Store'

import { TUrlObject, TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'
import { TValidatorResponse } from 'App/Shared/Providers/Validator/@Types/TValidatorResponse'

class UrlController {
  protected Services: UrlServices
  protected SharedStoreValidator: SharedStoreValidator

  constructor() {
    this.Services = new UrlServices()
    this.SharedStoreValidator = new SharedStoreValidator()
  }

  public async show({
    params,
    response,
  }: HttpContextContract): Promise<void | { data: { register: TUrlObject | null } }> {
    const showData = {
      register: { new_url: params.new_url },
    }

    const { register } = await this.Services.show(showData)

    return response.redirect(register.url)
  }

  public async store({ request, response }: HttpContextContract): Promise<void | {
    data: TValidatorResponse<TUrlObject | TUrlStoreObject>[]
  }> {
    const registers = request.input('data')

    const validatedRequest = await this.SharedStoreValidator.execute({ data: registers })
    if (validatedRequest.status !== 200) throw validatedRequest.error

    const storeData = { registers }

    const data = await this.Services.store(storeData)

    return response.status(207).send({ data })
  }
}

export default UrlController
