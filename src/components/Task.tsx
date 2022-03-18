import React from "react"

// interface Task {
//   title: string;
//   completed: boolean;
//   key: string;
// }
// interface TaskProps {
//   title: string;
//   completed: boolean;
//   itemId: string;
//   completeTask: (task: Task) => void;
//   removeTask: (key: string) => void;
// }

export const Task = ({ completed, completeTask, itemId, removeTask, title}) => {
  const checkMark = completed
    ? "m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
    : "";

  return (
    <li className="todo-listItem" key={itemId} data-item-key={itemId}>
      <svg
        className="todo-listImage"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => completeTask(itemId)}
      >
        <circle cx="12" cy="12" r="11" />
        <path d={checkMark} fill="none" />
      </svg>
      <div className="todo-listItemInner">
        <p
          className={`todo-listText ${completed ? "text-[#d1d5db]" : ""}`}
          style={{textDecoration: completed ? "line-through" : ""}}
          onClick={() => completeTask(itemId)}
        >
          {title}
        </p>
        <button
          className="hover:bg-blue-400 group todo-listItemRemove"
          onClick={() => removeTask(itemId)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
