import { lazyImport } from '@/shared/helpers/lazyImport';
import { Landing } from '@/features/landing';
import { PageNotFound } from '@/features/not-found';

const { ProductsRoutes } = lazyImport(() => import('@/features/products'), 'ProductsRoutes');
const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');
const { Cart } = lazyImport(() => import('@/features/cart'), 'Cart');
const { Profile } = lazyImport(() => import('@/features/profile'), 'Profile');

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
    path: '/auth/*',
    element: <AuthRoutes />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export const userRoutes = [
  {
    path: '/my/profile',
    element: <Profile />,
  },
];
