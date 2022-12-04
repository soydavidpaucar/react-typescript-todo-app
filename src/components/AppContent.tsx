import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

type Todo = {
  id: string;
  title: string;
  status: 'completed' | 'uncompleted';
  time: string;
};

type TodoState = {
  todos: Todo[];
};

function AppContent() {
  const todos = useSelector((state: { todos: TodoState }) => state.todos.todos);

  const sortedTodos = [...todos].sort((a, b) => {
    const aDate = new Date(a.time);
    const bDate = new Date(b.time);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <div>
      {sortedTodos && sortedTodos.length > 0 ? (
        sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <div />
      )}
    </div>
  );
}

export default AppContent;
