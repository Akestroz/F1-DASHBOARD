import React from 'react';
import { motion } from 'framer-motion';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed top-20 right-4 z-50"
    >
      <button
        onClick={toggleTheme}
        className={`relative px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-110 $ ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-neonRed to-neonBlue text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,7,58,0.5)]' 
            : 'bg-gradient-to-r from-neonBlue to-neonPurple text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,249,255,0.5)]'
        }`}
      >
        {theme === 'dark' ? '🔴 NEON MODE' : '⚫ DARK MODE'}
      </button>
    </motion.div>
  );
};

export default ThemeSwitcher;
