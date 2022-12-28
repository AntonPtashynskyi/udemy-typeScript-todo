import TodoItem from "../TodoItem/TodoItem";
import { StyledTodoList } from "./Styled.TodoList";
import { Todo } from "types";
import { useAppDispatch, useAppSelector } from "redux-hook";
import { removeTodo, toggleTodo } from "feature/Todo/todoSlice";
import { selectAllTodos } from "feature/Todo/TodoSelector";

function TodoList() {
  const list = useAppSelector(selectAllTodos);
  const dispatch = useAppDispatch();

  const handleDelete = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };

  const handleComplete = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  return (
    <StyledTodoList>
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
    </StyledTodoList>
  );
}

export default TodoList;
