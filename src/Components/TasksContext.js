import React, { createContext, useEffect, useState } from "react";

const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getCurrentTasks();
    // setTasks(currenTasks);
  }, []);

  const getCurrentTasks = async () => {
    const response = await fetch("http://127.0.0.1:5000/", { mode: "cors" });
    const data = await response.json();
    console.log(data);
    setTasks(data);
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };
