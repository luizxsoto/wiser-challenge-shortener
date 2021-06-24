import { ValidationContract } from '@ioc:Adonis/Core/Validator'

import TCompoundUnique from './@Types/TCompoundUnique'

const CompoundUniqueValidator: ValidationContract<[options: TCompoundUnique]>['validate'] = (
  _,
  compiledOptions,
  { pointer, arrayExpressionPointer, errorReporter }
) => {
  const [{ registers, register, fields, ignoreField }] = compiledOptions

  const registerFinded = ignoreField
    ? registers.some(
        (auxRegister) =>
          fields.every(
            (field) =>
              auxRegister[field] && register[field] && auxRegister[field] === register[field]
          ) && auxRegister[ignoreField] !== register[ignoreField]
      )
    : registers.some((auxRegister) =>
        fields.every(
          (field) => auxRegister[field] && register[field] && auxRegister[field] === register[field]
        )
      )

  if (registerFinded)
    errorReporter.report(
      pointer,
      'compoundUnique',
      'compoundUnique',
      arrayExpressionPointer,
      compiledOptions
    )
}

export default CompoundUniqueValidator
