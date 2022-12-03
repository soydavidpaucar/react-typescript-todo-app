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
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
