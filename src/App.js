import './App.css';
import AddTask from './Components/AddTask';
import TodoSheet from './Components/TodoSheet';
import {TasksContextProvider} from './Components/TasksContext'

function App() {
  return (
    <TasksContextProvider>
      <div className="App">
        <AddTask/>
        <TodoSheet/>
      </div>
    </TasksContextProvider>
  );
}

export default App;
