import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'

class TestController {
  public async list({ request, response }: HttpContextContract): Promise<void | { success: true }> {
    const requestData = request.all()

    console.log('TestController.list', requestData)

    return response.status(200).send({ success: true })
  }

  public async store({
    request,
    response,
  }: HttpContextContract): Promise<void | { success: true }> {
    const requestBody = request.body()
    const requestQuery = request.qs()
    const requestParams = request.params()
    const { enterpriseSlug, organizationSlug, enterpriseId } = requestQuery
    const { microservice, origin } = requestParams

    console.log('TestController.store', { requestBody, requestQuery, requestParams })

    const httpClient = axios.create({ baseURL: 'https://dev-api.mercurypay.io/v1' })

    const result = await httpClient
      .request({
        method: 'post',
        url: `/webhooks/${microservice}/${origin}`,
        data: requestBody,
        params: {
          enterpriseSlug,
          organizationSlug,
          enterpriseId,
        },
      })
      .catch((error) =>
        console.error(
          'TestController.store',
          'error',
          error?.response?.data || error?.response || error
        )
      )

    console.info('TestController.store', 'result', result?.data)

    return response.status(200).send({ success: true })
  }

  public async update({
    request,
    response,
  }: HttpContextContract): Promise<void | { success: true }> {
    const requestData = request.all()

    console.log('TestController.update', requestData)

    return response.status(200).send({ success: true })
  }

  public async destroy({
    request,
    response,
  }: HttpContextContract): Promise<void | { success: true }> {
    const requestData = request.all()

    console.log('TestController.destroy', requestData)

    return response.status(200).send({ success: true })
  }
}

export default TestController
