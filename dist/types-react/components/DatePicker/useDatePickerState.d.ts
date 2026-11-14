import { RefObject } from '../../../shims/react-compat-shim.js';
import { default as dayjs, Dayjs } from 'dayjs';
import { DateColumnType, HourFormat } from '../../types';
interface Params {
    mode: DateColumnType;
    value: string;
    outputFormat?: string;
    displayFormat?: string;
    min?: string;
    max?: string;
    showSeconds: boolean;
    hourFormat: HourFormat;
    seedText?: string;
    onCommit: (storedValue: string) => void;
    dayRefs: RefObject<Record<string, HTMLButtonElement | null>>;
}
export type CalendarView = 'days' | 'months' | 'years';
/**
 * Owns all DatePicker state (draft value, typed text, visible month, calendar
 * view, open) and the handlers that mutate them. Pure logic — it holds no DOM
 * refs beyond `dayRefs` (needed for roving focus in the calendar grid).
 */
export declare function useDatePickerState({ mode, value, outputFormat, displayFormat, min, max, showSeconds, hourFormat, seedText, onCommit, dayRefs, }: Params): {
    open: any;
    setOpen: any;
    text: any;
    draft: any;
    viewMonth: any;
    view: any;
    minBound: dayjs.Dayjs | null;
    maxBound: dayjs.Dayjs | null;
    is12h: boolean;
    hasCalendar: boolean;
    hasTime: boolean;
    meridiem: "AM" | "PM";
    hourFieldValue: any;
    commitTextRef: any;
    handleInput: (e: Event) => void;
    handleInputKeyDown: (e: KeyboardEvent) => void;
    commitText: () => void;
    handlePrev: () => void;
    handleNext: () => void;
    handleTitleClick: () => void;
    selectDay: (day: Dayjs) => void;
    selectMonth: (monthIndex: number) => void;
    selectYear: (year: number) => void;
    handleGridKeyDown: (e: KeyboardEvent, focused: Dayjs) => void;
    setHour: (raw: string) => void;
    setTimePart: (part: "hour" | "minute" | "second", raw: string) => void;
    setMeridiem: (next: "AM" | "PM") => void;
};
export {};
//# sourceMappingURL=useDatePickerState.d.ts.map