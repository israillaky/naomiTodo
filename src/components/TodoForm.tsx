import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          id="todo-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded mr-2"
          placeholder="Add a new task..."
        />
        <button
          id="add-task-button"
          className="w-[8%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
