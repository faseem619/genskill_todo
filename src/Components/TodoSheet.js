import React,{useContext} from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import {TasksContext} from './TasksContext'
import './todosheet.css'
function TodoSheet() {
    const {tasks,setTasks}= useContext(TasksContext);
    return (
        <div className="sheet">
            <div className='text'>
                <span style={{marginLeft: "36%"}} > TODO LIST   </span> <br></br>
                {tasks.map((task)=>( <p> {task} <FaCheck/>  <FaTrashAlt /></p>))}
            </div>
        </div>
    )
}

export default TodoSheet
