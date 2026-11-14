import { SheetDefinition, SheetState, EnumLabelDict, CellChangedPayload, ImporterValidationError, RemoveRowsPayload } from '../../types';
interface Props {
    sheetDefinition: SheetDefinition;
    data: SheetState;
    sheetValidationErrors: ImporterValidationError[];
    setRowData: (payload: CellChangedPayload) => void;
    setRowsData: (payloads: CellChangedPayload[]) => void;
    removeRows: (payload: RemoveRowsPayload) => void;
    addEmptyRow: () => void;
    resetState: () => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
    enumLabelDict: EnumLabelDict;
}
export default function SheetDataEditor({ sheetDefinition, data, sheetValidationErrors, setRowData, setRowsData, removeRows, addEmptyRow, resetState, undo, redo, canUndo, canRedo, enumLabelDict, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=SheetDataEditor.d.ts.map