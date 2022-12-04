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
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload),
      };
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
