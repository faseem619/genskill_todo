import "./App.css";
import AddTask from "./Components/AddTask";
import TodoSheet from "./Components/TodoSheet";
import { TasksContextProvider } from "./Components/TasksContext";
import axios from "axios";
import { useEffect } from "react";
function App() {
  return (
    <TasksContextProvider>
      <div className="App">
        <AddTask />
        <TodoSheet />
      </div>
    </TasksContextProvider>
  );
}

export default App;
