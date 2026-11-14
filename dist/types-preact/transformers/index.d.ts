import { ImporterOutputFieldType, SheetDefinition, SheetState } from '../types';
import { Transformer } from './transformer_definitions/base';
import { ApplyTransformationsOptions } from './types';
export declare function applyTransformations(sheetDefinitions: SheetDefinition[], sheetStates: SheetState[], options?: ApplyTransformationsOptions): Promise<SheetState[]>;
export declare class Pipeline {
    steps: Transformer[];
    constructor(steps?: Transformer[]);
    push(step: Transformer): void;
    transform(value: ImporterOutputFieldType): Promise<ImporterOutputFieldType>;
}
//# sourceMappingURL=index.d.ts.map