import { ImporterOutputFieldType, SheetRow } from '../../types';
import { UniqueValidatorDefinition } from '../types';
import { Validator } from './base';
export declare class UniqueValidator extends Validator {
    seen: Set<ImporterOutputFieldType>;
    caseInsensitive: boolean;
    getKey: UniqueValidatorDefinition['getKey'];
    constructor(definition: UniqueValidatorDefinition);
    private comparableValue;
    isValid(fieldValue: ImporterOutputFieldType, row: SheetRow): string | undefined;
}
//# sourceMappingURL=unique_validator.d.ts.map