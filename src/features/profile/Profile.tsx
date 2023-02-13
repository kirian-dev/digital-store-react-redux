import { FC, useState } from 'react';
import Confetti from 'react-confetti';
import { useAuth } from '@/shared/hooks/useAuth';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { removeFromLocalStorage } from '@/shared/helpers/removeFromLocalStorage';

export const Profile: FC = () => {
  const { user } = useAuth();
  const total = useTypedSelector((state) => state.cart.total);
  const { width, height } = useWindowSize();

  const handleClickPay = () => {
    setIsShowConfetti(true);

    setTimeout(() => {
      removeFromLocalStorage('cart');
      window.location.assign('/#/products');
    }, 5000);
  };

  const [isShowConfetti, setIsShowConfetti] = useState(false);
  return (
    <section className="flex flex-col items-start mt-10 h-screen">
      <h2 className="text-xl font-bold mb-6">Profile Information</h2>
      <p className="text-lg mb-2">Email: {user?.email}</p>
      <p className="text-lg mb-6">Name: {user?.name || '-'}</p>
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-6">Order Information</h2>
        {total >= 1 ? (
          <>
            <p className="text-lg mb-4">Total: ${total.toFixed(2)}</p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleClickPay}
            >
              Pay Now
            </button>
          </>
        ) : (
          <p className="text-lg mb-4">You don't have any orders</p>
        )}
      </div>
      {isShowConfetti && <Confetti width={width} height={height} />}
    </section>
  );
};
