import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render Hello World', () => {
    const { getByRole } = render(<App />);

    const h1Element = getByRole('heading');

    expect(h1Element.tagName).toBe('H1');
    expect(h1Element.innerHTML).toBe('Hello World');
  });
});
