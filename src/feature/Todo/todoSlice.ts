import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "types";

const initialTodoState: Todo[] = [];
const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: new Date().toString(),
        title: action.payload,
        completed: false,
      };
      return [newTodo, ...state];
    },
    removeTodo: (state, action: PayloadAction<Todo["id"]>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<Todo["id"]>) => {
      return state.map((todo) => {
        if (todo.id !== action.payload) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
