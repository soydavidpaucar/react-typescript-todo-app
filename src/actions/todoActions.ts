/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  title: string;
  status: 'completed' | 'uncompleted';
  time: string;
}

const getInitialTodos = () => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
};

const initialValue = {
  todos: getInitialTodos(),
  filter: 'all',
  search: '',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo: Todo) => todo.id === action.payload
      );
      state.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const todos = localStorage.getItem('todos');
      if (todos) {
        const parsedTodos = JSON.parse(todos);
        const index = parsedTodos.findIndex(
          (todo: Todo) => todo.id === action.payload.id
        );
        state.todos.splice(index, 1, action.payload);
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    updateStatus: (state, action) => {
      const todos = localStorage.getItem('todos');
      if (todos) {
        const parsedTodos = JSON.parse(todos);
        const index = parsedTodos.findIndex(
          (todo: Todo) => todo.id === action.payload.id
        );
        state.todos.splice(index, 1, action.payload);
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    searchTodo: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  updateStatus,
  updateFilter,
  searchTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
