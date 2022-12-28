import AddNewItem from "../../components/TodoForm/NewItemForm";
import { useAppDispatch } from "redux-hook";
import { createTodo } from "./todoAsyncAction";

export function NewAsyncTodo() {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(createTodo(title));
  };
  return <AddNewItem placeholder="Add new todo" handleClick={handleNewTodo} />;
}
