import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchTodo, updateFilter } from '../actions/todoActions';
import { Button, SelectButton } from './Button';
import TodoModal from './TodoModal';
import SearchBar from './SearchBar';

function AppHeader() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const filterStatus = useSelector((state) => state.todos.filter);

  const search = useSelector((state) => state.todos.search);

  const dispatch = useDispatch();

  const handleFilter = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    dispatch(updateFilter(value));
  };

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    dispatch(searchTodo(value));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:h-[60px]">
      <Button
        type="button"
        variant="primary"
        onClick={() => setShowModal(!showModal)}>
        Add Task
      </Button>
      <SearchBar value={search} onChange={handleSearch} />
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
