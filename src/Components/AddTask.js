import React, { useContext, useState } from "react";
import { TasksContext } from "./TasksContext";
import "./addtask.css";
import ErrorMessage from "./ErrorMessage";
function AddTask() {
  const [newTask, setNewTask] = useState("");
  const [date, setDate] = useState("");
  const [showError, setShowError] = useState(false);
  const { tasks, setTasks } = useContext(TasksContext);
  const handleClick = () => {
    if (date === "" || newTask === "") {
      setShowError(true);
      return;
    }
    const d = new Date();
    const id = d.getTime();
    setTasks([...tasks, { id, title: newTask, date }]);
    addTaskToServer({ id, title: newTask, date });
    setNewTask("");
  };
  const addTaskToServer = async (data) => {
    fetch("http://127.0.0.1:5000/add", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "cors",
    });
  };
  return (
    <div className="addtask_container">
      {showError && <ErrorMessage setShowError={setShowError} />}
      <div>
        <input
          type="text"
          className="new_task"
          placeholder="Type your new task here"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </div>
      <div>
        <label for="birthday">Date:</label>
        <input
          type="date"
          className="task-date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>
        <button className="add_button" onClick={handleClick}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
