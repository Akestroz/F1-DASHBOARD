import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ theme }) => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-neonRed via-purple-600 to-neonBlue p-6 shadow-2xl"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-black text-white mb-2"
          animate={{ 
            textShadow: theme === 'neon' 
              ? "0 0 10px #FF073A, 0 0 20px #FF073A, 0 0 30px #FF073A"
              : "0 0 5px rgba(255,255,255,0.5)"
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          F1 DYNAMIC DASHBOARD
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-white/80 font-bold tracking-wider"
        >
          LIVE RACING INTELLIGENCE
        </motion.p>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neonBlue rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neonRed rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </motion.header>
  );
};

export default Header;
