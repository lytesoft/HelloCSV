import { ReactNode } from 'preact/compat';
type Variant = 'error' | 'info';
type Placement = 'bottom' | 'top';
interface Props {
    variant?: Variant;
    children?: ReactNode;
    tooltipText?: string;
    /**
     * When true (default) the wrapper is focusable so the tooltip appears on
     * keyboard focus. Set false when a focusable child (e.g. a grid cell) already
     * triggers `group-focus-within`, to avoid a duplicate tab stop.
     */
    focusable?: boolean;
    placement?: Placement;
}
export default function SheetTooltip({ variant, children, tooltipText, focusable, placement, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=SheetTooltip.d.ts.map