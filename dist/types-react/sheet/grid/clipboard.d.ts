import { ImporterOutputFieldType, SheetRow } from '../../types';
import { SheetColumnDefinition } from '../types';
import { CellChange, CellRange, GridDimensions } from './gridTypes';
export interface Clipboard {
    write: (text: string) => void;
    read: () => Promise<string>;
}
export declare function useClipboard(): Clipboard;
export declare function serializeRange(cells: ImporterOutputFieldType[][], columns: SheetColumnDefinition[]): string;
/**
 * Map a pasted 2D block onto the grid, anchored at `target`.
 *
 * - Cells outside the grid bounds are dropped (clamped).
 * - Read-only target cells are skipped.
 * - When `block` is a single 1x1 cell and a multi-cell `selection` is provided,
 *   the value fills the entire selection (Google-Sheets behavior).
 *
 * Returns changes in *display* coordinates ({row, col}); the caller converts
 * the display row to a data row index at dispatch time.
 */
export declare function mapPasteBlock(block: string[][], target: {
    row: number;
    col: number;
}, dims: GridDimensions, isEditable: (row: number, col: number) => boolean, selection?: CellRange): Array<{
    row: number;
    col: number;
    value: string;
}>;
/**
 * Coalesce per-cell changes into one merged row payload per data row.
 *
 * This is mandatory before dispatching a batch: `StateBuilder.changeCell`
 * accumulates build steps and each step carries a whole row, so unmerged
 * changes to the same row would clobber one another.
 */
export declare function groupChangesByRow(changes: CellChange[], rows: SheetRow[]): Array<{
    rowIndex: number;
    value: SheetRow;
}>;
//# sourceMappingURL=clipboard.d.ts.map