import React from "react";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  list: Todo[];
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};

function TodoList({ list, handleComplete, handleDelete }: TodoListProps) {
  return (
    <ul>
      {list &&
        list.map((todo) => (
          <TodoItem
            completed={todo.completed}
            id={todo.id}
            title={todo.title}
            key={todo.id}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
    </ul>
  );
}

export default TodoList;
