import React from "react";
import { Todo } from "../../types";
import { StyledListItem, StyledButton } from "./Styled.TodoItem";
import { AiOutlineDelete } from "react-icons/ai";
import Checkbox from "../Checkbox/Checkbox";

type TodoItemProp = Todo & {
  style?: React.CSSProperties;
  handleComplete: (id: number | undefined) => void;
  handleDelete: (id: number | undefined) => void;
};

const TodoItem = ({
  title,
  completed,
  id,
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
