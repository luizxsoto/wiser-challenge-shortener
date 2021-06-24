import UrlLucidRepositories from 'App/Modules/Urls/Infra/Repositories/Lucid/Url'

import UrlShowValidator from 'App/Modules/Urls/Validators/UrlShow'

import { IShowUrlDTO } from 'App/Modules/Urls/Dtos/IUrl'

import { TUrlObject } from 'App/Modules/Urls/@Types/TUrl'

class UrlShowService {
  protected Repository: UrlLucidRepositories
  protected Validator: UrlShowValidator

  constructor() {
    this.Repository = new UrlLucidRepositories()
    this.Validator = new UrlShowValidator()
  }

  public async execute(ShowData: IShowUrlDTO): Promise<{ register: TUrlObject }> {
    const validatorData = await this.Repository.findForShowValidator(ShowData)

    const registerValidated = await this.Validator.execute({ ...ShowData, ...validatorData })

    const register = await this.Repository.show(ShowData)

    if (registerValidated.status !== 200 || !register) throw registerValidated.error

    return { register }
  }
}

export default UrlShowService
