import React,{ createContext, useState } from "react";

const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {

    const [tasks,setTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>

  );

};


export { TasksContext, TasksContextProvider };