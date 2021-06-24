import UrlModel from 'App/Modules/Urls/Models/Url'

import { TUrlObject, TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'

class UrlFindForStoreValidatorAppRepository {
  public async execute({
    registers,
  }: {
    registers: TUrlStoreObject[]
  }): Promise<{ registersFinded: TUrlObject[] }> {
    const registersFindedQuery = UrlModel.query()

    registers.forEach((register) => {
      registersFindedQuery.orWhere('url', register.url)
    })

    const registersFinded = await registersFindedQuery

    const registerFindedJSON = registersFinded.map((registerFinded) =>
      registerFinded.toJSON()
    ) as TUrlObject[]

    return { registersFinded: registerFindedJSON }
  }
}

export default UrlFindForStoreValidatorAppRepository
