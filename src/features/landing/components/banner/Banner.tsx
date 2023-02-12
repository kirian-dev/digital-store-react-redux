import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import bannerLogo from '@/assets/images/air-headphone.webp';

import './Banner.scss';

export const Banner: FC = () => {
  return (
    <motion.section
      className="landing-banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Final
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Sail
      </motion.h1>
      <motion.img
        src={bannerLogo}
        alt="banner"
        className="landing-banner__image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to="/products/7">
          <button type="button">Buy</button>
        </Link>
      </motion.div>
    </motion.section>
  );
};
