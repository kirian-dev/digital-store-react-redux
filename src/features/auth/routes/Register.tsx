import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { Loader } from '@/components/ui/loader';

export const Register: FC = () => {
  const navigate = useNavigate();
  const isLoading = useTypedSelector((state) => state.user.isLoading);

  return (
    <section className="text-gray-700 body-font overflow-hidden h-screen">
      <h1 className="text-5xl block text-center mt-10">Sign Up</h1>
      {isLoading ? (
        <Loader className="m-0" />
      ) : (
        <RegisterForm onSuccess={() => navigate('/#/my/profile')} />
      )}
    </section>
  );
};
