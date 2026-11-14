import { SheetRowLimitInfo } from '../utils';
interface SheetRowLimit extends SheetRowLimitInfo {
    tooltip: string;
}
export interface SheetRowLimits {
    limits: SheetRowLimit[];
    byId: Record<string, SheetRowLimit>;
    /** Limited sheets that currently exceed their `maxRows`. */
    exceeded: SheetRowLimit[];
    /** Whether any sheet exceeds its `maxRows`. */
    hasExceeded: boolean;
    preventUpload: boolean;
    uploadBlockedTooltip: string;
}
export declare function useSheetRowLimits(): SheetRowLimits;
export {};
//# sourceMappingURL=useSheetRowLimits.d.ts.map