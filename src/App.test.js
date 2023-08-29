import React from 'react';
import { fireEvent, getByRole, getByText, render, screen, within } from '@testing-library/react';
import App from './App';

describe('To Do List', () => {
  it('should render an Add and Clear buttons, 3 counts, am empty list', () =>{
    render(<App />);

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();

    const input = screen.getByTestId("container__input");
    expect(input).toBeInTheDocument();

    const add = screen.getByTestId("container__add");
    expect(add).toHaveTextContent(/Add/i);

    const span = screen.getAllByTestId("container__count");
    expect(span).toHaveLength(3);

    const list = screen.getByTestId("container__list");
    expect(list).toBeInTheDocument();

    const clear = screen.getByTestId("container__clear");
    expect(clear).toHaveTextContent(/Clear/i);
  })
})

describe('Adding a task', () => {
  test('Add button should clear input and add "my first task" as li', () => {  
    render(<App />);

    const input = screen.getByTestId("container__input");
    input.value = 'my first task';
    const button = screen.getByTestId("container__add");
    fireEvent.click(button);

    // This gets the ul by its aria-label
    const list = screen.getByRole("list", {
      name: /tasks/i,
    })
    // This gets all li within the ul
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(input.value).toBe('');
    expect(items.length).toBe(1);
  })
})