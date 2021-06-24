import Env from '@ioc:Adonis/Core/Env'
import { ApiErrorNode } from '@ioc:Adonis/Core/Validator'

import { TApiErrorResponse } from 'App/Shared/Providers/Error/@Types/TError'
import { TValidatorResponse } from 'App/Shared/Providers/Validator/@Types/TValidatorResponse'

export function ToApi<TEntity>({
  error,
  errorCode,
  props,
}: {
  error: any | unknown
  errorCode: string
  props?: { [key: string]: any | unknown }
}): TApiErrorResponse<TEntity> {
  const errorDict = {
    E_VALIDATION_FAILURE: () => {
      const validations: ApiErrorNode[] =
        (error.messages?.errors || error.validations).map((err: ApiErrorNode) => ({
          rule: err.rule,
          field: err.field,
          message: err.message || `Validação: ${err.rule}`,
        })) || []

      const parsedError = {
        status: 400,
        error: {
          code: 'E_VALIDATION_FAILURE',
          message: 'A validation error occurred',
          validations,
        },
        register: props?.register,
      }

      return parsedError
    },
    E_ROUTE_NOT_FOUND: () => {
      const parsedError = {
        status: 404,
        error: {
          code: 'E_ROUTE_NOT_FOUND',
          message: 'Route not found',
        },
      }

      return parsedError
    },
    E_UNRECOGNIZED: () => {
      const parsedError = {
        status: 500,
        error: {
          code: 'E_UNRECOGNIZED',
          message: 'An unrecognized error has occurred',
          details:
            Env.get('NODE_ENV') === 'development'
              ? {
                  message: error.message,
                  code: error.code,
                  status: error.code,
                  ...error,
                }
              : undefined,
        },
      }

      return parsedError
    },
  }

  const parsedError = errorDict[errorCode] || errorDict.E_UNRECOGNIZED

  return parsedError()
}

export function ToValidator<TEntity>({
  error,
  props,
}: {
  error: any | unknown
  props?: { [key: string]: any | unknown }
}): TValidatorResponse<TEntity> {
  const validated = ToApi<TEntity>({
    error,
    errorCode: 'E_VALIDATION_FAILURE',
    props,
  }) as TValidatorResponse<TEntity>

  return validated
}

export const ToValidateMessage = (
  field: string,
  rule: string,
  _arrayExpressionPointer: string | undefined,
  options: any
): string => {
  const parsedOptions = Array.isArray(options) ? options[0] : options

  const errorDict = {
    array: 'This value must be an array',
    compoundDistinct: `This value is repeating in the request${parsedOptions?.message || ''}`,
    compoundExists: `This value was not found${parsedOptions?.message || ''}`,
    compoundUnique: `This value is already being used${parsedOptions?.message || ''}`,
    maxLength: `This value exceeded the maximum size of ${parsedOptions?.maxLength}`,
    object: 'This value must be an object',
    required: 'This value is required',
    url: 'This value must be a valid URL',
  }

  const parsedMessage = errorDict[rule] || `Validation ${rule} failed on ${field}`

  return parsedMessage
}
