import { FC, ChangeEvent } from 'react';

interface SearchProps {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ searchTerm, handleSearch }) => {
  return (
    <form className="max-w-sm px-4 my-10">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-orange-400"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </form>
  );
};
