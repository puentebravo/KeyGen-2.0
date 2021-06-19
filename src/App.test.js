import { render, screen } from '@testing-library/react';
import App from './App';

test('renders basic page components', () => {
  render(<App />);
  const gBtn = screen.getByText(/Generate/i);
  expect(gBtn).toBeInTheDocument();
  const header = screen.getByText(/Securepass/i)
  expect(header).toBeInTheDocument();
});
