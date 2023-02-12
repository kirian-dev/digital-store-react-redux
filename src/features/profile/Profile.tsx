import { useAuth } from '@/shared/hooks/useAuth';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { FC } from 'react';

export const Profile: FC = () => {
  const { user } = useAuth();
  const total = useTypedSelector((state) => state.cart.total);
  return (
    <section className="flex flex-col items-start mt-10 h-screen">
      <h2 className="text-xl font-bold mb-6">Profile Information</h2>
      <p className="text-lg mb-2">Email: {user?.email}</p>
      <p className="text-lg mb-6">Name: {user?.name || '-'}</p>
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-6">Order Information</h2>
        {total > 0 ? (
          <>
            <p className="text-lg mb-4">$Total: {total.toFixed(2)}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Pay Now
            </button>
          </>
        ) : (
          <p className="text-lg mb-4">You don't have any orders</p>
        )}
      </div>
    </section>
  );
};
