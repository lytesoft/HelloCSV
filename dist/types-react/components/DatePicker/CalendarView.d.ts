import { RefObject } from '../../../shims/react-compat-shim.js';
import { Dayjs } from 'dayjs';
import { CalendarView as View } from './useDatePickerState';
interface Props {
    view: View;
    viewMonth: Dayjs;
    draft: Dayjs | null;
    minBound: Dayjs | null;
    maxBound: Dayjs | null;
    dayRefs: RefObject<Record<string, HTMLButtonElement | null>>;
    onPrev: () => void;
    onNext: () => void;
    onTitleClick: () => void;
    onSelectDay: (day: Dayjs) => void;
    onSelectMonth: (monthIndex: number) => void;
    onSelectYear: (year: number) => void;
    onDayKeyDown: (e: KeyboardEvent, day: Dayjs) => void;
}
export default function CalendarView({ view, viewMonth, draft, minBound, maxBound, dayRefs, onPrev, onNext, onTitleClick, onSelectDay, onSelectMonth, onSelectYear, onDayKeyDown, }: Props): any;
export {};
//# sourceMappingURL=CalendarView.d.ts.map