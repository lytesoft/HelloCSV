import { CellCoord, CellRange, GridDimensions, MoveDirection } from './gridTypes';
/** Clamp a coordinate into the grid bounds. */
export declare function clampCoord(coord: CellCoord, dims: GridDimensions): CellCoord;
/** Move one step in a direction, clamping (no wrapping) at the edges. */
export declare function moveCoord(coord: CellCoord, direction: MoveDirection, dims: GridDimensions): CellCoord;
/**
 * Build a normalized rectangular range from an anchor and the active cell.
 * A null anchor is treated as the active cell (single-cell range).
 */
export declare function rangeFromAnchor(anchor: CellCoord | null, active: CellCoord): CellRange;
export declare function isWithinRange(coord: CellCoord, range: CellRange): boolean;
/** Whether a coordinate falls inside the grid's dimensions. */
export declare function isWithinBounds(coord: CellCoord, dims: GridDimensions): boolean;
/**
 * Google-Sheets-style Ctrl+Arrow edge jump.
 *
 * - If the next cell in the direction is empty, jump to the next non-empty cell
 *   (skipping the run of empties).
 * - If the next cell is non-empty, jump to the last non-empty cell before the
 *   next empty cell (the end of the current data block).
 * - If nothing matches ahead, land on the grid boundary.
 *
 * `isEmpty(row, col)` reports whether a *displayed* cell is empty.
 */
export declare function jumpToEdge(from: CellCoord, direction: MoveDirection, dims: GridDimensions, isEmpty: (row: number, col: number) => boolean): CellCoord;
/** Number of rows to move for PageUp/PageDown given the viewport. */
export declare function pageDelta(containerHeightPx: number, rowHeightPx: number): number;
/**
 * Convert a data-column index to the index within a row's visible cells,
 * accounting for the leading checkbox column when present.
 */
export declare function dataColToVisibleCellIndex(dataCol: number, hasCheckboxColumn: boolean): number;
/** Inverse of {@link dataColToVisibleCellIndex}. */
export declare function visibleCellIndexToDataCol(cellIndex: number, hasCheckboxColumn: boolean): number;
//# sourceMappingURL=coordinates.d.ts.map