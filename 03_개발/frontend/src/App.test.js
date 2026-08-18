import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PSA-DOCS text', () => {
  render(<App />);
  const textElement = screen.getByText(/PSA-DOCS/i);
  expect(textElement).toBeInTheDocument();
});
