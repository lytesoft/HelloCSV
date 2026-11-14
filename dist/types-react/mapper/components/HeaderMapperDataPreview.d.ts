import { ImporterOutputFieldType, SheetColumnDefinition } from '../../types';
interface Props {
    examples: ImporterOutputFieldType[] | null;
    csvHeader: string | null;
    /** The column the header is mapped to, if any. */
    column?: SheetColumnDefinition;
}
export default function HeaderMapperDataPreview({ examples, csvHeader, column, }: Props): any;
export {};
//# sourceMappingURL=HeaderMapperDataPreview.d.ts.map