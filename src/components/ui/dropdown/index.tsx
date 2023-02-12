import { FC, ReactNode } from 'react';

interface DropdownProps {
  toggleText: string | ReactNode;
  dropdownContent: ReactNode;
  isOpenDropdown: boolean;
  setIsOpenDropdown: (value: boolean) => void;
}

export const Dropdown: FC<DropdownProps> = ({
  toggleText,
  dropdownContent,
  isOpenDropdown,
  setIsOpenDropdown,
}) => {
  const toggleClick = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div className="relative">
      <button type="button" className="header__cart-icon" onClick={toggleClick}>
        {toggleText}
      </button>
      <div>
        {isOpenDropdown && (
          <div className="absolute bg-white py-2 mt-2 rounded shadow right-0 w-24 top-10 z-50">
            {dropdownContent}
          </div>
        )}
      </div>
    </div>
  );
};
