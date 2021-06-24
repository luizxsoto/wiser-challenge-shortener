declare module '@ioc:Adonis/Core/Validator' {
  import { Rule } from '@ioc:Adonis/Core/Validator'

  import TCompoundDistinct from 'App/Shared/Providers/Validator/@Types/TCompoundDistinct'
  import TCompoundExists from 'App/Shared/Providers/Validator/@Types/TCompoundExists'
  import TCompoundUnique from 'App/Shared/Providers/Validator/@Types/TCompoundUnique'

  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Rules {
    compoundDistinct(options: TCompoundDistinct): Rule
    compoundExists(options: TCompoundExists): Rule
    compoundUnique(options: TCompoundUnique): Rule
  }
}
