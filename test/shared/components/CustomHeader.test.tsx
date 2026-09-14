import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from '../../../src/shared/components/CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test Title';   
  test('should render the title correctly', () => {
    // const { container } = render(<CustomHeader title={title} />);
    render(<CustomHeader title={title} />);

    // screen.debug()
    // const h1 = container.querySelector('h1');
    const h1 = screen.getByRole('heading', {
      level: 1
    });
    expect(h1?.innerHTML).toContain(title);
    // expect(screen.getByText(title)).toBeDefined()
  });

  test('should render the description when provided', () => {
    const description = 'Description';
    const { container } = render(<CustomHeader title={title} description={description} />);
    const p = container.querySelector('p');
    expect(p?.innerHTML).toBe(description);
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
  });

  test('should not render descripcion when not provided', () => {
    const { container } = render(<CustomHeader title={title} />);
    const p = container.querySelector('p');
    expect(p).toBe(null);
  });
});
