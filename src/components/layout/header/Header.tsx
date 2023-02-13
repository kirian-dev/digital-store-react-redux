import { FC, useState, useEffect } from 'react';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Logout } from './Logout';
import { Dropdown } from '@/components/ui/dropdown';
import { useAuth } from '@/shared/hooks/useAuth';
import { menuList } from './menu-list';
import logo from '@/assets/images/logo.png';
import './Header.scss';

export const Header: FC = () => {
  const { user } = useAuth();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <header className="header z-50">
      <Link to="/" className="header__icon">
        <img src={logo} alt="" className="" />
      </Link>
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
        </Link>
        <Dropdown
          isOpenDropdown={isOpenDropdown}
          setIsOpenDropdown={setIsOpenDropdown}
          toggleText={
            <div className="header__cart-icon">
              <AiOutlineUser />
            </div>
          }
          dropdownContent={
            !user ? (
              <>
                <div
                  className="py-3 w-24  rounded-md hover:bg-slate-200 text-center"
                  onClick={toggleDropdown}
                >
                  <Link to="/auth/login">Login</Link>
                </div>
                <div
                  className="py-3 w-24  rounded-md hover:bg-slate-200 text-center"
                  onClick={toggleDropdown}
                >
                  <Link to="/auth/register">Sign up</Link>
                </div>
              </>
            ) : (
              <>
                <div
                  className="py-3 w-24  rounded-md hover:bg-slate-200 text-center"
                  onClick={toggleDropdown}
                >
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
