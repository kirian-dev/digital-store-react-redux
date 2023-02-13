import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { CartItem } from './components/CartItem';
import { Modal } from '@/components/ui/modal';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { useAction } from '@/shared/hooks/useAction';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { useAuth } from '@/shared/hooks/useAuth';
import { removeFromLocalStorage } from '@/shared/helpers/removeFromLocalStorage';
import { toastrSuccess } from '@/shared/helpers/toastify';

export const Cart: FC = () => {
  const items = useTypedSelector((state) => state.cart.items);
  const total = useTypedSelector((state) => state.cart.total);

  const [isShowConfetti, setIsShowConfetti] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const { user } = useAuth();
  const { addToCart, removeFromCart, removeItem } = useAction();
  const { width, height } = useWindowSize();

  const handleRemoveProduct = (id: string) => {
    removeItem(id);
    toastrSuccess('Product removed successfully');
  };

  const handlePay = () => {
    if (!user) {
      setIsShowModal(true);
    } else {
      setIsShowConfetti(!isShowConfetti);
      setTimeout(() => {
        removeFromLocalStorage('cart');
        window.location.assign('/#/products');
      }, 5000);
    }
  };

  if (!items.length) {
    return (
      <h1 className="text-5xl mt-20 h-screen text-center">
        Oooopsss cart is empty{' '}
        <Link to="/products" className="text-orange-300">
          go to shoooping
        </Link>
      </h1>
    );
  }

  return (
    <section className="h-screen">
      <div className="p-10 rounded-lg shadow">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            removeItem={handleRemoveProduct}
          />
        ))}
        <div className="mt-10">
          <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
          <button className="bg-green-500 text-white py-2 px-4 rounded mt-5" onClick={handlePay}>
            Pay now
          </button>
        </div>
      </div>

      {isShowConfetti && <Confetti width={width} height={height} />}
      {isShowModal && (
        <Modal
          showModal={isShowModal}
          setShowModal={setIsShowModal}
          content={
            <p className="text-md font-medium">
              To add an item to your shopping cart, you need to{' '}
              <Link to="/auth/login" className="text-orange-500">
                log in
              </Link>
            </p>
          }
        />
      )}
    </section>
  );
};
