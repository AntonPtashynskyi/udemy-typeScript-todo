import React from "react";
import { Todo } from "../../types";
import { StyledListItem, StyledButton } from "./Styled.TodoItem";
import { AiOutlineDelete } from "react-icons/ai";
import Checkbox from "../Checkbox/Checkbox";

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
      <Checkbox
        completed={completed}
        handleComplete={handleComplete}
        id={id}
        title={title}
      />
      <StyledButton style={{}} onClick={() => handleDelete(id)}>
        <AiOutlineDelete />
      </StyledButton>
    </StyledListItem>
  );
};

export default TodoItem;
