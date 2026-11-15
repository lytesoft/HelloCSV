import { ReactNode } from 'preact/compat';
export interface SelectOption<T> {
    label: string;
    value: T;
    icon?: ReactNode;
    group?: string;
}
interface Props<T> {
    value: T[] | T | null;
    options: SelectOption<T>[];
    onChange: (value: T[] | T | null) => void;
    onClose?: () => void;
    multiple?: boolean;
    compareFunction?: (a: T, b: T) => boolean;
    clearable?: boolean;
    searchable?: boolean;
    placeholder?: string;
    classes?: string;
    displayPlaceholderWhenSelected?: boolean;
    autoFocus?: boolean;
    /** Open the dropdown as soon as the input is focused (used for grid editing). */
    immediate?: boolean;
    /**
     * Treat the input purely as a search/filter box: it shows the typed query
     * (not the selected value's label), so clearing it only clears the filter and
     * never the selection. Used for grid editing.
     */
    searchInputAsFilter?: boolean;
    /**
     * With `searchable`, also offer the typed text as an option when no option's
     * label matches it, so a value that isn't listed can be chosen.
     */
    creatable?: boolean;
    'aria-label'?: string;
}
export default function Select<T>({ value, options, onChange, onClose, multiple, compareFunction, clearable, searchable, placeholder, classes, displayPlaceholderWhenSelected, autoFocus, immediate, searchInputAsFilter, creatable, ...props }: Props<T>): import("preact").JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map