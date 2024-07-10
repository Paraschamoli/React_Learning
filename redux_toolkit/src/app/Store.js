import { configureStore } from "@reduxjs/toolkit";
// todoReducer
import todoReducer from "../features/todo/TodoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
