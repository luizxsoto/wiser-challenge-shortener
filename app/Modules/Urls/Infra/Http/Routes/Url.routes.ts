import Route from '@ioc:Adonis/Core/Route'

const ROOT_DIR = '../../..'

Route.get('/:new_url', `${ROOT_DIR}/app/Modules/Urls/Infra/Http/Controllers/Url.show`)
Route.post('/', `${ROOT_DIR}/app/Modules/Urls/Infra/Http/Controllers/Url.store`)
