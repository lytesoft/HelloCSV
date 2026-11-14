// @vitest-environment happy-dom
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/preact';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Alert from './Alert';
import Tabs from './Tabs';
import { TranslationProvider } from '@/i18';

afterEach(() => cleanup());

// The class names documented in customization/theme-styles.mdx, for host apps'
// own styles. Renaming one breaks those apps, so keep them.
describe('stable class names', () => {
  it('mark buttons and their variant', () => {
    const { getByText } = render(
      <>
        <Button>Upload</Button>
        <Button variant="secondary">Back</Button>
      </>
    );

    expect(getByText('Upload').classList).toContain('hello-csv-button');
    expect(getByText('Upload').classList).toContain('hello-csv-button-primary');
    expect(getByText('Back').classList).toContain('hello-csv-button-secondary');
  });

  it('mark the button group and its active item', () => {
    const { getByText } = render(
      <ButtonGroup
        activeButton="all"
        buttons={[
          { value: 'all', label: 'All', onClick: () => {}, variant: 'default' },
          { value: 'bad', label: 'Bad', onClick: () => {}, variant: 'danger' },
        ]}
      />
    );

    expect(getByText('All').parentElement!.classList).toContain(
      'hello-csv-button-group'
    );
    expect(getByText('All').classList).toContain(
      'hello-csv-button-group-item-active'
    );
    expect(getByText('Bad').classList).toContain('hello-csv-button-group-item');
    expect(getByText('Bad').classList).not.toContain(
      'hello-csv-button-group-item-active'
    );
  });

  it('mark alerts and their variant', () => {
    const { container } = render(<Alert variant="warning" description="!" />);

    expect(container.firstElementChild!.classList).toContain('hello-csv-alert');
    expect(container.firstElementChild!.classList).toContain(
      'hello-csv-alert-warning'
    );
  });

  it('mark tabs and the active one', () => {
    const { getAllByRole } = render(
      <TranslationProvider>
        <Tabs
          tabs={[
            { label: 'People', value: 'people' },
            { label: 'Places', value: 'places' },
          ]}
          activeTab="places"
          onTabChange={() => {}}
        />
      </TranslationProvider>
    );

    const [people, places] = getAllByRole('tab');
    expect(people.classList).toContain('hello-csv-tab');
    expect(people.classList).not.toContain('hello-csv-tab-active');
    expect(places.classList).toContain('hello-csv-tab-active');
  });
});
