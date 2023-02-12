import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import logo from '@/assets/images/logo.png';
import './Header.scss';
import { menuList } from './menu-list';

export const Header: FC = () => {
  return (
    <header className="header">
      <div>
        <Link to="/" className="">
          <img src={logo} alt="" className="header__icon" />
        </Link>
      </div>
      <ul className='flex justify-between'>
        {menuList.map((item) => (
          <li className='mr-6 text-xl hover:scale-105 hover:text-gray-400'>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex">
        <button type="button" className="header__cart-icon mr-5">
          <AiOutlineShopping />
          <span className="header__cart-item-qty">1</span>
        </button>
        <button type="button" className="header__cart-icon">
          <AiOutlineUser />
        </button>
      </div>
    </header>
  );
};
