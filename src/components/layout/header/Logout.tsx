import { FC } from 'react';
import { useAction } from '@/shared/hooks/useAction';

export const Logout: FC = () => {
  const { logout } = useAction();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="py-3 w-24  rounded-md hover:bg-slate-200 text-center" onClick={handleLogout}>
      <a href="/auth/login">logout</a>
    </div>
  );
};
