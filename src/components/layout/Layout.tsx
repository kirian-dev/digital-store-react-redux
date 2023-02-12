import { FC } from 'react';
import { Head } from '../head';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

import './Layout.scss';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <div className="layout container">
        <Head title={title} />
        <Header />
        <main className="">
          <div className="layout__container">{children}</div>
        </main>
      </div>

      <Footer />
    </>
  );
};
