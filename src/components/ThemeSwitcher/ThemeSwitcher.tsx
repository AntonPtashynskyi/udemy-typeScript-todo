import React from "react";
import styled from "styled-components";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const StyledSwitcher = styled.div`
  button {
    border: none;
    background-color: transparent;
    padding: 5px 15px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      border-radius: 50%;
      transition: all 300ms ease;

      &:hover {
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      }
    }
  }
`;

type ThemeSwitcherProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

function ThemeSwitcher({ isDark, setIsDark }: ThemeSwitcherProps) {
  return (
    <StyledSwitcher>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? (
          <MdDarkMode size={"2em"} style={{ color: "#e3e3e3" }} />
        ) : (
          <MdOutlineLightMode size={"2em"} />
        )}
      </button>
    </StyledSwitcher>
  );
}

export default ThemeSwitcher;
