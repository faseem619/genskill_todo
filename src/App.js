import "./App.css";
import AddTask from "./Components/AddTask";
import TodoSheet from "./Components/TodoSheet";
import { TasksContextProvider } from "./Components/TasksContext";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <TasksContextProvider>
      <div className="App">
        <Navbar />
        <div className="container">
          <AddTask />
          <TodoSheet />
        </div>
      </div>
    </TasksContextProvider>
  );
}

export default App;
