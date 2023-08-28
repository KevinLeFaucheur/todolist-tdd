import './App.css';
import { styled } from 'styled-components';

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

const App = () => {
  return (
    <div className="App">
      <Container data-testid="container">
        <h2>TDD To Do List</h2>
        <Text data-testid="container__input"/>
        <Button data-testid="container__button">Add</Button>

      </Container>
    </div>
  );
}

export default App;
