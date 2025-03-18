import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink = [
    "Find Jobs"," Top Companies"," Job Tracker","My Calendar","Documents","Messages","Notifications"
  ]

  return (
    <nav className="navbar bg-white  shadow-md w-full fixed top-0 z-50">
      <div className="  lg:px-5 ">
        <div className="flex gap-4   h-16 items-center">
          {/* Logo */}
          <div className="flex gap-5 lg:bg-[red] xl:bg-[blue] md:bg-[green]  items-center w-[70%] lg:w-[80%]">
          <div className="flex-shrink-0 ">
            <img
              className="h-10 "
              src="/images/logo.svg" // अपना लोगो यहाँ सेट करें
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden text- md:flex space-x-6">
            {navLink.map((item,idx) => (
                <>
                <a className={` hover:text-blue-600 ${item == "Find Jobs"? 'text-[#0154AA] font-semibold' : 'text-[#737A91]'} `} key={idx}>{item}</a>
                </>
            ))}
            {/* <a href="#" className="text-gray-700 hover:text-blue-600">
              Find Jobs
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Top Companies
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Job Tracker
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              My Calendar
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Documents
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Messages
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Notifications
            </a> */}
          </div>
          </div>

          {/* Search + Button + Profile */}
          <div className="flex  items-center space-x-4">
          <div className="relative hidden md:block">
  {/* <input
    type="text"
    placeholder="Search"
    className="px-10 bg-[#f6f9ff] py-1 shadow-md rounded-md focus:outline-none w-full"
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m2.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg> */}
</div>
            <button className="bg-blue-600 text-white px-4 w-[40%] py-2 text-center text-[13px]  rounded-md">
              Resume Builder
            </button>
            <img
              className="h-10 w-10 rounded-full"
              src="/images/profile.svg" // अपना प्रोफाइल इमेज यहाँ सेट करें
              alt="Profile"
            />

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <AiOutlineClose size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Find Jobs
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Top Companies
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Job Tracker
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            My Calendar
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Documents
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Messages
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Notifications
          </a>
          <input
            type="text"
            placeholder="Search"
            className="block w-full px-3 py-1 border rounded-md focus:outline-none"
          />
        </div>
      )}
    </nav>
  );
}
