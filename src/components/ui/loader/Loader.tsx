import { FC } from 'react';
import './Loader.scss';

export const Loader: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={`loader-spinner ${className}`}>
      <div className="loader-spinner__spinner"></div>
    </div>
  );
};
