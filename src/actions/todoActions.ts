import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  title: string;
  status: 'completed' | 'uncompleted';
  time: string;
}

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
    deleteTodo: (state, action) => {
      const todos = localStorage.getItem('todos');
      if (todos) {
        const parsedTodos = JSON.parse(todos);
        const filteredTodos = parsedTodos.filter(
          (todo: Todo) => todo.id !== action.payload
        );
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
      }
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
