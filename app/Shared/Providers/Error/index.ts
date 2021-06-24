import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

import { ToApi } from 'App/Shared/Sanitizers/Error'

class ErrorProvider extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  protected shouldReport(error: any): boolean {
    return !error?.status || Number(error?.status) === 500
  }

  public async reportError(error: any, parsedError: any) {
    if (!this.shouldReport(parsedError)) return

    console.log({ AppError: { parsedError, error } })
  }

  public async handle(error: any, ctx: HttpContextContract) {
    const parsedError = ToApi({ error, errorCode: error.code })

    this.reportError(error, parsedError)

    return ctx.response.status(parsedError.status).send(parsedError.error)
  }
}

export default ErrorProvider
