import React, { useRef } from "react";
import { StyledInputForm } from "./Styled.TodoForm";

type NewItemProps = {
  handleClick: (text: string) => void;
  placeholder: string;
};

const NewItemForm = ({ handleClick, placeholder }: NewItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      if (inputRef.current.value.length === 0) return;
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <StyledInputForm>
      <input type="text" placeholder={placeholder} ref={inputRef} />
      <button onClick={onClick}>Add todo</button>
    </StyledInputForm>
  );
};

export default NewItemForm;
