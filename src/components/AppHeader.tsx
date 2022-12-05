import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchTodo, updateFilter } from '../actions/todoActions';
import { RootState } from '../app/store';
import { Button, SelectButton } from './Button';
import SearchBar from './SearchBar';
import TodoModal from './TodoModal';

function AppHeader() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const filterStatus = useSelector((state: RootState) => state.todos.filter);

  const search = useSelector((state: RootState) => state.todos.search);

  const dispatch = useDispatch();

  const handleFilter = (event: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(updateFilter(event.target.value));
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(searchTodo(event.target.value));
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
