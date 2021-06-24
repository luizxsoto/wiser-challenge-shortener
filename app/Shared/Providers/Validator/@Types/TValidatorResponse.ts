import { TApiError } from 'App/Shared/Providers/Error/@Types/TError'

export type TValidatorResponse<TEntity> = {
  status: number
  error?: TApiError
  register: TEntity
}
