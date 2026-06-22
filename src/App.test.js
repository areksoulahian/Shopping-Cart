import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders products heading', () => {
  render(<App />);
  const heading = screen.getByText(/products/i);
  expect(heading).toBeInTheDocument();
});
