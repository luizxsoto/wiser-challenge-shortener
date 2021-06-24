import { DateTime } from 'luxon'

export type TUrlObject = {
  id: number
  url: string
  new_url: string
  expires_at: DateTime
  created_at: DateTime
  updated_at: DateTime
}

export type TUrlShowObject = {
  new_url: string
}

export type TUrlStoreObject = {
  url: string
}
