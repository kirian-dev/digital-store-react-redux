import { FC } from 'react';
import { motion } from 'framer-motion';
import { Banner } from './components/banner/Banner';
import { ProductsList } from '@/components/ui/product-list';
import { mockDataProducts as products } from '@/shared/data/mockDataProducts';
export const Landing: FC = () => {
  return (
    <div>
      <Banner />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center flex-col w-full items-center"
      >
        <h2 className="text-5xl mt-10 font-bold text-gray-700">Best Selling Products</h2>
        <p className="mt-4 mb-10 text-lg">Speakers of many variations</p>
      </motion.div>
      <ProductsList products={products} />
    </div>
  );
};
