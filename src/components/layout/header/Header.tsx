import { FC } from 'react';
import { Link } from 'react-router-dom';
import { menuList } from './menu-list';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { Dropdown } from '@/components/ui/dropdown';
import { useAuth } from '@/shared/hooks/useAuth';
import logo from '@/assets/images/logo.png';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import './Header.scss';
import { Logout } from './Logout';

export const Header: FC = () => {
  const items = useTypedSelector((state) => state.cart.items);
  const { user } = useAuth();
  return (
    <header className="header z-50">
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
        <Dropdown
          toggleText={
            <div className="header__cart-icon relative">
              <AiOutlineUser />
            </div>
          }
          dropdownContent={
            !user ? (
              <>
                <div className="py-3 w-24  rounded-md hover:bg-slate-200 text-center">
                  <Link to="/auth/login">Login</Link>
                </div>
                <div className="py-3 w-24  rounded-md hover:bg-slate-200 text-center">
                  <Link to="/auth/register">Sign up</Link>
                </div>
              </>
            ) : (
              <>
                <div className="py-3 w-24  rounded-md hover:bg-slate-200 text-center">
                  <Link to="/my/profile">Profile</Link>
                </div>
                <Logout />
              </>
            )
          }
        />
      </div>
    </header>
  );
};
