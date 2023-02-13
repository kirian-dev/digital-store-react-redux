import { FC } from 'react';
import { LoginForm } from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { Loader } from '@/components/ui/loader';

export const Login: FC = () => {
  const navigate = useNavigate();
  const isLoading = useTypedSelector((state) => state.user.isLoading);

  return (
    <section className="h-screen w-full">
      <h1 className="text-5xl block text-center mt-10">Login</h1>
      {isLoading ? (
        <Loader className="mt-0" />
      ) : (
        <LoginForm onSuccess={() => navigate('/#/my/profile')} />
      )}
    </section>
  );
};
