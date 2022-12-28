import { useEffect } from "react";
import { Todo } from "types";
import { useAppDispatch, useAppSelector } from "redux-hook";
import { asyncSelectAllTodos } from "./asyncTodoSelector";
import TodoItem from "components/TodoItem/TodoItem";
import { deleteTodo, fetchAllTodos, toggleTodo } from "./todoAsyncAction";

function AsyncTodoList() {
  const { list } = useAppSelector(asyncSelectAllTodos);
  const dispatch = useAppDispatch();

  const handleDelete = (id: Todo["id"]) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

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

export default AsyncTodoList;
