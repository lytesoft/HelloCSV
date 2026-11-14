import { RefObject } from 'preact/compat';
import { CellChangedPayload, SheetDefinition, SheetRow, SheetState } from '../../types';
import { GridSelection } from './useGridSelection';
import { GridDimensions } from './gridTypes';
interface UseGridActionsParams {
    sheetDefinition: SheetDefinition;
    /** The current sheet's state (source of truth for dispatched row payloads). */
    data: SheetState;
    /** The filtered/sorted rows currently displayed in the grid. */
    rowData: SheetRow[];
    /** All sheets' state, used to resolve a display row to its data row index. */
    allData: SheetState[];
    canEditRows: boolean;
    setRowsData: (payloads: CellChangedPayload[]) => void;
    /** Undo the last operation. Omitted when undo/redo is disabled. */
    undo?: () => void;
    /** Redo the last undone operation. Omitted when undo/redo is disabled. */
    redo?: () => void;
}
interface UseGridActionsResult {
    selection: GridSelection;
    dims: GridDimensions;
    tableContainerRef: RefObject<HTMLDivElement>;
    handleGridKeyDown: (e: KeyboardEvent) => void;
}
/**
 * Owns the keyboard grid: selection lifecycle, navigation, editing, clipboard
 * (copy/cut/paste), fill-down, and range clearing. Coordinates are in display
 * space (see gridTypes.CellCoord) and are converted to data coordinates only at
 * dispatch time (`applyDisplayChanges`).
 *
 * Returns the selection handle (for the grid context provider), the grid
 * dimensions, the scroll-container ref to attach, and the keydown handler.
 */
export declare function useGridActions({ sheetDefinition, data, rowData, allData, canEditRows, setRowsData, undo, redo, }: UseGridActionsParams): UseGridActionsResult;
export {};
//# sourceMappingURL=useGridActions.d.ts.map