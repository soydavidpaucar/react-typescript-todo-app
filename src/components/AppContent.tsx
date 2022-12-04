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

  const filter = useSelector((state) => state.todos.filter);

  const sortedTodos = [...todos].sort((a, b) => {
    const aDate = new Date(a.time);
    const bDate = new Date(b.time);
    return bDate.getTime() - aDate.getTime();
  });

  const filteredTodos = sortedTodos.filter((todo) => {
    if (filter === 'all') {
      return true;
    }
    return todo.status === filter;
  });

  return (
    <div className="bg-[#112240]/50 p-5">
      {filteredTodos && filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className="text-base text-[#ccd6f6] text-center m-auto py-1 px-3 bg-[#8892b0]/[.20] backdrop-blur rounded max-w-fit">
          No tasks found!
        </p>
      )}
    </div>
  );
}

export default AppContent;
