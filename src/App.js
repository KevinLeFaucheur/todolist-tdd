import { useState } from 'react';
import './App.css';
import { styled } from 'styled-components';

const App = () => {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const [completeCount, setCompleteCount] = useState(0);

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

  const handleComplete = (id) => {
    const list = todoList.map(task => {
      if(task.id === id) {
        if(task.complete !== true) setCompleteCount(completeCount + 1);
        else setCompleteCount(completeCount - 1);
        return {
          ...task,
          complete: !task.complete
        }
      } else return task;
    })
    setTodoList(list);
  }

  return (
    <div className="App">
      <Container data-testid="container">

        <h2>TDD To Do List</h2>
        <Text data-testid="container__input" value={input} onInput={e => setInput(e.target.value)}/>
        <Button data-testid="container__add" onClick={handleClickAdd}>Add</Button>

        <Tasks data-testid="container__counts">
          <TaskCount data-testid="container__count"><b>Added: </b></TaskCount>
          <TaskCount data-testid="container__count"><b>Started: </b></TaskCount>
          <TaskCount data-testid="container__count"><b>Completed: </b>{completeCount}</TaskCount>
        </Tasks>

        <TaskList data-testid="container__list" aria-label='tasks'>
          {todoList.map((task) => 
            <TaskItem 
              id={task.id}
              key={task.id}
              $complete={task.complete}
              onClick={() => handleComplete(task.id)}
            >
            {task.task}
            </TaskItem>
          )}

        </TaskList>

        <Button data-testid="container__clear">Clear</Button>

      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 33%;
  margin: 0 auto;
`

const Text = styled.input`
  border: 2px solid #000;
`

const Button = styled.button`
  cursor: pointer;
  display:inline-block;
  flex: 1;
  border: none;
  background-color: #FFB5A7;
  color: black;
  border-radius: 5px;
  padding: 8px 20px;
`

const TaskCount = styled.span`
  margin: 10px;
`

const Tasks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const TaskList = styled.ul`
  width: 100%;
  padding: 0;
`

const TaskItem = styled.li` 
  cursor: pointer;
  list-style: none;
  text-decoration: ${({ $complete }) => $complete ? 'line-through' : ''};
  width: 50px;
  margin-left: ${({ $complete }) => $complete ? '80%' : ''};
  padding: 8px 10px;
  background-color: #FCD5CE;
  border-radius: 10px;
`

export default App;
