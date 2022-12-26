import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Todo } from "./types";
import { FcPlus } from "react-icons/fc";

import NewTodoForm from "./components/TodoForm/NewTodoForm";
import TodoList from "./components/TodoList/TodoList";
import { LightTheme, DarkTheme } from "./styles/ThemeStyles";
import { StyledContainer } from "./styles/StyledContainer";
import { GlobalStyles } from "./styles/GlobalStyles";
import {
  StyledTodoWrapper,
  StyledModalButton,
} from "./components/TodoForm/StyledTodoWrapper";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

const theme = {
  dark: DarkTheme,
  light: LightTheme,
};

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  // const [obj, setObj] = useState<TTodo | null>(null); // when work with object than always easier make checking on NULL
  // const [some, setSome] = useState<string[] | null>(null); the we always need to make type GUARD!

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleDeleteTodo = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const handleComplete = (id: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleAddTodo = () => {
    if (text.length <= 0) return;
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodoList([newTodo, ...todoList]);
    setText("");
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data: Todo[]) => {
  //       setTodoList(data);
  //     });
  // }, []);

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
          <NewTodoForm
            value={text}
            onChange={handleInput}
            handleClick={handleAddTodo}
          />
        </StyledTodoWrapper>
        <TodoList
          list={todoList}
          handleComplete={handleComplete}
          handleDelete={handleDeleteTodo}
        />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
