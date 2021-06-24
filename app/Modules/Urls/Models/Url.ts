import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import { TABLE_NAME } from 'App/Modules/Urls/Constants/Url'

class UrlModel extends BaseModel {
  public static table = TABLE_NAME

  @column({ isPrimary: true })
  public id: number

  @column()
  public url: string

  @column()
  public new_url: string

  @column.dateTime()
  public expires_at: DateTime

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}

export default UrlModel
