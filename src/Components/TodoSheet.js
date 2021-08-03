import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import { TasksContext } from "./TasksContext";
import "./CSS/todosheet.css";
function TodoSheet() {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="sheet">
      <div className="text">
        <span style={{ marginLeft: "36%" }}> TODO LIST </span> <br></br>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TodoSheet;
