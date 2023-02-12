import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  footerDataContact,
  footerDataHome,
  footerDataProduct,
  footerDataResources,
  footerDataUser,
} from './footerData';

export const Footer: FC = () => {
  return (
    <footer>
      <div className="bg-gray-100 mt-24">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Home</div>
            <ul>
              {footerDataHome.map((item, idx) => (
                <li key={idx}>
                  <Link className="my-3 block hover:text-gray-500" to="/#">
                    {item} <span className="text-teal-600 text-xs p-1"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">User</div>
            <ul>
              {footerDataUser.map((item, idx) => (
                <li key={idx}>
                  <Link className="my-3 block hover:text-gray-500" to={item.link || '/#'}>
                    {item.title} <span className="text-teal-600 text-xs p-1"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Resources</div>
            <ul>
              {footerDataResources.map((item, idx) => (
                <li key={idx}>
                  <Link className="my-3 block hover:text-gray-500" to="/#">
                    {item} <span className="text-teal-600 text-xs p-1">New</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Product</div>
            <ul>
              {footerDataProduct.map((item, index) => (
                <li key={index}>
                  <Link className="my-3 block hover:text-gray-500" to="/#">
                    {item} <span className="text-teal-600 text-xs p-1">New</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Contact us</div>
            <ul>
              {footerDataContact.map((item, index) => (
                <li key={index}>
                  <Link className="my-3 block hover:text-gray-500" to="/#">
                    {item}
                    <span className="text-teal-600 text-xs p-1"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2 ">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
        >
          <div className="mt-2  mx-auto">© Copyright 2023. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};
