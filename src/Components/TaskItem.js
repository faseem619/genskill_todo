import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import { TasksContext } from "./TasksContext";

function TaskItem({ task }) {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleComplete = (event, id) => {
    const thisTask = document.getElementById(id);
    thisTask.style.textDecoration = "line-through";
  };

  const handleDelete = (event, id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    deleteTaskInServer(id);
  };
  const deleteTaskInServer = async (id) => {
    fetch("http://127.0.0.1:5000/delete", {
      method: "PUT", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
      mode: "cors",
    });
  };

  return (
    <div className="single_task" id={task.id} key={task.id}>
      <p>
        {task.date}: {task.title}
      </p>
      <span>
        <FaCheck
          className="check-icon"
          onClick={(event) => handleComplete(event, task.id)}
        />
        <FaTrashAlt
          className="delete-icon"
          onClick={(event) => handleDelete(event, task.id)}
        />
      </span>
    </div>
  );
}

export default TaskItem;
