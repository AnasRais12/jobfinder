import React, { useState } from 'react'
import {  FaChevronDown } from 'react-icons/fa'
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from 'react-icons/rx';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {sidebarOpen && (
    <div
      className="fixed lg:hidden inset-0 bg-black opacity-50 z-40"
      onClick={() => setSidebarOpen(false)}
    ></div>
  )}
      <button
          className="lg:hidden text-[25px] sm:text-[28px] text-[#0154AA] flex justify-end w-fit md:ml-[-4px] ml-[-8px] absolute left-0   bg-white px-6 py-1 rounded   "
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <RiMenu2Line />
        </button>
    <div
              className={` rounded-lg  w-1/4 
              lg:block fixed lg:relative top-0  left-0 h-screen     border-t-2 border-[#e9ecef] lg:border-t-0   lg:h-auto transition-transform 
              ${
                sidebarOpen
                  ? 'translate-x-0 mt-16 z-50 bg-gray-50   overflow-y-auto  w-full sm:w-[55%] md:w-[50%] px-4 rounded-sm py-4 duration-700'
                  : '-translate-x-full '
              } lg:translate-x-0 `}
            >
                  <div className='flex justify-end items-center lg:hidden   mb-12 '>
                <button
          className="   text-[28px]  flex justify-end text-[#333333] hover:text-[red] absolute top-2 right-4 px-2 py-1 rounded   "
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
                <div className="mt-4 flex flex-col justify-center items-center">
                  <h2 className="text-lg font-semibold">Albert Flores</h2>
                  <p className="text-[16px] w-fit sm:w-[80%] text-center text-[#333333]">
                    Senior Product Designer | UI/UX Designer | Graphic Designer |
                    Web...
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Clinton, Maryland</p>
                </div>
              </div>
              <div className="mt-4 lg:bg-white bg-gray-50 space-y-3 text-[#333333]  px-3 rounded-md py-4">
                <button className="flex justify-between border-b-2 pb-2 border-[#E9ECEF] w-full">
                  <p>Profile Visitors</p>{' '}
                  <p className="text-[#0154AA]">140</p>
                </button>
                <button className="flex justify-between border-b-2 pb-2 border-[#E9ECEF] w-full">
                  <p>Resume Viewers</p>{' '}
                  <p className="text-[#0154AA]">20</p>
                </button>
                <button className="flex justify-between  border-b-2 pb-2 border-[#E9ECEF] w-full">
                  <p>My Jobs</p> <p className="text-[#0154AA]">88</p>
                </button>
              </div>
              <div className="mt-6 lg:border-b-0 border-b-2 border-[#E9ECEF] lg:bg-white bg-gray-50 px-3 lg:rounded-md py-2">
                <div className="flex justify-between items-end cursor-pointer">
                  <span className="text-xl font-medium text-[#333333]">My calendar</span>
                  <FaChevronDown className="text-gray-500 text-sm" />
                </div>
                <p className="text-gray-500 text-sm">Upcoming Interviews</p>
              </div>
            </div>
    </>
  )
}

export default Sidebar