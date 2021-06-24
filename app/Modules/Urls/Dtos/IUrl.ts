import { DateTime } from 'luxon'

import { TUrlShowObject, TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'

export interface IShowUrlDTO {
  register: TUrlShowObject
}

export interface IStoreUrlDTO {
  registers: (TUrlStoreObject & { new_url: string; expires_at: DateTime })[]
}
