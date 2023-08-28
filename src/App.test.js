import React from 'react';
import { render, screen } from '@testing-library/react';
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
  it('should clear input when clicking Add', () => {  
    render(<App />);

    const input = screen.getByTestId("container__input");
    input.value = 'test';
    const button = screen.getByTestId("container__add");
    act(() => {
      button.click();
    })
    expect(input.value).toBe('');
  })
})