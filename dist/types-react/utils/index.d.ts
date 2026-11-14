import { CsvDownloadMode, EnumLabelDict, ImporterOutputFieldType, SheetColumnDefinition, SheetColumnReferenceDefinition, SheetDefinition, SheetRow, SheetState } from '../types';
export declare const isUndefinedOrNull: (a: any) => boolean;
export declare const isPresent: (a: any) => boolean;
export declare const filterEmptyRows: (state: SheetState) => SheetRow[];
export interface SheetRowLimitInfo {
    sheetId: string;
    label: string;
    /** Effective (non-empty) row count for the sheet. */
    count: number;
    maxRows: number;
    exceeded: boolean;
}
/**
 * Returns row-limit info for every sheet that declares a `maxRows`. The count
 * is the effective (non-empty) row count — matching what actually gets
 * submitted via `getSubmittedSheetData` — so the manual-entry empty rows do not
 * falsely trip the limit. Drives both the sheet-tab counter and the upload gate.
 */
export declare function getSheetRowLimitInfo(sheets: SheetDefinition[], sheetData: SheetState[]): SheetRowLimitInfo[];
export declare function isEmptyCell(value: any): boolean;
export declare const removeDuplicates: (array: any[]) => any[];
export declare function clamp(value: number, min: number, max: number): number;
export declare function normalizeValue(value: ImporterOutputFieldType): string | null;
export declare function escapeDelimitedCell(value: ImporterOutputFieldType, delimiter: string): string;
export declare function serializeRows(rows: ImporterOutputFieldType[][], delimiter: string): string;
export declare function generateCsvContent(sheetDefinition: SheetDefinition, data: SheetRow[], enumLabelDict: EnumLabelDict, csvDownloadMode: CsvDownloadMode): Blob;
export declare function downloadSheetAsCsv(sheetDefinition: SheetDefinition, data: SheetRow[], enumLabelDict: EnumLabelDict, csvDownloadMode: CsvDownloadMode): void;
export declare function getLabelDict(columnDefinition: SheetColumnReferenceDefinition, enumLabelDict: EnumLabelDict): {
    [value: string]: ImporterOutputFieldType;
};
export declare function getLabelDictValue(labelDict: Record<string, ImporterOutputFieldType>, value: ImporterOutputFieldType): ImporterOutputFieldType;
export declare function getColumnDisplayValue(sheetDefinition: SheetDefinition, columnDefinition: SheetColumnDefinition, value: ImporterOutputFieldType, enumLabelDict: EnumLabelDict): ImporterOutputFieldType;
export declare function getSubmittedSheetData(sheetData: SheetState[]): {
    rows: SheetRow[];
    sheetId: string;
}[];
//# sourceMappingURL=index.d.ts.map