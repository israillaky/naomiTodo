import React from "react";
import TodoList from "./TodoList";

const TodoItem = ({
  todos,
  showCompleted,
  toggleEditTodo,
  editTodo,
  handleOnchangeTitle,
  handleDeleteTodo,
  toggleSaveTodo,
  handleCompleted,
}) => {
  return (
    <ul id="todo-list" className="space-y-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-700 text-2xl">No todos yet.</p>
      ) : (
        todos
          .filter((todo) => (showCompleted ? todo.completed : !todo.completed))
          .map((todo) => (
            <TodoList
              {...todo}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              toggleEditTodo={toggleEditTodo}
              editTodo={editTodo}
              handleOnchangeTitle={handleOnchangeTitle}
              handleDeleteTodo={handleDeleteTodo}
              toggleSaveTodo={toggleSaveTodo}
              handleCompleted={handleCompleted}
            />
          ))
      )}
    </ul>
  );
};

export default TodoItem;
