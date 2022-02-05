
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

function Task({ task }) {
  return (
    <li
      className="todo-listItem"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      <svg className="todo-listImage" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" />
        <path d={task.completed ? "m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" : "" } fill="none" />
      </svg>
      <p className="todo-listText">
        {task.title}
      </p>
    </li>
  );
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
    <div className="todo">
      <img
        src="https://play.tailwindcss.com/img/beams.jpg"
        alt=""
        className="todo-backgroundImage"
        width="1308"
      />

      <div className="todo-listPosition">
        <div className="todo-listContainer">
          <h1>Todo List</h1>
          <ul className="todo-list">
            {tasks.map((task, index) => (
              <Task
                task={task}
                index={index}
                key={index}
              />
            ))}
          </ul>
        </div>

        <div className="submit">
          <form className="submit-form">
            <input
              className="submit-formInput"
              type="text"
              aria-label="Add Items to your list"
              placeholder="Add Items to your list..." />
          </form>
          <div className="submit-buttonContainer">
            <button className="hover:bg-blue-400 group submit-button">
              <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
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
