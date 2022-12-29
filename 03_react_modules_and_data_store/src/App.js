import './App.css';
import Calculation from './component/Calculation/Calculation';
import TodoList from './component/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <Calculation></Calculation>
    </div>
  );
}

export default App;
