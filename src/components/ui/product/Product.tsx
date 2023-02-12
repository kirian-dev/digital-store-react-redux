import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';
import { ProductContext } from '../product-list';

export const Product: FC = () => {
  const { product } = useContext(ProductContext);
  const { id, image, name, price } = product;
  return (
    <Link className="product" to={`/products/${id}`}>
      <div>
        <img src={image} className="product__image" />
        <p className="product__name">{name}</p>
        <p className="product__price">${price}</p>
      </div>
    </Link>
  );
};
