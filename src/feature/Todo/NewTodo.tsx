import AddNewItem from "../../components/TodoForm/NewItemForm";
import { useAppDispatch } from "redux-hook";

import React from "react";
import { addTodo } from "./todoSlice";

export function NewTodo() {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(addTodo(title));
  };
  return <AddNewItem placeholder="Add new todo" handleClick={handleNewTodo} />;
}
