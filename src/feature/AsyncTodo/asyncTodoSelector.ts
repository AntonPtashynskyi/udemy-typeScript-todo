import { RootState } from "store";

export const asyncSelectAllTodos = (state: RootState) => state.asyncTodos;
