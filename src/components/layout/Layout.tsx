import { FC } from 'react';
import { Head } from '../head';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      
      <div className="">
        <div className="">
          <h1 className="">{title}</h1>
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
};
