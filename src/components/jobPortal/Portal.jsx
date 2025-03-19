import { useState } from 'react';
import { MainSection } from './MainSection';
import Sidebar from './Sidebar';
import {
  FaBars,
  FaChevronDown,
  FaClock,
  FaMapMarkerAlt,
  FaRegBookmark,
} from 'react-icons/fa';

export default function JobPortal() {

  return (
    <div className="min-h-screen mt-15 bg-[#f4f4f4] px-4 sm:px-4 md:px-4  xl:pr-8 ">
      <div className=" w-full  py-6  flex flex-col lg:flex-row gap-6">
        {/* Toggle Button (lg ke baad dikhega) */}
      

        {/* Sidebar */}
        <Sidebar />

        {/* Right Section */}
        <MainSection />
      </div>
    </div>
  );
}
