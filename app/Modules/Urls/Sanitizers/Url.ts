import { TUrlStoreObject } from 'App/Modules/Urls/@Types/TUrl'

export const ToStore = ({ registers }: { registers: TUrlStoreObject[] }): TUrlStoreObject[] => {
  const registersParsed = registers.map((register) => {
    const registerParsed = {
      url: String(register.url || ''),
    }

    return registerParsed
  })

  return registersParsed
}
