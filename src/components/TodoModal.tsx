import { MdOutlineClose } from 'react-icons/md';
import { Button } from './Button';

type TodoModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

function TodoModal({ showModal, setShowModal }: TodoModalProps) {
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
        <form className="w-full">
          <h2 className="text-[#ccd6f6] capitalize text-[20px] font-semibold mb-5">
            Add TODO
          </h2>
          <label className="text-[#ccd6f6] text-base" htmlFor="title">
            Title
            <input
              className="backdrop-blur-sm border-none w-full mt-[8px] mb-[20px] rounded p-[10px] bg-[#8892b0]/[.5] text-[#ccd6f6] outline-none"
              type="text"
              id="title"
            />
          </label>
          <label className="text-[#ccd6f6] text-base" htmlFor="status">
            Status
            <select
              className="backdrop-blur-sm border-none w-full mt-[8px] mb-[20px] rounded p-[10px] bg-[#8892b0]/[.5] text-[#ccd6f6] outline-none"
              name="status"
              id="status">
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </label>
          <div className="flex justify-start items-center mt-5 gap-4">
            <Button variant="primary" type="submit">
              Add
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
