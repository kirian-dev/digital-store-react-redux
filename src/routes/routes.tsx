import { lazyImport } from '@/shared/helpers/lazyImport';
import { Landing } from '@/features/landing';
import { PageNotFound } from '@/features/not-found';

const { ProductsRoutes } = lazyImport(
	() => import('@/features/products/routes'),
	'ProductsRoutes'
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
    path: '*',
    element: <PageNotFound />,
  },
];
