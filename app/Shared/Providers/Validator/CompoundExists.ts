import { ValidationContract } from '@ioc:Adonis/Core/Validator'

import TCompoundExists from './@Types/TCompoundExists'

const CompoundExistsValidator: ValidationContract<[options: TCompoundExists]>['validate'] = (
  _,
  compiledOptions,
  { pointer, arrayExpressionPointer, errorReporter }
) => {
  const [{ registers, register, fields }] = compiledOptions

  const filledField = fields.some((field) => register[field])

  const registerFinded = registers.some((auxRegister) =>
    fields.every((field) => auxRegister[field] === register[field])
  )

  if (!registerFinded && filledField)
    errorReporter.report(
      pointer,
      'compoundExists',
      'compoundExists',
      arrayExpressionPointer,
      compiledOptions
    )
}

export default CompoundExistsValidator
