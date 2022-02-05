
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
    <div class="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none" width="1308" />
      <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div class="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
        <div class="max-w-md mx-auto">
          <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />
          <div class="divide-y divide-gray-300/50">
            <div class="py-8 text-base leading-7 space-y-6 text-gray-600">
              <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Customizing your
                    <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Extracting classes with
                    <code class="text-sm font-bold text-gray-900">@apply</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">Code completion with instant preview</p>
                </li>
              </ul>
              <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
            </div>
            <div class="pt-8 text-base leading-7 font-semibold">
              <p class="text-gray-900">Want to dig deeper into Tailwind?</p>
              <p>
                <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
