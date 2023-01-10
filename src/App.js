import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]); // useState→変数を監視する役割

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する。
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div className="contents">
      <div className="addTodoArea">
        <input
          type="text"
          ref={todoNameRef}
          placeholder={"タスク名を入力してください"}
          className="input"
        />
        <div>
          <button onClick={handleAddTodo}>タスクを追加</button>
          <button onClick={handleClear}>完了したタスクの削除</button>
        </div>
        <div className="count">
          残りのタスク:{todos.filter((todo) => !todo.completed).length}
        </div>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
