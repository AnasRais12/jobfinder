import { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { SearchBar } from './SearchBar';
import { MobileMenu } from './MobileMenu';
import { motion } from 'framer-motion';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const toggleMenuBar = () => setIsMenuOpen(!isMenuOpen);

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
          <div className="flex items-center   gap-5">
            {/* Logo */}
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
                  className={`hover:text-primary ${item === 'Find Jobs' ? 'text-primary font-semibold' : 'text-[#737A91]'}`}
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
              <FiSearch className="sm:text-[30px] text-[28px] text-secondary hover:text-orange-600" />
            </button>

            <button className="bg-primary cursor-pointer sm:block hidden text-white px-4 w-fit py-2 rounded-md text-[16px]">
              Resume Builder
            </button>

            <img
              className=" size-10 sm:size-11 rounded-full"
              src="/images/profile.png"
              alt="Profile"
            />
            {/* Mobile Menu animation Button */}
            <motion.button
              className="min-xl:hidden block"
              onClick={toggleMenuBar}
              initial={{ scale: 1 }}
              animate={{ scale: isMenuOpen ? 1.2 : 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <motion.div
                initial={{ opacity: 0.5, rotate: 0 }}
                animate={{
                  opacity: 1,
                  rotate: isMenuOpen ? 180 : 0,
                  scale: isMenuOpen ? 1.1 : 1,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {isMenuOpen ? (
                  <AiOutlineClose size={25} />
                ) : (
                  <FiMenu size={30} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Bar */}
        {isMenuOpen && (
          <MobileMenu setIsMenuOpen={setIsMenuOpen} navLink={navLink} />
        )}
      </nav>
      {/* SearchBar */}
      {searchBar && <SearchBar setSearchBar={setSearchBar} />}
    </>
  );
}
