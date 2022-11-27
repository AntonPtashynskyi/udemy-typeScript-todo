import React from "react";

type NewTodoProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: () => void;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // handleClick: (text: string) => void;
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
