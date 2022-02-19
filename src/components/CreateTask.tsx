import React, { useState } from 'react'

export default function CreateTask({ addTask }) {
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