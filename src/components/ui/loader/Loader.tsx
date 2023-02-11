import { FC } from 'react';
import './LoadingSpinner.scss';

export const Loader: FC = () => {
  return (
    <div className="loader-spinner">
      <div className="loader-spinner__spinner"></div>
    </div>
  );
};
