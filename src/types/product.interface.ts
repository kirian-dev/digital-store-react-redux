export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  quantity?: number;
}
