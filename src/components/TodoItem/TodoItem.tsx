import React from "react";
import { Todo } from "../../types";
import { StyledListItem, StyledButton } from "./Styled.TodoItem";
import { AiOutlineDelete } from "react-icons/ai";

type TodoItemProp = Todo & {
  style?: React.CSSProperties;
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};

const TodoItem = ({
  id,
  title,
  completed,
  handleDelete,
  handleComplete,
  style = {},
}: TodoItemProp) => {
  return (
    <StyledListItem>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleComplete(id)}
      />
      <span>{title}</span>
      <StyledButton style={{}} onClick={() => handleDelete(id)}>
        <AiOutlineDelete />
      </StyledButton>
    </StyledListItem>
  );
};

export default TodoItem;
