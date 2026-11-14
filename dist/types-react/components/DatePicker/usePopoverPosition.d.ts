import { RefObject } from '../../../shims/react-compat-shim.js';
interface Options {
    open: boolean;
    inputRef: RefObject<HTMLInputElement>;
    panelRef: RefObject<HTMLDivElement>;
    /** Called when the anchor input scrolls out of view (so the caller can close). */
    onScrollAway: () => void;
}
/**
 * Positions a portaled popover panel relative to the trigger input. Uses page
 * coordinates + `position: absolute` (like the sheet tooltip) so it scrolls with
 * the document; scroll/resize listeners keep it aligned during the grid's inner
 * (overflow) scroll, and it flips above / clamps to the viewport so it never
 * renders off-screen. Closes (via `onScrollAway`) once the anchor leaves view.
 */
export declare function usePopoverPosition({ open, inputRef, panelRef, onScrollAway, }: Options): {
    top: number;
    left: number;
};
export {};
//# sourceMappingURL=usePopoverPosition.d.ts.map