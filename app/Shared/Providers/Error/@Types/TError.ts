import { ApiErrorNode } from '@ioc:Adonis/Core/Validator'

export type TApiError = {
  code: string
  message: string
  validations?: ApiErrorNode[]
  details?: TApiError
}

export type TApiErrorResponse<TEntity> = {
  status: number
  error: TApiError
  register?: TEntity
}
