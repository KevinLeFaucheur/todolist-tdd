import './App.css';
import { styled } from 'styled-components';

const App = () => {
  return (
    <div className="App">
      <Container data-testid="container">

        <h2>TDD To Do List</h2>
        <Text data-testid="container__input"/>
        <Button data-testid="container__add">Add</Button>

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
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
`

const TaskCount = styled.span`
  margin: 10px;
`

const Tasks = styled.div`
`

export default App;
