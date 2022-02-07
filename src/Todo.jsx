
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

function Task({ task, completeTask, removeTask }) {
  const checkMark = task.completed ? "m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" : "";

  return (
    <li className="todo-listItem" key={task.key}>
      <svg
        className="todo-listImage"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => completeTask(task)}
      >
        <circle cx="12" cy="12" r="11" />
        <path d={checkMark} fill="none" />
      </svg>
      <div className="todo-listItemInner">
        <p
          className={task.completed ? "todo-listText text-[#d1d5db]" : "todo-listText"}
          style={{textDecoration: task.completed ? "line-through" : ""}}
          onClick={() => completeTask(task)}
        >
          {task.title}
        </p>
        <button
          className="hover:bg-blue-400 group todo-listItemRemove"
          onClick={() => removeTask(task.key)}
        >
          Remove
        </button>
      </div>
    </li>
  );
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
    <div className="submit">
      <form
        className="submit-form"
        onSubmit={handleSubmit}
      >
        <input
          className="submit-formInput"
          type="text"
          value={value}
          aria-label="Add Items to your list"
          placeholder="Add Items to your list..."
          onChange={e => setValue(e.target.value)}
        />

        <button className="hover:bg-blue-400 group submit-button">
          <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          Add Item
        </button>
      </form>
    </div>
  );
}

function Todo() {
  // Add Place holder item
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

  const removeTask = key => {
    const newTasks = tasks.filter((task) => {
      return task.key !== key;
    });

    setTasks(newTasks);
  }

  const completeTask = key => {
    const updatedTasks = [...tasks];

    key.completed = !key.completed
    setTasks(updatedTasks);
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
            {tasks.map((task, index) => (
              <Task
                task={task}
                index={index}
                key={task.key}
                removeTask={removeTask}
                completeTask={completeTask}
              />
            ))}
          </ul>
        </div>

        <CreateTask addTask={addTask} />
      </div>
    </div>
  )
}

export default Todo
