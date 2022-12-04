import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateFilter } from '../actions/todoActions';
import { Button, SelectButton } from './Button';
import TodoModal from './TodoModal';

function AppHeader() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const filterStatus = useSelector((state) => state.todos.filter);

  const dispatch = useDispatch();

  const handleFilter = ({ target }: Event) => {
    const { value } = target as HTMLInputElement;
    dispatch(updateFilter(value));
  };

  return (
    <div className="flex items-center justify-between h-[60px]">
      <Button
        type="button"
        variant="primary"
        onClick={() => setShowModal(!showModal)}>
        Add Task
      </Button>
      <SelectButton value={filterStatus} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </SelectButton>
      <TodoModal type="add" showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default AppHeader;
