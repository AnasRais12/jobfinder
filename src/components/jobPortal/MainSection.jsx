import React from 'react';
import {
  FaClock,
  FaMapMarkerAlt,
  FaRegBookmark,
  FaSearch,
} from 'react-icons/fa';

const MainSection = () => {
  return (
    <div className="flex-1">
      {/* Search Section */}
      <div className=" py-2 w-full lg:pt-0 pt-12  ">
        <h1 className="sm:text-2xl  text-[20px] text-[#333333] font-bold">
          Find your Dream Job, <span className="text-blue-600">Albert!</span>
        </h1>
        <p className="text-gray-500 text-sm ">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>

        <div className="mt-4 md:bg-white md:py-6 py-4 md:rounded-lg  md:border-t-0 border-t-2 border-[#e9ecef] md:px-4 md:space-y-0 space-y-4 flex flex-col md:flex-row lg:gap-4">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="p-2  w-full md:w-1/3 border-b-2 md:border-r-2 md:bg-inherit bg-white rounded-md border-[#e9ecef] md:border-b-0   focus:outline-blue-500"
          />
          <div className="border-[#e9ecef] border-b-2 md:border-r-2 pr-2  md:bg-inherit bg-white  md:border-b-0   w-full md:w-1/4">
            <select className=" p-2  w-full  focus:outline-blue-500 ">
              <option>Select Location</option>
            </select>
          </div>
          <div className="border-[#e9ecef] border-b-2 md:border-r-2 pr-2 md:border-b-0 md:bg-inherit bg-white     w-full md:w-1/4">
            <select className=" p-2 rounded w-full focus:outline-blue-500 ">
              <option>Job Type</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded md:w-fit w-full flex items-center gap-2">
            <FaSearch /> Search
          </button>
        </div>
      </div>
      {/* Filter */}

      <div className="flex  mt-4 overflow-x-auto  items-center border-b-2 border-[#e9ecef] gap-2 pb-4">
        <h1 className="text-[20px] text-[#737a91] mt-0 ">Similar:</h1>
        <div className=" flex px-2 sm:gap-2 gap-3   ">
          <button className="border-[#737a91] border-2 sm:text-[16px] text-[13px] whitespace-nowrap text-[#737a91] px-4 py-2 rounded-md">
            Frontend
          </button>
          <button className="border-[#737a91] border-2 sm:text-[16px] text-[13px] whitespace-nowrap text-[#737a91] px-4 py-2 rounded-md">
            Backend
          </button>
          <button
            className="border-[#737A91]
           border-2 sm:text-[16px] text-[13px] whitespace-nowrap text-[#737a91] px-4 py-2 rounded-md"
          >
            Graphic Designer
          </button>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="mt-6">
        <h2 className="text-xl font-normal flex sm:flex-row flex-col sm:items-center gap-1 sm:gap-4">
          Featured Jobs{' '}
          <span className="text-blue-600 border-b-2 w-fit text-[14px] sm:text-[16px]">
            See Featured Jobs
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">UI/UX Designer</h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <FaMapMarkerAlt />
                <span>Seattle, USA (Remote)</span>
              </div>

              {/* Time + Applicants */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <FaClock />
                <span>
                  1 day ago |{' '}
                  <a href="#" className="text-blue-600">
                    22 applicants
                  </a>
                </span>
              </div>
              <div className="flex items-end justify-between gap-2 text-gray-500 text-sm mt-2">
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded lg:w-[80%] w-fit">
                  Apply Now
                </button>
                <p className="py-2 text-[20px]">
                  <FaRegBookmark />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="mt-6">
        <h2 className="text-xl font-normal flex sm:flex-row flex-col sm:items-center sm:gap-4 gap-1">
          Recommended Jobs{' '}
          <span className="text-blue-600 border-b-2 w-fit text-[14px] sm:text-[16px]">
            See Recommended Jobs
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">UI/UX Designer</h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <FaMapMarkerAlt />
                <span>Seattle, USA (Remote)</span>
              </div>

              {/* Time + Applicants */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <FaClock />
                <span>
                  1 day ago |{' '}
                  <a href="#" className="text-blue-600">
                    22 applicants
                  </a>
                </span>
              </div>
              <div className="flex items-end justify-between gap-2 text-gray-500 text-sm mt-2">
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded lg:w-[80%] w-fit">
                  Apply Now
                </button>
                <p className="py-2 text-[20px]">
                  <FaRegBookmark />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { MainSection };
