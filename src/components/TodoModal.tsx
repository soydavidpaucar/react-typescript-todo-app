import { FormEvent, useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addTodo, updateTodo } from '../actions/todoActions';
import { Button } from './Button';

type TodoModalProps = {
  type: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  todo?: {
    id: string;
    title: string;
    status: 'completed' | 'uncompleted';
  };
};

function TodoModal({ type, showModal, setShowModal, todo }: TodoModalProps) {
  const [{ title, status }, setFormState] = useState({
    title: '',
    status: 'uncompleted',
  } as { title: string; status: 'completed' | 'uncompleted' });

  useEffect(() => {
    if (todo) {
      setFormState({ title: todo.title, status: todo.status });
    }
  }, [todo]);

  const dispatch = useDispatch();
  const handleChanges = ({ target }: { target: EventTarget }) => {
    const { name, value } = target as HTMLInputElement;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (title === '') {
      toast.error('Title is required');
    }

    if (title.trim() !== '' && status.trim() !== '') {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: crypto.randomUUID(),
            title: title.trim(),
            status,
            time: new Date().toISOString(),
          })
        );
        toast.success('Task added successfully!');
        setShowModal(!showModal);
        setFormState({ title: '', status: 'uncompleted' });
      } else if (type === 'edit') {
        dispatch(
          updateTodo({
            ...todo,
            title: title.trim(),
            status,
          })
        );
        toast.success('Task updated successfully!');
        setShowModal(!showModal);
      }
    }
  };

  return showModal ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black/[.3] z-[1] flex items-center justify-center">
      <div className="backdrop-blur-sm max-w-lg bg-[rgb(10,25,47)]/[.85] w-[90%] text-white m-auto flex items-center justify-center p-4 rounded relative">
        <button
          type="button"
          className="absolute top-[-10px] right-0 translate-y-[-100%] text-[25px] p-[.5px] cursor-pointer bg-[#8892b0]/[.40] text-[#ccd6f6] rounded backdrop-blur-sm flex items-center justify-center transition-all z-0 hover:bg-red-600/[.80]"
          onClick={() => setShowModal(!showModal)}
          onKeyDown={() => setShowModal(!showModal)}>
          <MdOutlineClose />
        </button>
        <form className="w-full" onSubmit={(event) => handleSubmit(event)}>
          <h2 className="text-[#ccd6f6] capitalize text-[20px] font-semibold mb-5">
            {type === 'add' ? 'Add' : 'Edit'} Task
          </h2>
          <label className="text-[#ccd6f6] text-base" htmlFor="title">
            Title
            <input
              className="backdrop-blur-sm border-none w-full mt-[8px] mb-[20px] rounded p-[10px] bg-[#8892b0]/[.5] text-[#ccd6f6] outline-none"
              name="title"
              type="text"
              id="title"
              value={title}
              onChange={handleChanges}
            />
          </label>
          <label className="text-[#ccd6f6] text-base" htmlFor="status">
            Status
            <select
              className="backdrop-blur-sm border-none w-full mt-[8px] mb-[20px] rounded p-[10px] bg-[#8892b0]/[.5] text-[#ccd6f6] outline-none"
              name="status"
              id="status"
              onChange={handleChanges}
              value={status}>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </label>
          <div className="flex justify-start items-center mt-5 gap-4">
            <Button variant="primary" type="submit">
              {type === 'add' ? 'Add' : 'Edit'}
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={() => setShowModal(!showModal)}
              onKeyDown={() => setShowModal(!showModal)}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}

export default TodoModal;
