import { Navigate, Route, Routes } from 'react-router-dom';
import { Products } from './Products';
import { ProductDetails } from './ProductDetails';

export const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Products />} />
      <Route path=":productId" element={<ProductDetails />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
