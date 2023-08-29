import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('Task Counts, Tasks list and Clear Button', () => {
  it('should render an input type text and Add button', () =>{
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

    act(() => {
      button.click();
    })

    // This gets the ul by its aria-label
    const list = screen.getByRole("list", {
      name: /tasks/i,
    })
    // This gets all li within the ul
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    expect(input.value).toBe('');
    expect(items.length).toBe(1);
  })
})