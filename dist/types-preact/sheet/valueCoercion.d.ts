import { ImporterOutputFieldType } from '../types';
import { SheetColumnDefinition } from './types';
export declare function coerceCellValue(column: SheetColumnDefinition, raw: string): ImporterOutputFieldType;
/**
 * Serialize a typed cell value back to a string — the inverse of
 * `coerceCellValue`, so a value survives a copy (format) -> paste (coerce)
 * round-trip.
 */
export declare function formatCellValue(column: SheetColumnDefinition, value: ImporterOutputFieldType): string;
/** The "empty" value appropriate for a column (used when clearing cells). */
export declare function emptyValueForColumn(column: SheetColumnDefinition): ImporterOutputFieldType;
//# sourceMappingURL=valueCoercion.d.ts.map