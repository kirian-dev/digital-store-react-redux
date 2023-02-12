import { FC } from 'react';
import { Link } from 'react-router-dom';

import bannerLogo from '@/assets/images/air-headphone.webp';

import './Banner.scss';

export const Banner: FC = () => {
  return (
    <div className="landing-banner">
      <h3>Final</h3>
      <h1>Sail</h1>
      <img src={bannerLogo} alt="banner" className="landing-banner__image" />
      <div>
        <Link to="/products/7">
          <button type="button">Buy</button>
        </Link>
      </div>
    </div>
  );
};
