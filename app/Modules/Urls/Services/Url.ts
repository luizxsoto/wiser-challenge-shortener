import UrlShowService from './UrlShow'
import UrlStoreService from './UrlStore'

import { IShowUrlDTO } from 'App/Modules/Urls/Dtos/IUrl'

import { TUrlObject, TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'
import { TValidatorResponse } from 'App/Shared/Providers/Validator/@Types/TValidatorResponse'

class UrlServices {
  protected ShowService: UrlShowService
  protected StoreService: UrlStoreService

  constructor() {
    this.ShowService = new UrlShowService()
    this.StoreService = new UrlStoreService()
  }

  public async show(ShowData: IShowUrlDTO): Promise<{ register: TUrlObject }> {
    const register = await this.ShowService.execute(ShowData)

    return register
  }

  public async store(StoreData: {
    registers: TUrlStoreObject[]
  }): Promise<TValidatorResponse<TUrlObject | TUrlStoreObject>[]> {
    const registers = await this.StoreService.execute(StoreData)

    return registers
  }
}

export default UrlServices
