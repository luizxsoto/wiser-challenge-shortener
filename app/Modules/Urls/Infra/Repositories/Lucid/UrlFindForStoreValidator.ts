import { DateTime } from 'luxon'

import UrlModel from 'App/Modules/Urls/Models/Url'

import { TUrlObject } from 'App/Modules/Urls/@Types/TUrl'
import { IStoreUrlDTO } from 'App/Modules/Urls/Dtos/IUrl'

class UrlFindForStoreValidatorAppRepository {
  public async execute({ registers }: IStoreUrlDTO): Promise<{ registersFinded: TUrlObject[] }> {
    const registersFindedQuery = UrlModel.query()
    const nowDate = DateTime.now().toISO()

    registers.forEach((register) => {
      registersFindedQuery.orWhere((builder) => {
        builder
          .where((build) => build.where('url', register.url).orWhere('new_url', register.new_url))
          .where('expires_at', '>', nowDate)
      })
    })

    const registersFinded = await registersFindedQuery

    const registerFindedJSON = registersFinded.map((registerFinded) =>
      registerFinded.toJSON()
    ) as TUrlObject[]
    console.log({ registers, registerFindedJSON })

    return { registersFinded: registerFindedJSON }
  }
}

export default UrlFindForStoreValidatorAppRepository
