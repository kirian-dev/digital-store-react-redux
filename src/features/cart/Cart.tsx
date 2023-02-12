import { FC } from 'react';
import { CartItem } from './components/CartItem';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { useAction } from '@/shared/hooks/useAction';

export const Cart: FC = () => {
  const items = useTypedSelector((state) => state.cart.items);
  const total = useTypedSelector((state) => state.cart.total);
  const { addToCart, removeFromCart, removeItem } = useAction();
  if (!items.length) {
    return (
      <h1 className="text-5xl mt-10 h-screen text-center">
        Oooopsss cart is empty{' '}
        <Link to="/products" className="text-orange-300">
          go to shoooping
        </Link>
      </h1>
    );
  }

  return (
    <div className="p-10 rounded-lg shadow">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          removeItem={removeItem}
        />
      ))}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <button className="bg-green-500 text-white py-2 px-4 rounded mt-5">
          Pay now
        </button>
      </div>
    </div>
  );
};
