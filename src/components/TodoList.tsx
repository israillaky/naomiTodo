import React from "react";
import Button from "./Button";

const TodoList = ({
  id,
  title,
  completed,
  toggleEditTodo,
  editTodo,
  handleOnchangeTitle,
  handleDeleteTodo,
  toggleSaveTodo,
  handleCompleted,
}) => {
  return (
    <li
      key={id}
      className="bg-white shadow-md rounded-lg p-4 animate__animated animate__fadeIn"
    >
      <div className="flex justify-between items-center">
        {editTodo === id ? (
          <input
            type="text"
            value={title}
            onChange={(e) => handleOnchangeTitle(id, e.target.value, e)}
            className="w-full px-4 py-2 border border-gray-300 rounded mr-2"
            title={title}
          />
        ) : (
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox mr-2"
              checked={completed}
              onChange={() => handleCompleted(id)}
            />
            <span
              className={`text-xl font-semibold ${
                completed ? "text-gray-500" : "text-gray-700"
              }  `}
            >
              {completed ? <del> {title} </del> : title}
            </span>
          </label>
        )}

        <div>
          {!completed &&
            (editTodo === id ? (
              <Button
                className="edit-button text-blue-500 hover:text-blue-700 mr-2"
                onClick={toggleSaveTodo}
                label="Save"
                id=""
              />
            ) : (
              <Button
                className="edit-button text-blue-500 hover:text-blue-700 mr-2"
                onClick={toggleEditTodo}
                label="Edit"
                id={id}
              />
            ))}
          <Button
            className="delete-button text-red-500 hover:text-red-700"
            onClick={handleDeleteTodo}
            label="Delete"
            id={id}
          />
        </div>
      </div>
    </li>
  );
};

export default TodoList;
