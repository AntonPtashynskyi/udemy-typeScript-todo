import React, { useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./types";

import NewTodoForm from "./components/NewTodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  // const [obj, setObj] = useState<TTodo | null>(null); // when work with object than always easier make checking on NULL
  //   const [some, setSome] = useState<string[] | null>(null); the we always need to make type GUARD!

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodoList([newTodo, ...todoList]);
    setText("");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setTodoList(data);
      });
  }, []);

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        onChange={handleInput}
        handleClick={handleAddTodo}
      />
      {todoList &&
        todoList.map((todo) => (
          <TodoItem
            completed={todo.completed}
            id={todo.id}
            title={todo.title}
            key={todo.id}
          />
        ))}
    </div>
  );
}

export default App;
