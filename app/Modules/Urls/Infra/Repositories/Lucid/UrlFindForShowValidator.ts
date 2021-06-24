import { DateTime } from 'luxon'

import UrlModel from 'App/Modules/Urls/Models/Url'

import { IShowUrlDTO } from 'App/Modules/Urls/Dtos/IUrl'

import { TUrlObject } from 'App/Modules/Urls/@Types/TUrl'

class UrlFindForShowValidatorAppRepository {
  public async execute({ register }: IShowUrlDTO): Promise<{ registerFinded: TUrlObject | null }> {
    const nowDate = DateTime.now().toISO()

    const registerFindedQuery = UrlModel.query()
      .where('new_url', register.new_url)
      .where('expires_at', '>=', nowDate)

    const registerFinded = await registerFindedQuery.first()

    const registerFindedJSON = (
      registerFinded ? registerFinded.toJSON() : registerFinded
    ) as TUrlObject | null

    return { registerFinded: registerFindedJSON }
  }
}

export default UrlFindForShowValidatorAppRepository
