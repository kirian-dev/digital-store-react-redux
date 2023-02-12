import { lazyImport } from '@/shared/helpers/lazyImport';
import { Landing } from '@/features/landing';
import { PageNotFound } from '@/features/not-found';

const { ProductsRoutes } = lazyImport(
	() => import('@/features/products/routes'),
	'ProductsRoutes'
);

const { Cart } = lazyImport(
	() => import('@/features/cart'),
	'Cart'
);
export const commonRoutes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/products/*',
    element: <ProductsRoutes />,
  },
  {
    path: '/cart/*',
    element: <Cart />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];
