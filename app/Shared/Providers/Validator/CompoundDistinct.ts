import { ValidationContract } from '@ioc:Adonis/Core/Validator'

import TCompoundDistinct from './@Types/TCompoundDistinct'

const CompoundDistinctValidator: ValidationContract<[options: TCompoundDistinct]>['validate'] = (
  _,
  compiledOptions,
  { pointer, arrayExpressionPointer, errorReporter }
) => {
  const [{ registers, register, fields }] = compiledOptions

  const registersFinded = registers.filter((item) =>
    fields.every((field) => item[field] === register[field])
  )

  if (registersFinded.length > 1)
    errorReporter.report(
      pointer,
      'compoundDistinct',
      'compoundDistinct',
      arrayExpressionPointer,
      compiledOptions
    )
}

export default CompoundDistinctValidator
