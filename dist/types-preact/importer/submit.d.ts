import { Dispatch } from 'preact/hooks';
import { ImporterAction, ImporterDefinitionWithDefaults, ImporterState } from '../types';
interface SubmitImporterArgs {
    state: ImporterState;
    dispatch: Dispatch<ImporterAction>;
    importerDefinition: ImporterDefinitionWithDefaults;
}
export declare function submitImporter({ state, dispatch, importerDefinition, }: SubmitImporterArgs): Promise<void>;
export {};
//# sourceMappingURL=submit.d.ts.map