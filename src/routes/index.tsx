import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from '../components/layout';
import { commonRoutes } from './routes';

export const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Layout title="Digital store | The best store on the earth">
        <Routes>
          {commonRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </Layout>
    </>
  );
};
