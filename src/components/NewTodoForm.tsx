import React, { useRef } from "react";

type NewTodoProps = {
  value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const NewTodoForm = ({ value, onChange, handleClick }: NewTodoProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
