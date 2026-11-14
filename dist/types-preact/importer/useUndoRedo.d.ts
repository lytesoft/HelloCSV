import { SheetState } from '../types';
export interface UndoRedo {
    canUndo: boolean;
    canRedo: boolean;
    /** Snapshot the current sheetData before a mutating operation. Clears redo. */
    record: (current: SheetState[]) => void;
    /** Restore the previous snapshot; pushes `current` onto the redo stack. */
    undo: (current: SheetState[]) => SheetState[] | null;
    /** Re-apply the next snapshot; pushes `current` onto the undo stack. */
    redo: (current: SheetState[]) => SheetState[] | null;
    /** Drop all history (e.g. when a fresh dataset is loaded). */
    reset: () => void;
}
/**
 * In-memory undo/redo history for the data editor. One snapshot of the whole
 * `sheetData` is recorded per user operation, so a single undo reverts an entire
 * mass action (e.g. a multi-cell paste). History is not persisted and resets on
 * reload.
 *
 * Stacks live in refs for synchronous reads inside undo/redo; a version counter
 * forces re-renders so `canUndo`/`canRedo` stay reactive for the toolbar.
 */
export declare function useUndoRedo(): UndoRedo;
//# sourceMappingURL=useUndoRedo.d.ts.map