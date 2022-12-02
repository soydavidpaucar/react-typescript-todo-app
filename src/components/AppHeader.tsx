import { useState } from 'react';
import { Button, SelectButton } from './Button';
import TodoModal from './TodoModal';

function AppHeader() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between h-[60px]">
      <Button
        type="button"
        variant="primary"
        onClick={() => setShowModal(!showModal)}>
        Add Task
      </Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </SelectButton>
      <TodoModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default AppHeader;
