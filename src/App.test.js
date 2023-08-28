import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "TDD To Do List" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/TDD To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a Container component', () => {
  render(<App />);
  const container = screen.getByTestId("container");
  expect(container).toBeInTheDocument();
})