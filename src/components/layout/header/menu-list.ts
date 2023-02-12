interface IMenu {
  link: string;
  title: string;
}

export const menuList: IMenu[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Products',
    link: '/products',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];
