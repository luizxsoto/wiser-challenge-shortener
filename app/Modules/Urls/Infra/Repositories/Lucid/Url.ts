import { TUrlObject, TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'

import { IShowUrlDTO, IStoreUrlDTO } from 'App/Modules/Urls/Dtos/IUrl'

import UrlShowLucidRepository from './UrlShow'
import UrlStoreLucidRepository from './UrlStore'
import UrlFindForShowValidatorLucidRepository from './UrlFindForShowValidator'
import UrlFindForStoreValidatorLucidRepository from './UrlFindForStoreValidator'

class UrlLucidRepositories {
  protected ShowLucidRepository: UrlShowLucidRepository
  protected StoreLucidRepository: UrlStoreLucidRepository
  protected FindForShowValidatorLucidRepository: UrlFindForShowValidatorLucidRepository
  protected FindForStoreValidatorLucidRepository: UrlFindForStoreValidatorLucidRepository

  constructor() {
    this.ShowLucidRepository = new UrlShowLucidRepository()
    this.StoreLucidRepository = new UrlStoreLucidRepository()
    this.FindForShowValidatorLucidRepository = new UrlFindForShowValidatorLucidRepository()
    this.FindForStoreValidatorLucidRepository = new UrlFindForStoreValidatorLucidRepository()
  }

  public async show(ShowData: IShowUrlDTO): Promise<TUrlObject | null> {
    const register = await this.ShowLucidRepository.execute(ShowData)

    return register
  }

  public async store(StoreData: IStoreUrlDTO): Promise<TUrlObject[]> {
    const registers = await this.StoreLucidRepository.execute(StoreData)

    return registers
  }

  public async findForShowValidator(
    FindForShowValidatorData: IShowUrlDTO
  ): Promise<{ registerFinded: TUrlObject | null }> {
    const register = await this.FindForShowValidatorLucidRepository.execute(
      FindForShowValidatorData
    )

    return register
  }

  public async findForStoreValidator(FindForStoreValidatorData: {
    registers: TUrlStoreObject[]
  }): Promise<{ registersFinded: TUrlObject[] }> {
    const registers = await this.FindForStoreValidatorLucidRepository.execute(
      FindForStoreValidatorData
    )

    return registers
  }
}

export default UrlLucidRepositories
