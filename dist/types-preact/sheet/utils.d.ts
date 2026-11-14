import { EnumLabelDict, ImporterOutputFieldType, ImporterValidationError, SelectOption, SheetColumnDefinition, SheetColumnReferenceDefinition, SheetDefinition, SheetRow, SheetState, SheetViewMode } from '../types';
import { ReactNode } from 'preact/compat';
export declare function extractReferenceColumnPossibleValues(columnDefinition: SheetColumnReferenceDefinition, allData: SheetState[]): ImporterOutputFieldType[];
export declare function findRowIndex(allData: SheetState[], sheetId: string, row: SheetRow): number;
export declare function useFilteredRowData(data: SheetState, allData: SheetState[], viewMode: SheetViewMode, sheetValidationErrors: ImporterValidationError[], errorColumnFilter: string | null, sheetDefinition: SheetDefinition, searchPhrase: string, enumLabelDict: EnumLabelDict): SheetRow[];
export declare function isColumnReadOnly(columnDefinition: SheetColumnDefinition): boolean;
export declare function getEnumLabelDict(sheetDefinitions: SheetDefinition[]): {
    [k: string]: {
        [k: string]: {
            [k: string]: string;
        };
    };
};
export declare function buildMultiEnumEditorOptions(value: ImporterOutputFieldType, values: SelectOption<string>[], makeInvalidLabel: (raw: string) => string, invalidIcon: ReactNode): SelectOption<string>[];
export declare function getCellDisplayValue(sheetDefinition: SheetDefinition, columnDefinition: SheetColumnDefinition, value: ImporterOutputFieldType, enumLabelDict: EnumLabelDict): {
    displayValue: ImporterOutputFieldType;
    valueEmpty: boolean;
};
//# sourceMappingURL=utils.d.ts.map