import { ReactNode } from 'preact/compat';
import { useState } from 'preact/hooks';
import {
  ButtonGroup,
  ButtonGroupDefinition,
  ConfirmationModal,
  Input,
  Select,
  Tooltip,
  Spinner,
} from '@/components';
import { downloadSheetAsCsv, removeDuplicates } from '@/utils';
import {
  XMarkIcon,
  TrashIcon,
  PlusIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from '@/i18';
import {
  ImporterValidationError,
  RemoveRowsPayload,
  EnumLabelDict,
  SheetDefinition,
  SheetRow,
  SheetViewMode,
} from '@/types';
import { useImporterDefinition } from '@/importer/hooks';
import { useImporterState } from '@/importer/reducer';

interface Props {
  sheetDefinition: SheetDefinition;
  rowData: SheetRow[];
  selectedRows: SheetRow[];
  setSelectedRows: (rows: SheetRow[]) => void;
  viewMode: SheetViewMode;
  setViewMode: (mode: SheetViewMode) => void;
  searchPhrase: string;
  setSearchPhrase: (searchPhrase: string) => void;
  errorColumnFilter: string | null;
  setErrorColumnFilter: (mode: string | null) => void;
  removeRows: (payload: RemoveRowsPayload) => void;
  addEmptyRow: () => void;
  sheetValidationErrors: ImporterValidationError[];
  rowValidationSummary: Record<SheetViewMode, number>;
  resetState: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  enumLabelDict: EnumLabelDict;
}

export default function SheetDataEditorActions({
  sheetDefinition,
  rowData,
  selectedRows,
  setSelectedRows,
  viewMode,
  setViewMode,
  searchPhrase,
  setSearchPhrase,
  errorColumnFilter,
  setErrorColumnFilter,
  removeRows,
  addEmptyRow,
  sheetValidationErrors,
  rowValidationSummary,
  resetState,
  undo,
  redo,
  canUndo,
  canRedo,
  enumLabelDict,
}: Props) {
  const { csvDownloadMode, availableActions } = useImporterDefinition();
  const { t } = useTranslations();

  const { processingInProgress } = useImporterState();

  const [removeConfirmationModalOpen, setRemoveConfirmationModalOpen] =
    useState(false);
  const [resetConfirmationModalOpen, setResetConfirmationModalOpen] =
    useState(false);

  function errorFilterOption(columnId: string) {
    const columnDefinition = sheetDefinition.columns.find(
      (c) => c.id === columnId
    );

    const count = removeDuplicates(
      sheetValidationErrors
        .filter((error) => error.columnId === columnId)
        .map((row) => row.rowIndex)
    ).length;

    return {
      label: `${columnDefinition?.label || columnId} (${count})`,
      value: columnId,
    };
  }

  const filterByErrorOptions = removeDuplicates(
    sheetValidationErrors.map((error) => error.columnId)
  ).map((columnId) => errorFilterOption(columnId));

  if (
    errorColumnFilter != null &&
    filterByErrorOptions.find((option) => option.value === errorColumnFilter) ==
      null
  ) {
    filterByErrorOptions.push(errorFilterOption(errorColumnFilter));
  }

  const viewModeButtons: ButtonGroupDefinition[] = [
    {
      value: 'all',
      label: t('sheet.all') + ` (${rowValidationSummary.all})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode('all');
      },
      variant: 'default',
    },
    {
      value: 'valid',
      label: t('sheet.valid') + ` (${rowValidationSummary.valid})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode('valid');
      },
      variant: 'default',
    },
    {
      value: 'errors',
      label: t('sheet.invalid') + ` (${rowValidationSummary.errors})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode('errors');
      },
      variant: 'danger',
    },
  ];

  function onRemoveRows() {
    removeRows({ rows: selectedRows, sheetId: sheetDefinition.id });
    setSelectedRows([]);
  }

  return (
    <div className="hc:my-5 hc:flex hc:items-center">
      <div className="hc:flex hc:grow hc:flex-wrap hc:items-center hc:gap-5">
        <div>
          <ButtonGroup activeButton={viewMode} buttons={viewModeButtons} />
        </div>

        {availableActions.includes('search') && (
          <Input
            clearable
            value={searchPhrase}
            onChange={(v) => setSearchPhrase(v as string)}
            placeholder={t('sheet.search')}
            iconBuilder={(props) => <MagnifyingGlassIcon {...props} />}
          />
        )}

        {availableActions.includes('undoRedo') && (
          <>
            <Tooltip tooltipText={t('sheet.undoTooltip')}>
              <ToolbarButton
                label={t('sheet.undoTooltip')}
                disabled={!canUndo}
                onClick={undo}
              >
                <ArrowUturnLeftIcon aria-hidden="true" />
              </ToolbarButton>
            </Tooltip>

            <Tooltip tooltipText={t('sheet.redoTooltip')}>
              <ToolbarButton
                label={t('sheet.redoTooltip')}
                disabled={!canRedo}
                onClick={redo}
              >
                <ArrowUturnRightIcon aria-hidden="true" />
              </ToolbarButton>
            </Tooltip>
          </>
        )}

        {availableActions.includes('removeRows') && (
          <Tooltip
            tooltipText={t(
              selectedRows.length <= 0
                ? 'sheet.removeRowsTooltipNoRowsSelected'
                : 'sheet.removeRowsTooltip'
            )}
          >
            <ToolbarButton
              label={t(
                selectedRows.length <= 0
                  ? 'sheet.removeRowsTooltipNoRowsSelected'
                  : 'sheet.removeRowsTooltip'
              )}
              disabled={selectedRows.length <= 0}
              onClick={() => setRemoveConfirmationModalOpen(true)}
            >
              <TrashIcon aria-hidden="true" />
            </ToolbarButton>
          </Tooltip>
        )}

        {availableActions.includes('addRows') && (
          <Tooltip tooltipText={t('sheet.addRowsTooltip')}>
            <ToolbarButton
              label={t('sheet.addRowsTooltip')}
              onClick={addEmptyRow}
            >
              <PlusIcon aria-hidden="true" />
            </ToolbarButton>
          </Tooltip>
        )}

        {availableActions.includes('downloadCsv') && (
          <Tooltip tooltipText={t('sheet.downloadSheetTooltip')}>
            <ToolbarButton
              label={t('sheet.downloadSheetTooltip')}
              disabled={rowData.length <= 0}
              onClick={() =>
                downloadSheetAsCsv(
                  sheetDefinition,
                  rowData,
                  enumLabelDict,
                  csvDownloadMode
                )
              }
            >
              <ArrowDownTrayIcon aria-hidden="true" />
            </ToolbarButton>
          </Tooltip>
        )}

        <Select
          clearable
          displayPlaceholderWhenSelected
          placeholder={t('sheet.filterByError')}
          classes="hc:min-w-48"
          options={filterByErrorOptions}
          value={errorColumnFilter}
          onChange={(value) => setErrorColumnFilter(value as string)}
        />

        {availableActions.includes('removeRows') && (
          <ConfirmationModal
            open={removeConfirmationModalOpen}
            setOpen={setRemoveConfirmationModalOpen}
            onConfirm={onRemoveRows}
            title={t('sheet.removeConfirmationModalTitle')}
            confirmationText={t(
              'sheet.removeConfirmationModalConfirmationText'
            )}
            subTitle={t('sheet.removeConfirmationModalSubTitle', {
              rowsCount: selectedRows.length,
            })}
            variant="danger"
          />
        )}
      </div>
      <div className="hc:ml-5 hc:flex hc:items-center">
        {processingInProgress && (
          <>
            <Spinner color="dark" />
            <div className="hc:mr-2" />
          </>
        )}

        {availableActions.includes('resetState') && (
          <>
            <Tooltip tooltipText={t('sheet.resetTooltip')}>
              <XMarkIcon
                className="hc:h-6 hc:w-6 hc:cursor-pointer"
                onClick={() => setResetConfirmationModalOpen(true)}
              />
            </Tooltip>

            <ConfirmationModal
              open={resetConfirmationModalOpen}
              setOpen={setResetConfirmationModalOpen}
              onConfirm={resetState}
              title={t('sheet.resetConfirmationModalTitle')}
              confirmationText={t(
                'sheet.resetConfirmationModalConfirmationText'
              )}
              subTitle={t('sheet.resetConfirmationModalSubTitle')}
              variant="danger"
            />
          </>
        )}
      </div>
    </div>
  );
}

interface ToolbarButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

// A real <button>, so the toolbar actions can be reached and pressed with the
// keyboard (Tab, then Enter or Space) and are announced as buttons.
function ToolbarButton({
  label,
  disabled = false,
  onClick,
  children,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`hc:block hc:h-6 hc:w-6 hc:rounded-sm hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:focus-visible:outline-hello-csv-primary ${
        disabled
          ? 'hc:pointer-events-none hc:cursor-not-allowed hc:opacity-50'
          : 'hc:cursor-pointer'
      }`}
    >
      {children}
    </button>
  );
}
