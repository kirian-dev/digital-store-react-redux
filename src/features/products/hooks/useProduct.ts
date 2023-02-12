import { useParams } from 'react-router-dom';
import { mockDataProducts as products } from '@/shared/data/mockDataProducts';

export const useProduct = () => {
  const { productId } = useParams();

  const foundProduct = products.find((product) => product.id === productId);

  return foundProduct;
};
