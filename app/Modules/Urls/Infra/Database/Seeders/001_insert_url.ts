import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { DateTime } from 'luxon'

import UrlModel from 'App/Modules/Urls/Models/Url'

class UrlSeeder extends BaseSeeder {
  public async run() {
    await UrlModel.createMany([
      {
        url: 'http://wisereducacao.com',
        new_url: 'http://localhost:8081/abc123ab',
        expires_at: DateTime.now(),
      },
    ])
  }
}

export default UrlSeeder
