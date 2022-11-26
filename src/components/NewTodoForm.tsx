import React, { useRef } from "react";

type NewTodoProps = {
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: (text: string) => void;
};

const NewTodoForm = ({ handleClick }: NewTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        // value={value}
        // onChange={onChange}
        ref={inputRef}
      />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
