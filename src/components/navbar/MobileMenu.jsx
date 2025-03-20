import React from 'react';
import { motion } from 'framer-motion';
export const MobileMenu = ({ setIsMenuOpen, navLink }) => {
  return (
    <div className="fixed inset-0 top-16 z-50 flex justify-start">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsMenuOpen(false)} // Click pe close hoga
      />

      {/* Dropdown Menu (From Top) */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full  h-fit bg-gray-50 border-t-2 border-b-2 pt-10 border-gray-200 shadow-lg rounded-b-lg space-y-6 py-6 px-6 relative z-50"
      >
        {/* Navigation Links */}
        {navLink.map((item, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className={`block text-[18px] font-medium cursor-pointer hover:text-primary ${
              item === 'Find Jobs'
                ? 'text-primary font-semibold'
                : 'text-secondary'
            }`}
          >
            {item}
          </motion.span>
        ))}

        {/* Resume Builder Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full sm:hidden block text-center bg-primary rounded-md py-2 text-white font-medium hover:bg-blue-700"
        >
          Resume Builder
        </motion.button>
      </motion.div>
    </div>
  );
};
