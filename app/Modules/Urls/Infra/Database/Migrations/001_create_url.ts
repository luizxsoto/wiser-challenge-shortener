import BaseSchema from '@ioc:Adonis/Lucid/Schema'

import { TABLE_NAME } from 'App/Modules/Urls/Constants/Url'

class Users extends BaseSchema {
  public async up() {
    this.schema.createTable(TABLE_NAME, (table) => {
      table.increments()
      table.string('url', 255).notNullable()
      table.string('new_url', 255).notNullable()
      table.timestamp('expires_at').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(TABLE_NAME)
  }
}

export default Users
