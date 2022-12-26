import React from "react";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";

type CheckboxProps = {
  handleComplete: (id: string) => void;
  completed: boolean;
  id: string;
  title: string;
};
const StyledCheckbox = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    background-color: #ffffff;
    cursor: pointer;
    transition: all 300ms ease;
    &:checked {
      background-color: #49cc4f;
    }
  }
`;

function Checkbox({ completed, handleComplete, id, title }: CheckboxProps) {
  return (
    <StyledCheckbox htmlFor="check">
      <input
        type="checkbox"
        id="check"
        checked={completed}
        onChange={() => handleComplete(id)}
      />
      {completed ? (
        <BsCheckLg
          style={{
            position: "absolute",
            left: "3px",
            color: "#fff",
            width: "1.5em",
            height: "1.5em",
          }}
        />
      ) : (
        ""
      )}
      <span
        style={
          completed
            ? {
                marginLeft: "20px",
                cursor: "pointer",
                textDecoration: "line-through",
              }
            : { marginLeft: "20px", cursor: "pointer" }
        }
      >
        {title}
      </span>
    </StyledCheckbox>
  );
}

export default Checkbox;
