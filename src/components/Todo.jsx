import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("TODOS");
    if (savedTodos == null) return [];
    return JSON.parse(savedTodos);
  });

  const [showCompleted, setShowCompleted] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  // Save todos to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const addTodos = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        },
      ];
    });
  };

  const handleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const toggleEditTodo = (id) => {
    if (id !== editTodo) {
      setEditTodo(id);
    } else {
      setEditTodo(null);
    }
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const handleOnchangeTitle = (id, newtitle, e) => {
    e.preventDefault();
    const updatTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newtitle };
      }
      return todo;
    });

    setTodos(updatTodo);
  };
  const toggleSaveTodo = () => {
    setEditTodo(null);
  };

  const handleDeleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">
          To-Do List
        </h1>
      </header>
      <section>
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <TodoForm onSubmit={addTodos} />
          <TodoFilter
            showCompleted={showCompleted}
            toggleShowCompleted={toggleShowCompleted}
          />
        </div>
        <TodoItem
          todos={todos}
          showCompleted={showCompleted}
          toggleEditTodo={toggleEditTodo}
          editTodo={editTodo}
          handleOnchangeTitle={handleOnchangeTitle}
          handleDeleteTodo={handleDeleteTodo}
          toggleSaveTodo={toggleSaveTodo}
          handleCompleted={handleCompleted}
        />
      </section>
    </div>
  );
};

export default Todo;
