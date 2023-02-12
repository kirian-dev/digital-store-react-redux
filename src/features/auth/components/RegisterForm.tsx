import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GoogleButton } from './GoogleButton';
export const RegisterForm: FC = () => {
  return (
    <div className="max-w-lg  mx-auto mt-16">
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        })}
        onSubmit={(values) => {
          // Your submit function here
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 h-96 flex justify-center items-center flex-col">
            <div className="mb-4 w-full px-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
              />
              <ErrorMessage className="text-red-500 text-xs italic" name="email" component="div" />
            </div>
            <div className="mb-4 w-full px-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
              />
              <ErrorMessage
                className="text-red-500 text-xs italic"
                name="password"
                component="div"
              />
            </div>
            <div className="px-4 w-full">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full"
                type="submit"
                disabled={isSubmitting}
              >
                Sign up
              </button>
            </div>
            <div className="px-4 w-full mt-4">
              <GoogleButton text='Sign up witn Google' />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
