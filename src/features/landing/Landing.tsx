import { FC } from 'react';
import { Banner } from './components/banner/Banner';
import { ProductsList } from '@/components/ui/product-list';
import { mockDataProducts as products } from '@/shared/data/mockDataProducts';
export const Landing: FC = () => {
  return (
    <div>
      <Banner />
      <div className="flex justify-center flex-col w-full items-center">
        <h2 className="text-5xl mt-10 font-bold text-gray-700">Beset Selling Proudcts</h2>
        <p className="mt-4 mb-10 text-lg">Speakers of many variation</p>
      </div>
      <ProductsList products={products} />
    </div>
  );
};
