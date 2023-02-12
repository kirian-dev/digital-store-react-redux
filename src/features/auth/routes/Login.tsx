import { FC } from 'react';
import { LoginForm } from '../components/LoginForm';

export const Login: FC = () => {
  return (
    <section className='h-screen w-full'>
      <h1 className='text-5xl block text-center mt-10'>Login</h1>
      <LoginForm />
    </section>
  );
};
