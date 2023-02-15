import React, { useState,useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { tasks as data } from "./tasks";


function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  },[])   


  function createTask(task){
    setTasks([...tasks,{
    title: task.title,
    id: tasks.length,
    description: task.description
    }])
  }

  return (
    <div><TaskForm createTask={createTask} /><TaskList tasks={tasks}/></div>
  )
}

export default App