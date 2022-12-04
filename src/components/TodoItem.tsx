import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { motion } from 'framer-motion';
import { deleteTodo, updateStatus } from '../actions/todoActions';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';

interface Todo {
  id: string;
  title: string;
  status: 'completed' | 'uncompleted';
  time: string;
}
type TodoItemProps = {
  todo: Todo;
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    if (todo.status === 'completed') {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [todo.status]);

  const handleEdit = () => {
    setShowModal(!showModal);
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Task deleted successfully!');
  };

  const handleCheck = () => {
    dispatch(
      updateStatus({
        ...todo,
        status: check ? 'uncompleted' : 'completed',
      })
    );
  };

  return (
    <>
      <motion.div
        className="flex items-center justify-between p-[10px] mb-4 rounded last:mb-0 bg-[#8892b0]/[.20] backdrop-blur"
        variants={child}>
        <div className="flex items-center justify-start gap-[10px]">
          <CheckButton check={check} handleCheck={handleCheck} />
          <div className="flex flex-col overflow-hidden">
            <p
              className={`text-[#ccd6f6] text-base ${
                todo.status === 'completed' ? 'line-through text-[#8892b0]' : ''
              }`}>
              {todo.title}
            </p>
            <p className="block text-[12px] font-light mt-[-2px] text-[#8892b0]">
              {format(new Date(todo.time), 'dd MMM yyyy, hh:mm a')}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <button
            className="text-[20px] p-[5px] rounded cursor-pointer bg-[#8892b0]/[.40] backdrop-blur-sm hover:bg-[#8892b0]/[.60] text-[#ccd6f6]"
            onClick={handleEdit}
            onKeyDown={handleEdit}
            type="button">
            <MdEdit />
          </button>
          <button
            className="text-[20px] p-[5px] rounded cursor-pointer bg-[#8892b0]/[.40] backdrop-blur-sm hover:bg-[#8892b0]/[.60] text-[#ccd6f6]"
            onClick={handleDelete}
            onKeyDown={handleDelete}
            type="button">
            <MdDelete />
          </button>
        </div>
      </motion.div>
      <TodoModal
        type="edit"
        showModal={showModal}
        setShowModal={setShowModal}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
