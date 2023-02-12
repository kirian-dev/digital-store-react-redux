import { IProduct } from '@/types/product.interface';

export interface CartState {
  items: IProduct[];
  total: number;
}

