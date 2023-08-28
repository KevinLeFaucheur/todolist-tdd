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
    const button = screen.getByTestId("container__add");
    expect(button).toHaveTextContent(/Add/i);
  })
})

describe('Task Counts, Tasks list and Clear Button', () => {
  it('should render an input type text and Add button', () =>{
    render(<App />);

    const span = screen.getAllByTestId("container__count");
    expect(span).toHaveLength(3);

    const list = screen.getByTestId("container__list");
    expect(list).toBeInTheDocument();

    const button = screen.getByTestId("container__clear");
    expect(button).toHaveTextContent(/Clear/i);

  })
})