import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main study dashboard heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /make school projects feel organized, focused, and finished/i,
    })
  ).toBeInTheDocument();
});
