import { Todo } from "../../types";
import TodoItem from "../TodoItem/TodoItem";
import { StyledTodoList } from "./Styled.TodoList";

type TodoListProps = {
  list: Todo[];
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};

function TodoList({ list, handleComplete, handleDelete }: TodoListProps) {
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
