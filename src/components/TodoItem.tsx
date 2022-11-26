import React from "react";
import { Todo } from "../types";

type TodoItemProp = Todo & {
  style?: React.CSSProperties;
};

const TodoItem = ({ id, title, completed, style = {} }: TodoItemProp) => {
  return (
    <li style={{ color: "white", backgroundColor: "black", ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>x</span>
    </li>
  );
};

export default TodoItem;
