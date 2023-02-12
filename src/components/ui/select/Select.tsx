import { FC, ChangeEvent } from 'react';

import './Select.scss';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string | number | readonly string[] | undefined;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const Select: FC<SelectProps> = ({ options, value, onChange, className, ...rest }) => {
  return (
    <select value={value} onChange={onChange} className={`select ${className}`} {...rest}>
      {options.map((option) => (
        <option className="select-option" key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
