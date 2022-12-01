import { Button, SelectButton } from './Button';

function AppHeader() {
  return (
    <div className="flex items-center justify-between h-[60px]">
      <Button type="button" variant="primary">
        Add Task
      </Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
