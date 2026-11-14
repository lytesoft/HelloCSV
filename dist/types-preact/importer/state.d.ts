import { Dispatch } from 'preact/hooks';
import { ColumnMapping, ImporterAction, ImporterState, PersistenceConfig, SheetDefinition, StateBuilderImporterDefinition, RemoveRowsPayload, CellChangedPayload, SheetState, ProcessingPhase } from '../types';
export declare function buildState(sheetDefinitions: SheetDefinition[], persistenceConfig: PersistenceConfig): Promise<ImporterState>;
export declare function buildInitialState(sheetDefinitions: SheetDefinition[]): ImporterState;
declare class StateBuilder {
    private initialState;
    private importerDefinition;
    protected buildSteps: ImporterAction[];
    constructor(importerDefinition: StateBuilderImporterDefinition, initialState?: ImporterState);
    getState(phase?: ProcessingPhase): Promise<ImporterState>;
    uploadFile(file: File): Promise<void>;
    setEnterDataManually(amountOfEmptyRowsToAdd?: number): void;
    setMappings(mappings: ColumnMapping[]): void;
    confirmMappings(): Promise<void>;
    changeCell(payload: CellChangedPayload): void;
    removeRows(payload: RemoveRowsPayload): void;
    restoreSheetData(sheetData: SheetState[]): void;
    addEmptyRow(): void;
}
export declare class OuterStateBuilder extends StateBuilder {
    constructor(importerDefinition: StateBuilderImporterDefinition);
}
export declare class InnerStateBuilder extends StateBuilder {
    constructor(importerDefinition: StateBuilderImporterDefinition, initialState: ImporterState);
    private static readonly actionTypesThatRequireProcessing;
    dispatchChange(dispatch: Dispatch<ImporterAction>): Promise<void>;
}
export {};
//# sourceMappingURL=state.d.ts.map