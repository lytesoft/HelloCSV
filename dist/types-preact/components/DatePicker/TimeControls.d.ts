import { Dayjs } from 'dayjs';
interface Props {
    draft: Dayjs | null;
    is12h: boolean;
    showSeconds: boolean;
    hasCalendar: boolean;
    meridiem: 'AM' | 'PM';
    hourFieldValue: number;
    onHourChange: (raw: string) => void;
    onPartChange: (part: 'minute' | 'second', raw: string) => void;
    onMeridiem: (next: 'AM' | 'PM') => void;
}
export default function TimeControls({ draft, is12h, showSeconds, hasCalendar, meridiem, hourFieldValue, onHourChange, onPartChange, onMeridiem, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=TimeControls.d.ts.map