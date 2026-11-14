export declare const NUMBER_OF_EMPTY_ROWS_FOR_MANUAL_DATA_INPUT = 100;
export declare const DEFAULT_MAX_CONCURRENT_ASYNC_OPERATIONS = 8;
export declare const MAX_UNDO_HISTORY = 50;
export declare const NUMBER_OF_EXAMPLES_IN_MAPPING = 5;
export declare const SUPPORTED_FILE_MIME_TYPES: string[];
export declare const SUPPORTED_FILE_EXTENSIONS: string[];
export declare const DOWNLOADED_CSV_SEPARATOR = ",";
export declare const MAX_CHARACTERS_IN_MAPPING_EXAMPLES = 500;
export declare const HEALDESS_UI_PORTAL_ROOT_ID = "headlessui-portal-root";
export declare const ROOT_CLASS = "hello-csv";
/** Marks the portaled DatePicker popover so the grid cell's blur logic can tell
 * focus is still "inside" the editor even though it's rendered outside the cell. */
export declare const DATE_PICKER_PANEL_ATTR = "data-hellocsv-datepicker";
/** Spread onto every importer text input so password managers (Bitwarden,
 * 1Password, LastPass, Dashlane) don't overlay autofill popups — importer
 * fields are data cells, never credentials. */
export declare const PASSWORD_MANAGER_IGNORE_PROPS: {
    readonly autoComplete: "off";
    readonly 'data-bwignore': true;
    readonly 'data-1p-ignore': true;
    readonly 'data-lpignore': "true";
    readonly 'data-form-type': "other";
};
export declare const ESTIMATED_ROW_HEIGHT = 52.62;
export declare const CHECKBOX_COLUMN_ID = "checkbox-column-id";
export declare const CHECKBOX_COLUMN_WIDTH = 110;
export declare const DATA_COLUMN_MIN_WIDTH = 50;
export declare const DATA_COLUMN_MAX_WIDTH = 500;
export declare const DATA_COLUMN_WIDTH = 150;
export declare const DEFAULT_BOOLEAN_TRUE_LABEL = "Yes";
export declare const DEFAULT_BOOLEAN_FALSE_LABEL = "No";
export declare const DEFAULT_TRUE_TOKENS: string[];
export declare const DEFAULT_FALSE_TOKENS: string[];
//# sourceMappingURL=index.d.ts.map