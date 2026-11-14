import { DateColumnType, DateValidatorDefinition, ImporterOutputFieldType } from '../../types';
import { Validator } from './base';
/**
 * Automatic validator for `date` / `datetime` / `time` columns. Coercion (see
 * src/sheet/valueCoercion.ts) normalizes recognized values to the output
 * format, so a valid cell re-parses cleanly; anything that failed to coerce is
 * kept verbatim and flagged here. Empty is valid — presence is `required`'s job.
 */
export declare class DateValidator extends Validator {
    dateType: DateColumnType;
    typeArguments: {
        outputFormat?: string;
        displayFormat?: string;
        showSeconds?: boolean;
    };
    min?: string;
    max?: string;
    constructor(definition: DateValidatorDefinition);
    isValid(fieldValue: ImporterOutputFieldType): string | undefined;
}
//# sourceMappingURL=date_validator.d.ts.map