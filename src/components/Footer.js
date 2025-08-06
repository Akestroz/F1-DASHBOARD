import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-6 text-white/60 text-sm"
    >
      <p>
        &copy; {new Date().getFullYear()} F1 Dynamic Dashboard. All rights reserved.
      </p>
      <p>
        Developed with passion for racing fans.
      </p>
    </motion.footer>
  );
};

export default Footer;
