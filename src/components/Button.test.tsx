// @vitest-environment happy-dom
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/preact';
import Button from './Button';

afterEach(() => cleanup());

describe('Button', () => {
  it('is a real button, so the keyboard can reach and press it', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick}>Upload</Button>);

    const button = getByRole('button', { name: 'Upload' });
    expect(button.tagName).toBe('BUTTON');
    // Not "submit": the importer may be rendered inside a host page's form.
    expect(button.getAttribute('type')).toBe('button');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled for the keyboard and assistive technology too', () => {
    const onClick = vi.fn();
    const { getByRole } = render(
      <Button onClick={onClick} disabled>
        Upload
      </Button>
    );

    const button = getByRole('button', { name: 'Upload' }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);

    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
