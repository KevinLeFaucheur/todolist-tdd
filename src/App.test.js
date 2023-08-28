import { render, screen } from '@testing-library/react';
import App from './App';

it('should render "TDD To Do List" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/TDD To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

it('should render a Container component', () => {
  render(<App />);
  const container = screen.getByTestId("container");
  expect(container).toBeInTheDocument();
})

describe('Input and Button', () => {
  it('should render an input type text and Add button', () =>{
    render(<App />);
    const input = screen.getByTestId("container__input");
    expect(input).toBeInTheDocument();
    const button = screen.getByTestId("container__button");
    expect(button).toHaveTextContent(/Add/i);
  })
})
