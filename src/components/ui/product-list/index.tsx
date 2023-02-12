import { FC, memo, createContext } from 'react';
import { motion } from 'framer-motion';
import { IProduct } from '@/types/product.interface';
import { Product } from '@/components/ui/product';

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
interface ProductContextType {
  product: IProduct;
}

interface ProductListProps {
  products: IProduct[];
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductsList: FC<ProductListProps> = memo(({ products }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'tween' }}
      className="flex justify-center items-center w-full gap-4 flex-col sm:flex-wrap sm:flex-row mt-10 h-full"
    >
      {products.map((product) => (
        <motion.li key={product.id} variants={item}>
          <ProductContext.Provider value={{ product }}>
            <Product />
          </ProductContext.Provider>
        </motion.li>
      ))}
    </motion.ul>
  );
});
