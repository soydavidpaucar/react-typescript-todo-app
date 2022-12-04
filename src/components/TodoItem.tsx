import { format } from 'date-fns';
import { MdDelete, MdEdit } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteTodo } from '../actions/todoActions';

interface Todo {
  id: string;
  title: string;
  status: 'completed' | 'uncompleted';
  time: string;
}
type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  const handleEdit = () => {
    // console.log('edit');
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Task deleted successfully!', {
      position: 'top-center',
    });
  };

  return (
    <div className="flex items-center justify-between p-[10px] mb-4 rounded last:mb-0 bg-[#8892b0]/[.20] backdrop-blur">
      <div className="flex items-center justify-start gap-[10px]">
        []
        <div className="flex flex-col overflow-hidden">
          <p
            className={`text-[#ccd6f6] text-base ${
              todo.status === 'completed' ? 'line-through text-[#8892b0]' : ''
            }`}>
            {todo.title}
          </p>
          <p className="block text-[12px] font-light mt-[-2px] text-[#8892b0]">
            {format(new Date(todo.time), 'p, dd MMM yyyy')}
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
    </div>
  );
}

export default TodoItem;
