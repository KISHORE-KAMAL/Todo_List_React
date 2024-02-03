import React from 'react'
import { useState } from 'react'
import "./TodoApp.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoApp() {
    let [task, setTask] = useState("")
    let [tasks, setTasks] = useState([])
    let changeTask = ({target:{value}})=>
    {
        setTask(value)
    }
    let addTask = ()=>
    {
        setTasks([...tasks,task])
        {task && toast.success("Successfully added",{position:"bottom-right"})}

        setTask("")
        {task || toast.warning("Invalid input, check again",{position:"bottom-right"})}

        // if(task==="")
        // {
            // alert("You are adding an empty value...! Please enter something")
        // }
    }
    // let deleteTask = (index)=>
    // {
    //     let remainingTasks = tasks.filter((ele,ind)=>
    //     {
    //         return index!==ind
    //     })
    //     setTasks(remainingTasks)
    // }
    // ! OR
    let deleteT = (e)=>
    {
        e.target.parentElement.remove()
        toast.error("Successfully deleted",{position:"bottom-right"})
    }
    let checked = (e)=>
    {
        if(e.target.className === "checked")
        {
            e.target.className = ""
        }
        else
        {
            e.target.className = "checked"
        }
    }
    
  return (
    <>
        <div className="container">
            <div className="todo-app">
                <h2>To-Do List</h2>
                <div className="row">
                    <input type="text" id="input-box" placeholder="Add your text" onChange={changeTask} value={task} />
                    <button onClick={addTask}>Add</button>
                </div>
                <ul id="list-container">
                    {tasks.map((ele,ind)=>
                    {
                        return (
                            <div key={ind}>
                                {ele && <li onClick={checked} >{ele}
                             {/* <span onClick={()=>
                                    {
                                        deleteTask(ind)
                                    }}>&#10060;</span> */}
                             <span onClick={deleteT}>&#10060;</span>
                            </li>}
                            </div>         
                        )
                    })}
                </ul>
            </div>
            <div id="toastBox">
                {/* <div className="toast">
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Successfully added
                </div>
                <div className="toast error">
                    <i class="fa fa-times-circle" aria-hidden="true"></i> Successfully deleted
                </div>
                <div className="toast invalid">
                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Invalid input, check again
                </div> */}
            </div>
        </div>
        <ToastContainer/>

        {/* To use react toastify notification steps
        1. install npm i react-toastify
        2. import both css and react toastify
        3. add <ToastContainer/> at the last of the parent element in JSX
        4. create onclick function and put toast("your message") inside function */}
    </>
  )
}
