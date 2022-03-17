
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from "./components/Task"
import { CreateTask } from "./components/CreateTask"
import './index.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    const data = JSON.parse(savedTasks);

    return savedTasks ? data : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = title => {
    const newTasks = [
      ...tasks,
      {
        title,
        completed: false,
        key: uuidv4()
      }
    ];

    setTasks(newTasks);
  }

  const completeTask = ({ key }) => {
    const updatedTasks = tasks.map((task) => ({ ...task }));
    const completedTask = updatedTasks.find((task) => task.key === key);

    completedTask.completed = !completedTask.completed;
  
    setTasks([...updatedTasks]);
  };

  const removeTask = ({ key }) => {
    const updatedTasks = tasks.map((task) => ({ ...task }));
    const completedTask = updatedTasks.filter((task) => task.key !== key);

    setTasks([...completedTask]);
  }

  return (
    <div className="todo">
      <img
        src="https://play.tailwindcss.com/img/beams.jpg"
        alt=""
        className="todo-backgroundImage"
        width="1308"
      />

      <div className="todo-listPosition">
        <div className="todo-listContainer">
          <h1 className="todo-headingPrimary">Todo List</h1>
          <ul className="todo-list">
            {tasks.map((task) => (
              <Task
                task={task}
                key={task.key}
                completeTask={completeTask}
                removeTask={removeTask}
              />
            ))}
          </ul>
        </div>

        <CreateTask addTask={addTask} />
      </div>
    </div>
  )
}

export default App
