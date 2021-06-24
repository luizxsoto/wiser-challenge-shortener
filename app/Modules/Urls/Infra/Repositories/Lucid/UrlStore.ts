import UrlModel from 'App/Modules/Urls/Models/Url'

import { IStoreUrlDTO } from 'App/Modules/Urls/Dtos/IUrl'

import { TUrlObject } from 'App/Modules/Urls/@Types/TUrl'

class UrlStoreAppRepository {
  public async execute({ registers }: IStoreUrlDTO): Promise<TUrlObject[]> {
    const registersStored = await UrlModel.createMany(registers)

    const registersStoredJSON = registersStored.map((registerStored) =>
      registerStored.toJSON()
    ) as TUrlObject[]

    return registersStoredJSON
  }
}

export default UrlStoreAppRepository
