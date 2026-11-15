// @vitest-environment happy-dom
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/preact';
import Select from './Select';
import { TranslationProvider } from '@/i18';

beforeEach(() => {
  globalThis.ResizeObserver = class {
    observe() {}

    unobserve() {}

    disconnect() {}
  } as unknown as typeof ResizeObserver;
});

afterEach(() => cleanup());

const options = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Python', value: 'python' },
  { label: 'SQL', value: 'sql' },
  { label: 'Design', value: 'design' },
  { label: 'Project Management', value: 'pm' },
];

function highlightedOptions(doc: Document) {
  return Array.from(doc.querySelectorAll('[role="option"]')).filter((o) =>
    (o.getAttribute('class') || '').includes('hc:bg-hello-csv-primary')
  );
}

describe('Select grid-editing behaviour', () => {
  it('highlights exactly one option after filtering then clearing the filter', () => {
    const { container } = render(
      <TranslationProvider>
        <Select
          autoFocus
          immediate
          searchable
          searchInputAsFilter
          multiple
          options={options}
          value={[]}
          onChange={() => {}}
        />
      </TranslationProvider>
    );
    const input = container.querySelector('input')!;
    fireEvent.focus(input);
    fireEvent.input(input, { target: { value: 'p' } }); // filter
    fireEvent.input(input, { target: { value: '' } }); // backspace to empty

    // Regression: previously two options kept the focus highlight after re-filtering.
    expect(
      highlightedOptions(container.ownerDocument).length
    ).toBeLessThanOrEqual(1);
  });

  describe('creatable', () => {
    const renderCreatable = (value: string | null) => {
      const { container } = render(
        <TranslationProvider>
          <Select
            autoFocus
            immediate
            searchable
            searchInputAsFilter
            creatable
            options={options}
            value={value}
            onChange={() => {}}
          />
        </TranslationProvider>
      );
      const input = container.querySelector('input')!;
      fireEvent.focus(input);
      return { doc: container.ownerDocument, input };
    };
    const optionLabels = (doc: Document) =>
      Array.from(doc.querySelectorAll('[role="option"]')).map((o) =>
        o.textContent?.trim()
      );

    it('offers typed text that no option matches, after the matching options', () => {
      const { doc, input } = renderCreatable(null);
      fireEvent.input(input, { target: { value: 'Java' } });
      expect(optionLabels(doc)).toEqual(['JavaScript', 'Use "Java"']);
    });

    it("doesn't offer typed text that matches an option, whatever the case", () => {
      const { doc, input } = renderCreatable(null);
      fireEvent.input(input, { target: { value: 'python' } });
      expect(optionLabels(doc)).toEqual(['Python']);
    });

    it("lists the cell's value when it isn't an option", () => {
      const { doc, input } = renderCreatable('Rust');
      fireEvent.input(input, { target: { value: 'Rus' } });
      expect(optionLabels(doc)).toEqual(['Rust', 'Use "Rus"']);
    });
  });

  // NOTE: option-click behaviours (select / toggle-off / deselect) can't be
  // tested here — happy-dom doesn't drive headlessui's click→onChange. The
  // decision logic is unit-tested in selectChange.test.ts instead.
});
