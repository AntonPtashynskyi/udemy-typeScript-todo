import React, { useState } from "react";
import "./App.css";
import { Todo } from "./types";

import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  // const [obj, setObj] = useState<TTodo | null>(null); // when work with object than always easier make checking on NULL
  // const [some, setSome] = useState<string[] | null>(null); the we always need to make type GUARD!

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleDeleteTodo = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const handleComplete = (id: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleAddTodo = () => {
    if (text.length <= 0) return;
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodoList([newTodo, ...todoList]);
    setText("");
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data: Todo[]) => {
  //       setTodoList(data);
  //     });
  // }, []);

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        onChange={handleInput}
        handleClick={handleAddTodo}
      />
      <TodoList
        list={todoList}
        handleComplete={handleComplete}
        handleDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
