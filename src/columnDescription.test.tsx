// @vitest-environment happy-dom
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/preact';
import { TranslationProvider } from '@/i18';
import { SheetDefinition } from '@/types';
import { getImporterRequirements } from './uploader/utils';
import RequirementsList from './uploader/components/RequirementsList';
import SheetDataEditorHeader from './sheet/components/SheetDataEditorHeader';
import HeaderMapperDataPreview from './mapper/components/HeaderMapperDataPreview';

afterEach(() => cleanup());

const description = 'The day of the event.\nWrite it as DD/MM/YYYY.';

const sheet: SheetDefinition = {
  id: 'events',
  label: 'Events',
  columns: [
    {
      id: 'date',
      label: 'Date',
      type: 'string',
      description,
      validators: [{ validate: 'required' }],
    },
    { id: 'notes', label: 'Notes', type: 'string' },
  ],
};

const tooltipTexts = (container: Element) =>
  Array.from(container.ownerDocument.querySelectorAll('[role="tooltip"]')).map(
    (tooltip) => tooltip.getAttribute('aria-label')
  );

describe('column descriptions', () => {
  it('are passed to the upload requirements', () => {
    const { required, optional } = getImporterRequirements([sheet]);

    expect(required[0].columnDescription).toBe(description);
    expect(optional[0].columnDescription).toBeUndefined();
  });

  it('replace the generic tooltip on the upload screen', () => {
    const { container } = render(
      <TranslationProvider>
        <RequirementsList
          importerRequirements={getImporterRequirements([sheet])}
        />
      </TranslationProvider>
    );

    // The column without a description keeps the generic text.
    expect(tooltipTexts(container)).toEqual([
      description,
      'This column is optional for the import',
    ]);
  });

  it('show on the sheet column header', () => {
    const { container } = render(
      <TranslationProvider>
        <SheetDataEditorHeader column={sheet.columns[0]} />
      </TranslationProvider>
    );

    expect(tooltipTexts(container)).toEqual([description]);
  });

  it('add no tooltip to a header without one', () => {
    const { container } = render(
      <TranslationProvider>
        <SheetDataEditorHeader column={sheet.columns[1]} />
      </TranslationProvider>
    );

    expect(tooltipTexts(container)).toEqual([]);
  });

  it('show beside the data preview of a mapped header', () => {
    const { getByText } = render(
      <TranslationProvider>
        <HeaderMapperDataPreview
          csvHeader="Event date"
          examples={['01/10/2026']}
          column={sheet.columns[0]}
        />
      </TranslationProvider>
    );

    expect(getByText(/The day of the event/).textContent).toBe(description);
  });
});
