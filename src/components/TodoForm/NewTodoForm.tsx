import React from "react";
import { StyledInputForm } from "./Styled.TodoForm";

type NewTodoProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: () => void;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // handleClick: (text: string) => void;
};

const NewTodoForm = ({ value, onChange, handleClick }: NewTodoProps) => {
  return (
    <StyledInputForm>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleClick}>Add todo</button>
    </StyledInputForm>
  );
};

export default NewTodoForm;
