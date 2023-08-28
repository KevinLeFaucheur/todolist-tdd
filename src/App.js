import { useState } from 'react';
import './App.css';
import { styled } from 'styled-components';

const App = () => {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleClickAdd = () =>{
    const id = todoList.length + 1;
    setTodoList(tasks => [
      ...tasks,
      {
        id,
        task: input,
        completed: false
      }
    ])
    setInput('');
  }

  return (
    <div className="App">
      <Container data-testid="container">

        <h2>TDD To Do List</h2>
        <Text data-testid="container__input" value={input} onInput={e => setInput(e.target.value)}/>
        <Button data-testid="container__add" onClick={handleClickAdd}>Add</Button>

        <Tasks data-testid="container__counts">
          <TaskCount data-testid="container__count"><b>Added</b></TaskCount>
          <TaskCount data-testid="container__count"><b>Started</b></TaskCount>
          <TaskCount data-testid="container__count"><b>Completed</b></TaskCount>
        </Tasks>

        <ul data-testid="container__list">

        </ul>

        <Button data-testid="container__clear">Clear</Button>

      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Text = styled.input`
  border: 2px solid #000;
`

const Button = styled.button`
  cursor: pointer;
  display:inline-block;
  flex: 1;
  border: none;
  background-color: #a1a1a1;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
`

const TaskCount = styled.span`
  margin: 10px;
`

const Tasks = styled.div`
`

export default App;
