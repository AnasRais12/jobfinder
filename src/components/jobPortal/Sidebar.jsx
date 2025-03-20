import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import { FaChevronUp } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const Sidebar = () => {
  const StatsOverview = [
    { title: 'Profile Visitors', count: 140 },
    { title: 'Resume Viewers', count: 20 },
    { title: 'My Jobs', count: 88 },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpendropDown, setIsOpendropDown] = useState(false);

  return (
    <>
      {/* OverLay */}
      {sidebarOpen && (
        <div
          className="fixed lg:hidden inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      {/* Sidebar Responsive Button  */}
      <button
        className="lg:hidden text-[25px] sm:text-[28px] text-[#0154AA] flex justify-end w-fit md:ml-[-4px] ml-[-8px] absolute left-0   bg-white px-6 py-1 rounded   "
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <RiMenu2Line />
      </button>

      {/* SideBar Content */}
      <div
        className={` rounded-lg  w-1/4 
              lg:block fixed lg:relative top-0  left-0 h-[100vh] cursor-default    border-t-2 border-[#e9ecef] lg:border-t-0   lg:h-auto transition-transform 
              ${
                sidebarOpen
                  ? 'translate-x-0 mt-16 z-50 bg-gray-50     w-full sm:w-[55%] md:w-[50%] px-4 rounded-sm py-4 duration-700'
                  : 'sm:-translate-x-full -translate-x-[180%] '
              } lg:translate-x-0 `}
      >
        <div className='lg:h-fit h-[75vh] sidebar  overflow-y-auto'>
        <div className="flex justify-end  items-cente  lg:hidden   mb-4 ">
          <button
            className="   text-[28px]  flex justify-end text-[#333333] hover:text-[red] px-2 py-1 rounded   "
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <RxCross2 />
          </button>
        </div>

        {/* Profile Section */}
        <div className=" w-full pb-4    rounded-lg lg:bg-white text-center  ">
          <div className="relative  w-full size-28 rounded-lg overflow-hidden">
            <img
              src="/images/cover.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative -mt-10">
            <img
              src="/images/Oval.jpg"
              alt="Profile"
              className="size-24 rounded-full mx-auto "
            />
          </div>

          {/* Profile Infomation */}
          <div className="mt-4 flex flex-col justify-center items-center">
            <h2 className="text-[22px]  md:text-2xl font-semibold">Albert Flores</h2>
            <p className="text-[18px] sm:text-lg mb-1 w-fit sm:w-[80%]  lg:w-fit xl:w-[80%] text-center text-[#333333]">
              Senior Product Designer | UI/UX Designer | Graphic Designer |
              Web...
            </p>
            <p className=" text-[18px] sm:text-lg text-gray-400 mt-1">Clinton, Maryland</p>
          </div>
        </div>

        {/*   Stats OverView */}
        <div className="mt-4 lg:bg-white bg-gray-50 space-y-3 text-[#333333]  px-3 rounded-md py-4">
          {StatsOverview.map((item, i) => (
            <button
              key={i}
              className="flex justify-between lg:border-b-0 border-b-2 pb-2 border-[#E9ECEF] cursor-pointer w-full"
            >
              <p>{item.title}</p> <p className="text-[#0154AA]">{item.count}</p>
            </button>
          ))}
        </div>

        {/* Schedule  */}
        <div>
          <div className="mt-6 lg:border-b-0 border-b-2 border-[#E9ECEF] lg:bg-white bg-gray-50 px-3 lg:rounded-md py-2">
            <div className="flex justify-between items-end ">
              <p className="text-lg font-medium text-[#333333] ">My calendar</p>
              <button
                onClick={() => setIsOpendropDown(!isOpendropDown)}
                className="text-gray-500 text-sm cursor-pointer"
              >
                {isOpendropDown ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            <p className="text-gray-500 text-sm">Upcoming Interviews</p>
          </div>
          {isOpendropDown && (
            <div className="mt-1 duration-300 transition-all bg-white shadow-md rounded-md p-3 border border-gray-200">
              <p className="text-sm text-gray-700">
                No interviews scheduled yet.
              </p>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
