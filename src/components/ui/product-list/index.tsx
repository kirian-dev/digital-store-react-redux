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
    <ul className="flex justify-center w-full gap-4 flex-wrap mt-10 h-full">
      {products.map((product) => (
        <ProductContext.Provider value={{ product }}>
          <li key={product.id}>
            <Product />
          </li>
        </ProductContext.Provider>
      ))}
    </ul>
  );
});
