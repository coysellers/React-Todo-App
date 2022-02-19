import React from "react"

export default function Task({ task, completeTask, removeTask }) {
  const checkMark = task.completed
    ? "m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
    : "";

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
          className={task.completed
            ? "todo-listText text-[#d1d5db]"
            : "todo-listText"
          }
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