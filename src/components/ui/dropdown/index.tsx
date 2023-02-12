import { FC, useState, ReactNode, useRef } from 'react';
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside';
interface DropdownProps {
  toggleText: string | ReactNode;
  dropdownContent: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ toggleText, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleClick = () => {
    setIsOpen(prev => !prev);
  };
  useOnClickOutside(dropdownRef, toggleClick, isOpen);

  return (
    <div className="relative">
      <button type="button" className="header__cart-icon" onClick={toggleClick}>
        {toggleText}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute bg-white py-2 mt-2 rounded shadow right-0 w-24 top-10 z-50"
          onClick={toggleClick}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
};
