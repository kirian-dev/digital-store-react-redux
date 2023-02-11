import { lazyImport } from '@/shared/helpers/lazyImport';
import { Landing } from 'features/landing';
import { PageNotFound } from 'features/not-found';


export const commonRoutes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];
