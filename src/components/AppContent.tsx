import { AnimatePresence, motion } from 'framer-motion';
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

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function AppContent() {
  const todos = useSelector((state: { todos: TodoState }) => state.todos.todos);

  const filter = useSelector((state) => state.todos.filter);

  const search = useSelector((state) => state.todos.search);

  const sortedTodos = [...todos].sort((a, b) => {
    const aDate = new Date(a.time);
    const bDate = new Date(b.time);
    return bDate.getTime() - aDate.getTime();
  });

  const filteredTodos = sortedTodos.filter((todo) => {
    if (filter === 'all') {
      return todo.title.toLowerCase().includes(search.toLowerCase());
    }
    return (
      todo.status === filter &&
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <motion.div
      className="bg-[#112240]/50 p-5 mt-8 md: mt-0"
      variants={container}
      initial="hidden"
      animate="visible">
      <AnimatePresence>
        {filteredTodos && filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <motion.p
            className="text-base text-[#ccd6f6] text-center m-auto py-1 px-3 bg-[#8892b0]/[.20] backdrop-blur rounded max-w-fit"
            variants={child}>
            No tasks found!
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;
