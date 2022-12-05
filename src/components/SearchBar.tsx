import { ChangeEvent } from 'react';

type SearchBarProps = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({ ...additionalProps }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search a task..."
      className="mb-5 md:mb-0 w-full md:w-[200px] h-[40px] rounded-md bg-[#8892b0]/[.20] backdrop-blur text-[#ccd6f6] px-3 outline-none placeholder:text-[#ccd6f6] "
      {...additionalProps}
    />
  );
}

export default SearchBar;
