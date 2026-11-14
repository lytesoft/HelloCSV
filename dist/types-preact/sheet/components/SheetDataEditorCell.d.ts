import { EnumLabelDict, ImporterOutputFieldType, SheetColumnDefinition, SheetState, SheetDefinition } from '../../types';
import { CellCoord, GridDimensions } from '../grid/gridTypes';
interface Props {
    coord: CellCoord;
    gridDims: GridDimensions;
    widthPx: number;
    ariaColIndex: number;
    tdClassName: string;
    rowId: string;
    sheetDefinition: SheetDefinition;
    columnDefinition: SheetColumnDefinition;
    value: ImporterOutputFieldType;
    onUpdated: (value: ImporterOutputFieldType) => void;
    allData: SheetState[];
    clearRowsSelection: () => void;
    errorsText: string;
    enumLabelDict: EnumLabelDict;
}
export default function SheetDataEditorCell({ coord, gridDims, widthPx, ariaColIndex, tdClassName, rowId, sheetDefinition, columnDefinition, value, onUpdated, allData, clearRowsSelection, errorsText, enumLabelDict, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=SheetDataEditorCell.d.ts.map