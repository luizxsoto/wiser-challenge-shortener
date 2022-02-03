import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class TestController {
  public async list({ request, response }: HttpContextContract): Promise<void | { success: true }> {
    const requestData = request.all()

    console.log('TestController.list', requestData)

    return response.status(200).send({ success: true })
  }

  public async store({ request, response }: HttpContextContract): Promise<void | { success: true }> {
    const requestData = request.all()

    console.log('TestController.store', requestData)

    return response.status(200).send({ success: true })
  }

  public async update({ request, response }: HttpContextContract): Promise<void | { success: true }> {
    const requestData = request.all()

    console.log('TestController.update', requestData)

    return response.status(200).send({ success: true })
  }

  public async destroy({ request, response }: HttpContextContract): Promise<void | { success: true }> {
    const requestData = request.all()

    console.log('TestController.destroy', requestData)

    return response.status(200).send({ success: true })
  }
}

export default TestController
