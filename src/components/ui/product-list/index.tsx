import { FC, memo, createContext } from 'react';
import { IProduct } from '@/types/product.interface';
import { Product } from '@/components/ui/product';

interface ProductContextType {
  product: IProduct;
}

interface ProductListProps {
  products: IProduct[];
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductsList: FC<ProductListProps> = memo(({ products }) => {
  return (
    <ul className="flex justify-center items-center w-full gap-4 flex-col sm:flex-wrap sm:flex-row mt-10 h-full">
      {products.map((product) => (
        <li key={product.id}>
          <ProductContext.Provider value={{ product }}>
            <Product />
          </ProductContext.Provider>
        </li>
      ))}
    </ul>
  );
});
