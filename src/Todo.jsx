
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

function CreateTask({ addTask }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        placeholder='Add a new task'
        onChange={e => setValue(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  )
}

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Completed Example",
      completed: true
    },
    {
      title: "Incompleted Example",
      completed: false
    }
  ]);

  const addTask = title => {
    const newTasks = [
      ...tasks,
      {
        title,
        completed: false
      }
    ];

    setTasks(newTasks);
  }

  return (
    <div>
      <div>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
          />
        ))}
      </div>

      <div>
        <CreateTask addTask={addTask} />
      </div>
    </div>
  )
}

export default Todo
