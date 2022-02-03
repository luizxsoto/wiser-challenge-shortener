import Route from '@ioc:Adonis/Core/Route'

const ROOT_DIR = '../../..'

Route.get('tests', `${ROOT_DIR}/app/Modules/Tests/Infra/Http/Controllers/Test.list`)
Route.post('tests', `${ROOT_DIR}/app/Modules/Tests/Infra/Http/Controllers/Test.store`)
Route.put('tests', `${ROOT_DIR}/app/Modules/Tests/Infra/Http/Controllers/Test.update`)
Route.delete('tests', `${ROOT_DIR}/app/Modules/Tests/Infra/Http/Controllers/Test.destroy`)
