import React from "react";
import { Todo } from "../types";

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
    <li
      style={{
        color: "white",
        backgroundColor: "teal",
        padding: "30px",
        listStyle: "none",
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleComplete(id)}
      />
      <span>{title}</span>
      <span
        style={{
          color: "black",
          padding: "10px 30px",
          cursor: "pointer",
          marginLeft: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </span>
    </li>
  );
};

export default TodoItem;
