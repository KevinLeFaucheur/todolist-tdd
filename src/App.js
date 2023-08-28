import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <div className="App">
      <p>TDD To Do List</p>
      <Container data-testid="container" />
    </div>
  );
}

export default App;
