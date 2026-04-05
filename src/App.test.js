import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main study dashboard heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /plan your day with a calm, simple routine/i,
    })
  ).toBeInTheDocument();
});
