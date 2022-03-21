import React from "react";

interface Task {
  title: string;
  completed: boolean;
  id: string;
}

interface TaskProps extends Task {
  completeTask: (id: string) => void;
  removeTask: (id: string) => void;
}

const Task = ({
  completed,
  completeTask,
  id,
  removeTask,
  title,
}: TaskProps): JSX.Element => {
  const checkMark = completed
    ? "m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
    : "";

  return (
    <li className="todo-listItem">
      <svg
        className="todo-listImage"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => completeTask(id)}
      >
        <circle cx="12" cy="12" r="11" />
        <path d={checkMark} fill="none" />
      </svg>
      <div className="todo-listItemInner">
        <p
          className={`todo-listText ${completed ? "text-[#d1d5db]" : ""}`}
          style={{ textDecoration: completed ? "line-through" : "" }}
          onClick={() => completeTask(id)}
        >
          {title}
        </p>
        <button
          className="hover:bg-blue-400 group todo-listItemRemove"
          onClick={() => removeTask(id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Task;
