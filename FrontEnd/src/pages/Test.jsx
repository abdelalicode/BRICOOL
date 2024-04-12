import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {

        const task = {
            id : todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
            taskName: newTask 
        }

        setTodoList([...todoList, task]);
    };

    const [name, setName] = useState("")
    const [data, setdata] = useState("")
    const fetchData = () => {


        axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setdata(res.data);
        })
    }

    const handleInput = (event) => {
        setName(event.target.value);
    }


    const deleteTask = (id) => {
         

        setTodoList(todoList.filter((task)=> task.id !== id));
    };
    return (
        <div className="m-12">
            <div className="addTask">
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}>ADD TASK</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return (
                        <div className="flex gap-3">
                            <h1>{task.taskName}</h1>
                            <button onClick={() => deleteTask(task.id)} style={{ color : "red "}}>DELETE</button>
                        </div>
                    );
                })}
            </div>
            <div>
                <input type="text" onChange={handleInput}/>
                <button onClick={fetchData}>GO</button>
                <br /><br /><br />
                {data.age}
                
            </div>
        </div>
    );
}
