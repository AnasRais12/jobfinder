import React, { useState } from 'react'
import {  FaChevronDown } from 'react-icons/fa'
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from 'react-icons/rx';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
          className="lg:hidden text-[25px] sm:text-[28px] text-[#0154AA] flex justify-end w-fit ml-[-10px] absolute left-0   bg-white px-6 py-1 rounded   "
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <RiMenu2Line />
        </button>
    <div
              className={` rounded-lg  w-1/4 
              lg:block fixed lg:relative top-0  left-0 h-screen     border-t-2 border-[#e9ecef] lg:border-t-0   lg:h-auto transition-transform 
              ${
                sidebarOpen
                  ? 'translate-x-0 mt-16 z-50 bg-white   overflow-y-auto  w-full sm:w-[50%] md:w-[40%] px-4 rounded-sm py-4'
                  : '-translate-x-full'
              } lg:translate-x-0 `}
            >
                  <div className='flex justify-end items-center lg:hidden   mb-8'>
                <button
          className="   text-[28px]  flex justify-end text-black absolute top-2 right-4 px-2 py-1 rounded   "
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <RxCross2 />
        </button>
                    </div>
              <div className=" w-full pb-4    rounded-lg lg:bg-white text-center  ">

                <div className="relative  w-full size-28 rounded-lg overflow-hidden">
                  <img
                    src="/images/cover.svg"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
    
                {/* Profile Image */}
                <div className="relative -mt-10">
                  <img
                    src="/images/profile(2).svg"
                    alt="Profile"
                    className="size-24 rounded-full mx-auto "
                  />
                </div>
    
                {/* Profile Info */}
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">Albert Flores</h2>
                  <p className="text-sm text-gray-500">
                    Senior Product Designer | UI/UX Designer | Graphic Designer |
                    Web...
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Clinton, Maryland</p>
                </div>
              </div>
              <div className="mt-4 lg:bg-white bg-gray-50 space-y-3 px-2 rounded-md py-4">
                <button className="flex justify-between text-gray-600 border-b-2 pb-2 border-[#E9ECEF] w-full">
                  <p>Profile Visitors</p>{' '}
                  <p className="text-blue-500">140</p>
                </button>
                <button className="flex justify-between text-gray-600 border-b-2 pb-2 border-[#E9ECEF] w-full">
                  <p>Resume Viewers</p>{' '}
                  <p className="text-blue-500">20</p>
                </button>
                <button className="flex justify-between text-gray-600 border-b-2 pb-2 border-[#E9ECEF] w-full">
                  <p>My Jobs</p> <p className="text-blue-500">88</p>
                </button>
              </div>
              <div className="mt-6 bg-white px-2 rounded-md py-2">
                <div className="flex justify-between items-end cursor-pointer">
                  <span className="text-sm font-medium">My calendar</span>
                  <FaChevronDown className="text-gray-500 text-sm" />
                </div>
                <p className="text-gray-500 text-sm">Upcoming Interviews</p>
              </div>
            </div>
    </>
  )
}

export default Sidebar