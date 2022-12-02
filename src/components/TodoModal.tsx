import { MdOutlineClose } from 'react-icons/md';

function TodoModal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/[.3] z-[1] flex items-center justify-center">
      <div className="backdrop-blur-sm max-w-lg bg-[rgb(10,25,47)]/[.85] w-[90%] text-white m-auto flex items-center justify-center p-4 rounded relative">
        <div className="absolute top-[-10px] right-0 translate-y-[-100%] text-[25px] p-[.5px] cursor-pointer bg-[#8892b0]/[.40] text-[#ccd6f6] rounded backdrop-blur-sm flex items-center justify-center transition-all z-0 hover:bg-red-600/[.80]">
          <MdOutlineClose />
        </div>
        <h1>Todo Modal</h1>
      </div>
    </div>
  );
}

export default TodoModal;
