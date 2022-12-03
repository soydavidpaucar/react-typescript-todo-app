import { createSlice } from '@reduxjs/toolkit';

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos
    ? JSON.parse(savedTodos)
    : localStorage.setItem('todos', JSON.stringify([]));
};

const initialValue = {
  todos: getInitialTodos(),
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      const todos = localStorage.getItem('todos');
      if (todos) {
        state.todos.push(action.payload);
        const parsedTodos = JSON.parse(todos);
        parsedTodos.push({ ...action.payload });
        localStorage.setItem('todos', JSON.stringify(parsedTodos));
      } else {
        localStorage.setItem('todos', JSON.stringify([{ ...action.payload }]));
      }
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
