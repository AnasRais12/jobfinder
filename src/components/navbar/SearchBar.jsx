import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { motion } from 'framer-motion';

export const SearchBar = ({ setSearchBar }) => {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }} // Start position (Right side)
      animate={{ x: 0, opacity: 1 }} // End position (Visible)
      exit={{
        x: '-100%',
        opacity: 1,
        transition: { duration: 0.7, ease: 'easeInOut' },
      }}
      transition={{ duration: 1, ease: 'anticipate' }} // Smooth animation
      className="fixed top-0  sm:hidden xl:block    inset-x-0 w-full flex justify-center h-screen opacity-5  z-50  bg-[#504f4fa8] shadow-lg"
    >
      {/* Search Bar Section */}
      {/* Search Input */}
      <div className="w-full  bg-white h-fit py-3 xl:px-5">
        <div className="text-[22px] w-[100%]  px-4  flex mb-4 justify-between md:text-[25px] ">
          <div className="text-[20px] md:text-[25px] font-bold ">
            <img className="h-10" src="/images/logo.svg" alt="Logo" />
          </div>
          <button
            className=" text-[25px] hover:text-[red] sm:text-[28px]"
            onClick={() => setSearchBar(false)}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="px-4">
          <div className="relative block  ">
            <input
              type="text"
              placeholder="Search"
              className="px-10 bg-[#f6f9ff] py-3 shadow-md rounded-md focus:outline-none w-full"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m2.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
