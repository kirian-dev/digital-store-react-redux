import { FC } from 'react';
import { RegisterForm } from '../components/RegisterForm';

export const Register: FC = () => {
  return <section className="text-gray-700 body-font overflow-hidden h-screen">
     <h1 className='text-5xl block text-center mt-10'>Sign Up</h1>
     <RegisterForm />
  </section>;
};
