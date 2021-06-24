import UrlModel from 'App/Modules/Urls/Models/Url'

import { IShowUrlDTO } from 'App/Modules/Urls/Dtos/IUrl'

import { TUrlObject } from 'App/Modules/Urls/@Types/TUrl'

class UrlShowAppRepository {
  public async execute({ register }: IShowUrlDTO): Promise<TUrlObject | null> {
    const registerFindedQuery = UrlModel.query().where('new_url', register.new_url)

    const registerFinded = await registerFindedQuery.first()

    const registerFindedJSON = (
      registerFinded ? registerFinded.toJSON() : registerFinded
    ) as TUrlObject | null

    return registerFindedJSON
  }
}

export default UrlShowAppRepository
