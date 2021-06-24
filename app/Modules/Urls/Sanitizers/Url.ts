import { DateTime } from 'luxon'

import EncryptorProvider from 'App/Shared/Providers/Encryptor'

import { EXPIRES_URL_TIME } from 'App/Modules/Urls/Constants/Url'

import { IStoreUrlDTO } from '../Dtos/IUrl'

import { TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'

export const ToStore = ({
  registers,
}: {
  registers: TUrlStoreObject[]
}): IStoreUrlDTO['registers'] => {
  const registersParsed = registers.map((register) => {
    const new_url = EncryptorProvider.execute()

    const expires_at = DateTime.now().plus(EXPIRES_URL_TIME)

    const registerParsed = {
      url: String(register.url || ''),
      new_url,
      expires_at,
    }

    return registerParsed
  })

  return registersParsed
}
