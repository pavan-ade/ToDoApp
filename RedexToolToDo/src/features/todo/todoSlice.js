import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoStorage = localStorage.getItem("todos");

const initialState = {
  todos: todoStorage ? JSON.parse(todoStorage) : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        task: action.payload,
        status: null,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const { id, task, status } = action.payload;
      const existed = state.todos.find((todo) => todo.id == id);
      if (existed) {
        if (task !== undefined) {
          existed.task = task;
        }
        if (status !== undefined) {
          existed.status = status;
        }
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
