import { GridAction, GridDimensions, GridSelectionState, KeyDescriptor } from './gridTypes';
/**
 * Resolve a key press into a grid action. Pure and DOM-free so every shortcut
 * can be unit-tested. `isEditable(active)` reports whether the active cell
 * accepts edits (false for read-only cells / when editing is disabled).
 *
 * Coordinates returned in Move/Extend actions are already clamped to bounds.
 */
export declare function resolveKeyAction(descriptor: KeyDescriptor, state: GridSelectionState, dims: GridDimensions, isEditable: (active: GridSelectionState['active']) => boolean): GridAction;
//# sourceMappingURL=keyboardReducer.d.ts.map