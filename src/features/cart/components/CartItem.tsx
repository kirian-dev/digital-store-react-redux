import { FC } from 'react';
import { IProduct } from '@/types/product.interface';

interface CartItemProps {
  item: IProduct;
  removeFromCart: (item: IProduct) => void;
  removeItem: (id: string) => void;
  addToCart: (item: IProduct) => void;
}

export const CartItem: FC<CartItemProps> = ({ item, removeFromCart,removeItem,  addToCart }) => {
  return (
    <div className="flex items-center justify-between p-4  rounded-lg shadow">
      <div className="flex items-center">
        <img src={item?.image} alt={item.name} className="w-16 h-16 rounded-full mr-4" />
        <div className="text-gray-600 text-sm">
          <p className="font-medium">{item.name}</p>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="flex items-center ">
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-full mr-4"
          onClick={() => removeFromCart(item)}
        >
          -
        </button>
        <p className="text-gray-600 text-sm mr-4">{item.quantity}</p>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded-full mr-4"
          onClick={() => addToCart(item)}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
        <p className="text-gray-600 text-sm ml-5 w-24 font-bold">
          Total: ${(item.price * (item.quantity || 1)).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
