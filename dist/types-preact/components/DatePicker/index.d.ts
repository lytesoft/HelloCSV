import { DateColumnType, HourFormat } from '../../types';
export interface DatePickerProps {
    /** Stored value in the column's output format ('' when empty). */
    value: string;
    mode: DateColumnType;
    outputFormat?: string;
    displayFormat?: string;
    min?: string;
    max?: string;
    showSeconds?: boolean;
    hourFormat?: HourFormat;
    /** Fires with the normalized stored string on Enter / calendar pick / Done. */
    onCommit: (storedValue: string) => void;
    /** Initial character when editing started by typing (type-to-edit). */
    seedText?: string;
    'aria-label'?: string;
}
export default function DatePicker({ value, mode, outputFormat, displayFormat, min, max, showSeconds, hourFormat, onCommit, seedText, ...props }: DatePickerProps): import("preact").JSX.Element;
//# sourceMappingURL=index.d.ts.map