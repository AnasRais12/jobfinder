import { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { motion } from 'framer-motion';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const navLink = [
    'Find Jobs',
    'Top Companies',
    'Job Tracker',
    'My Calendar',
    'Documents',
    'Messages',
    'Notifications',
  ];

  return (
    <>
      <nav className="navbar bg-white shadow-md w-full fixed top-0 z-50 ">
        <div className="flex justify-between items-center h-16 px-4 sm:px-8 xl:px-10">
          {/* Logo */}
          <div className="flex items-center   gap-5">
            <img
              className="h-10 sm:mr-0 mr-3"
              src="/images/logo.svg"
              alt="Logo"
            />
            {/* Desktop Menu */}
            <div className=" cursor-pointer   hidden min-xl:flex   gap-6 no whitespace-nowrap text-[1rem]">
              {navLink.map((item, idx) => (
                <span
                  key={idx}
                  className={`hover:text-blue-600 ${item === 'Find Jobs' ? 'text-[#0154AA] font-semibold' : 'text-[#737A91]'}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Search + Button + Profile */}
          <div className="flex items-center xl:gap-6 gap-4">
            <div className="relative min-2xl:block min-xl:hidden sm:w-50 md:w-60 sm:block hidden  ">
              <input
                type="text"
                placeholder="Search"
                className="px-10 bg-[#f6f9ff] py-2 shadow-md rounded-md focus:outline-none w-full"
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
            <button
              onClick={() => setSearchBar(true)}
              className="min-2xl:hidden min-xl:block sm:hidden block "
            >
              <FiSearch className="sm:text-[30px] text-[28px] text-gray-700 hover:text-orange-600" />
            </button>

            <button className="bg-blue-600 sm:block hidden text-white px-4 w-fit py-2 rounded-md text-[16px]">
              Resume Builder
            </button>

            {/* <button className="bg-blue-600 text-white px-4 w-fit py-2 rounded-md text-[16px]">Resume Builder</button> */}
            <img
              className=" size-10 sm:size-11 rounded-full"
              src="/images/profile.svg"
              alt="Profile"
            />
            {/* Mobile Menu Button */}
            <motion.button
              className="min-xl:hidden block"
              onClick={() => setIsOpen(!isOpen)}
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 360 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <motion.div
                initial={{ opacity: 1, rotate: 0 }}
                animate={{
                  opacity: 1,
                  rotate: isOpen ? 360 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {isOpen ? <AiOutlineClose size={28} /> : <FiMenu size={30} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="min-xl:hidden block bg-gray-50 border-t-2 border-[#f0f0f0] shadow-md space-y-4 py-3 pb-6 px-6 sm:px-8"
          >
            {navLink.map((item, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className={`navbar text-[17px] block hover:text-blue-600 ${
                  item === 'Find Jobs'
                    ? 'text-[#0154AA] font-semibold'
                    : 'text-[#737A91]'
                }`}
              >
                {item}
              </motion.span>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="px-2 sm:hidden text-left bg-[#0154AA] ml-[-5px] rounded-md w-fit pb-2 font-normal block py-1 text-white"
            >
              Resume Builder
            </motion.button>
          </motion.div>
        )}
      </nav>
      {searchBar ? (
        <>
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
                <div className="text-[20px] md:text-[25px] font-bold text-orange-600">
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
        </>
      ) : null}
    </>
  );
}
