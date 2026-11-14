import { ParsedFile } from './types';
export declare function parseCsv({ file }: {
    file: File;
}): Promise<ParsedFile>;
/**
 * Parse quote-aware delimited text into a 2D string array (no header row).
 *
 * Shares the CSV parser (papaparse) so quoted cells containing the delimiter,
 * newlines, or quotes round-trip correctly. Used for clipboard TSV paste.
 */
export declare function parseDelimitedText(text: string, delimiter: string): string[][];
//# sourceMappingURL=index.d.ts.map