import { ImporterOutputFieldType } from '../../types';
import { CustomTransformerDefinition, ImporterTransformerOutput } from '../types';
import { Transformer } from './base';
export declare class CustomTransformer extends Transformer {
    key: string;
    parse: (value: ImporterOutputFieldType) => ImporterTransformerOutput;
    constructor(definition: CustomTransformerDefinition);
}
//# sourceMappingURL=custom_transformer.d.ts.map