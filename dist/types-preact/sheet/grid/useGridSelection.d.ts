import { CellCoord, CellRange, EditInitialValue, GridDimensions, GridSelectionState } from './gridTypes';
export interface GridSelection {
    state: GridSelectionState;
    /** Normalized rectangular selection, or null when nothing is active. */
    range: CellRange | null;
    setActive: (coord: CellCoord) => void;
    extendTo: (coord: CellCoord) => void;
    selectAll: (dims: GridDimensions) => void;
    startEdit: (coord: CellCoord, initialValue: EditInitialValue) => void;
    cancelEdit: () => void;
    stopEditing: () => void;
    clampToBounds: (dims: GridDimensions) => void;
    reset: () => void;
    /** Start a mouse drag-selection at a cell (sets it active, clears the range). */
    beginDrag: (coord: CellCoord) => void;
    /** Extend the drag-selection to a cell while the mouse button is held. */
    dragTo: (coord: CellCoord) => void;
    /** End the current mouse drag-selection. */
    endDrag: () => void;
    isActive: (coord: CellCoord) => boolean;
    isEditing: (coord: CellCoord) => boolean;
    isSelected: (coord: CellCoord) => boolean;
}
export declare function useGridSelection(): GridSelection;
//# sourceMappingURL=useGridSelection.d.ts.map