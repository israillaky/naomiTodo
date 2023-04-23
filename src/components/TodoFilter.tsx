import React, { useState } from "react";

const TodoFilter = ({ showCompleted, toggleShowCompleted }) => {
  return (
    <div className="flex items-center mt-4">
      <label htmlFor="show-completed" className="text-gray-700">
        <input
          id="show-completed"
          type="checkbox"
          className="form-checkbox mr-2"
          checked={showCompleted}
          onChange={() => toggleShowCompleted()}
        />
        {showCompleted ? "Uncheck to hide Completed" : " Show Completed"}
      </label>
    </div>
  );
};

export default TodoFilter;
