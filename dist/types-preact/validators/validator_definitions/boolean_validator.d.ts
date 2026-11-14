import { ImporterOutputFieldType } from '../../types';
import { Validator } from './base';
/**
 * Automatic validator for boolean columns. Coercion (see
 * src/sheet/valueCoercion.ts) turns recognized values into real booleans, so by
 * validation time a valid cell is an actual boolean; anything still a string
 * failed to coerce and is flagged. Empty is valid — presence is `required`'s job.
 */
export declare class BooleanValidator extends Validator {
    isValid(fieldValue: ImporterOutputFieldType): string | undefined;
}
//# sourceMappingURL=boolean_validator.d.ts.map