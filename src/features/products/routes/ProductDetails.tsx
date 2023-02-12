import { FC } from 'react';
import { useProduct } from '../hooks/useProduct';
import { useAction } from '@/shared/hooks/useAction';
import { IProduct } from '@/types/product.interface';
import { toastr } from 'react-redux-toastr';

export const ProductDetails: FC = () => {
  const product = useProduct();
  const { addToCart } = useAction();
  if (!product) {
    return <h1 className="text-3xl text-center w-full mt-10">Product not found</h1>;
  }

  const handleAddProductToCart = (product: IProduct) => {
    addToCart(product);
    toastr.success('Product', 'Product added successfully');
  };
  return (
    <section className="text-gray-700 body-font overflow-hidden h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.name}
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={`/${product.image}`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-orange-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-10">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button
                className="flex ml-auto text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded-2xl"
                onClick={() => handleAddProductToCart(product)}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
