import { ImporterOutputFieldType } from '../../types';
import { ImporterTransformerDefinitionBase, ImporterTransformerOutput } from '../types';
export declare class Transformer {
    definition: ImporterTransformerDefinitionBase;
    constructor(definition: ImporterTransformerDefinitionBase);
    transform(value: ImporterOutputFieldType): Promise<ImporterOutputFieldType>;
    parse(_value: ImporterOutputFieldType): ImporterTransformerOutput;
}
//# sourceMappingURL=base.d.ts.map