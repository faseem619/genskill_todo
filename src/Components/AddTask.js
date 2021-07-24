import React, { useContext, useState } from 'react'
import {TasksContext} from './TasksContext'
import './addtask.css'
function AddTask() {
    const [newTask,setNewTask] =useState('');
    const {tasks,setTasks}= useContext(TasksContext);
    const handleClick =() => {
        // const tasks =document.querySelector('.text');
        // tasks.innerHTML+= `${newTask} <FaTrashAlt/> <br>`;
        setTasks([...tasks,newTask]);
        setNewTask('');

    }
    return (
        <div className="addtask_container">
           <input type="text" className="new_task" 
            placeholder="Type your new task here" 
            value={newTask} 
            onChange={(event)=>setNewTask(event.target.value)}
            />
           <button className="add_button"  onClick={handleClick}> Add Task </button> 
        </div>
    )
}

export default AddTask
