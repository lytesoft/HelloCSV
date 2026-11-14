import { Dayjs } from 'dayjs';
import { DateColumnType, HourFormat, SheetColumnDateTypeArguments } from '../types';
export declare function defaultDisplayFormat(mode: DateColumnType, showSeconds?: boolean, hourFormat?: HourFormat): string;
/**
 * Strictly parse a stored/user value into a dayjs object, trying the column's
 * output/display formats then the ISO fallback. Returns `null` for empty or
 * unparseable input.
 */
export declare function parseDate(value: string | null | undefined, mode: DateColumnType, typeArguments?: SheetColumnDateTypeArguments): Dayjs | null;
/** Serialize a dayjs object to the column's stored/output format. */
export declare function toStored(date: Dayjs | null, mode: DateColumnType, typeArguments?: SheetColumnDateTypeArguments): string;
/**
 * Coerce a raw CSV/user string into the normalized stored value. Empty stays
 * empty; a parseable value is normalized to `outputFormat`; anything else is
 * kept verbatim so the automatic validator can flag it.
 */
export declare function coerceDateValue(raw: string, mode: DateColumnType, typeArguments?: SheetColumnDateTypeArguments): string;
/**
 * Format a stored value for display. Unparseable values are returned unchanged
 * so invalid cells remain visible (and flagged).
 */
export declare function formatDisplay(value: string | null | undefined, mode: DateColumnType, typeArguments?: SheetColumnDateTypeArguments): string;
/**
 * Build a stable 6×7 matrix of days covering the visible calendar for
 * `viewMonth`, starting on the first day of the week. Always 6 rows so the
 * calendar height doesn't jump between months.
 */
export declare function buildMonthMatrix(viewMonth: Dayjs): Dayjs[][];
/**
 * Whether `day` falls outside the inclusive [min, max] range at day
 * granularity — used to disable calendar cells.
 */
export declare function dayIsOutOfRange(day: Dayjs, min: Dayjs | null, max: Dayjs | null): boolean;
/**
 * Whether `value` falls outside the inclusive [min, max] range at full
 * (millisecond) granularity — used by the validator so datetime/time bounds
 * account for the time portion, not just the day.
 */
export declare function valueIsOutOfRange(value: Dayjs, min: Dayjs | null, max: Dayjs | null): boolean;
//# sourceMappingURL=dateUtils.d.ts.map