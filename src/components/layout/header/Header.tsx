import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import logo from '@/assets/images/logo.png';
import './Header.scss';
import { menuList } from './menu-list';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';

export const Header: FC = () => {
  const items = useTypedSelector(state => state.cart.items)
  return (
    <header className="header">
      <div>
        <Link to="/" className="">
          <img src={logo} alt="" className="header__icon" />
        </Link>
      </div>
      <ul className="flex justify-between">
        {menuList.map((item, idx) => (
          <li className="mr-6 text-xl hover:scale-105 hover:text-gray-400" key={idx}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex">
        <Link to="/cart" type="button" className="header__cart-icon mr-5">
          <AiOutlineShopping />
          <span className="header__cart-item-qty">{items.length}</span>
        </Link>
        <button type="button" className="header__cart-icon">
          <AiOutlineUser />
        </button>
      </div>
    </header>
  );
};
