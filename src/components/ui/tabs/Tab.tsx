import { FC, ReactNode } from 'react';

interface TabProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const Tab: FC<TabProps> = ({ children, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`p-4 border-b-2 border-gray-200 hover:border-orange-500 text-sm font-medium leading-5  text-gray-700 ${
      isActive ? 'border-orange-500' : ''
    }`}
  >
    {children}
  </button>
);
