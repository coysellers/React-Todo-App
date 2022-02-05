
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

function Task({ task }) {
  const isComplete = task.completed ? 'line-through' : '';

  return (
    <li
      style={{ textDecoration: isComplete }}
    >
      {task.title}
    </li>
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

  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        placeholder='Add a new task'
        onChange={handleChange}
      />
      <button type='submit' value='Submit'>Add Task</button>
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
    <div class="todo">
      <img
        src="https://play.tailwindcss.com/img/beams.jpg"
        alt=""
        class="todo-backgroundImage"
        width="1308"
      />

      <div class="todo-listPosition">
        <div class="todo-listContainer">
          <h1>Todo List</h1>
          <ul class="todo-list">
            <li class="todo-listItem">
              <svg class="todo-listImage" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="todo-listText">Customizing your example file</p>
            </li>
          </ul>
        </div>

        <div class="submit">
          <form class="submit-form">
            <input
              class="submit-formInput"
              type="text"
              aria-label="Add Items to your list"
              placeholder="Add Items to your list..." />
          </form>
          <div class="submit-buttonContainer">
            <button class="hover:bg-blue-400 group submit-button">
              <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
