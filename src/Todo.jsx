
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

function Task({ task }) {
  return (
    <div
      style={{ textDecoration: task.completed ? 'line-through' : '' }}
    >
      {task.title}
    </div>
  )

}

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    }
  ]);

  return (
    <div>
      <div>
        Todo
      </div>
      <div>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Todo
