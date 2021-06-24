import { validator } from '@ioc:Adonis/Core/Validator'

import CompoundDistinctValidator from 'App/Shared/Providers/Validator/CompoundDistinct'
import CompoundExistsValidator from 'App/Shared/Providers/Validator/CompoundExists'
import CompoundUniqueValidator from 'App/Shared/Providers/Validator/CompoundUnique'

validator.rule('compoundDistinct', CompoundDistinctValidator)
validator.rule('compoundExists', CompoundExistsValidator)
validator.rule('compoundUnique', CompoundUniqueValidator)
