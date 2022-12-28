import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { FcPlus } from "react-icons/fc";
import TodoList from "./components/TodoList/TodoList";
import { LightTheme, DarkTheme } from "./styles/ThemeStyles";
import { StyledContainer } from "./styles/StyledContainer";
import { GlobalStyles } from "./styles/GlobalStyles";
import {
  StyledTodoWrapper,
  StyledModalButton,
} from "./components/TodoForm/StyledTodoWrapper";
import { NewTodo } from "feature/Todo/NewTodo";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

const theme = {
  dark: DarkTheme,
  light: LightTheme,
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <GlobalStyles />
      <StyledContainer>
        <ThemeSwitcher isDark={isDark} setIsDark={setIsDark} />
        <StyledTodoWrapper open={sideBarOpen}>
          <StyledModalButton
            onClick={() => setSideBarOpen(!sideBarOpen)}
            open={sideBarOpen}
          >
            {sideBarOpen ? (
              <FcPlus size={"2.5em"} />
            ) : (
              <FcPlus size={"2.5em"} />
            )}
          </StyledModalButton>
          <NewTodo />
        </StyledTodoWrapper>
        <TodoList />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
