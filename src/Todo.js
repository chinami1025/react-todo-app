import React from "react";
import "../src/styles/todo.css";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className="todo-contents">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
        <p>{todo.name}</p>
      </label>
    </div>
  );
};

export default Todo;
