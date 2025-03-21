import React, { useState } from 'react';
import { ProductFeature } from '../../utils/CardsData';
import { ProductRecommanded } from '../../utils/CardsData';
import {
  FaClock,
  FaMapMarkerAlt,
  FaRegBookmark,
  FaSearch,
} from 'react-icons/fa';

const MainSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilter = (category) => {
    //  get category and save in state
    setSelectedCategory(category);
  };

  //  Filtered Jobs // and checking if selected category is All then show all jobs else show selected category jobs
  const filteredFeatureProduct = ProductFeature(selectedCategory);

  const filteredRecommandedProduct = ProductRecommanded(selectedCategory);

  return (
    // Parent Section
    <div className="flex-1 cursor-default">
      {/* Search Section */}
      <div className=" py-2 w-full lg:pt-0 pt-12  ">
        <h1 className="sm:text-2xl  text-[20px] text-secondary font-bold">
          Find your Dream Job, <span className="text-primary">Albert!</span>
        </h1>
        <p className="text-gray-500 text-sm ">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>

        <div className="mt-4 md:bg-white md:py-6 py-4 md:rounded-lg md:border-b-2 border-b-2  border-[#dae0e6] md:px-4 md:space-y-0 space-y-4 flex flex-col md:flex-row md:gap-2 lg:gap-4">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="p-2 lg:py-3  w-full md:w-1/3 border-2 md:rounded-none  rounded-md md:border-0 md:border-r-2 md:bg-inherit  bg-white border-[#ccc] md:border-[#e9ecef]    focus:outline-blue-500"
          />
          <div className="border-[#ccc] md:border-[#e9ecef]  md:rounded-none rounded-md  md:border-0 md:border-r-2 pr-2 border-2   md:bg-inherit bg-white     w-full md:w-1/4">
            <select className=" p-2 lg:py-3  w-full text-gray-400 focus:outline-none   ">
              <option defaultValue={''}>Select Location</option>
              <option>Location 1</option>
            </select>
          </div>
          <div className="border-[#ccc] md:border-[#e9ecef] md:rounded-none rounded-md  md:border-0 md:border-r-2 pr-2 border-2  md:bg-inherit bg-white w-full md:w-1/4">
            <select className=" p-2 lg:py-3 text-gray-400  rounded w-full focus:outline-none ">
              <option>Job Type</option>
              <option>Job Type1</option>
            </select>
          </div>
          <button className="bg-[#0154AA] hover:bg-[#0153aace] cursor-pointer text-white  px-6 py-2.5 md:py-2 rounded md:w-fit w-full flex md:justify-start justify-center items-center gap-2">
            <span className="md:block  hidden">
              <FaSearch />
            </span>{' '}
            Search
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex  mt-4 overflow-x-auto  items-center border-b-2  border-[#e9ecef] gap-2 pb-4">
        <h1 className="text-[20px] text-[#737a91] mt-0 ">Similar:</h1>
        <div className=" flex px-2  sm:gap-2 gap-3   ">
          {/* All button will only show when any category is selected */}
          {selectedCategory !== 'All' && (
            <button
              onClick={() => handleFilter('All')}
              className="border-2 sm:text-[16px] text-[13px] cursor-pointer px-4 py-2 rounded-md border-[#737a91] text-[#737a91]"
            >
              All
            </button>
          )}
          {['Frontend', 'Backend', 'Graphic Designer'].map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`  border-2 sm:text-[16px] text-[13px] whitespace-nowrap  px-4 py-2 rounded-md cursor-pointer
      ${selectedCategory === category ? 'bg-[#0154AA] text-white' : 'border-[#737a91] hover:bg-primary hover:text-white text-[#737a91]'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="mt-6 mb-20">
        <h1 className="sm:text-2xl text-[22px] font-normal flex sm:flex-row flex-col sm:items-center gap-1 sm:gap-4">
          Featured Jobs{' '}
          <span className="text-primary hover:text-[#0153aace] border-b-2 cursor-pointer  w-fit text-[14px] sm:text-[16px] lg:text-1xl">
            See Featured Jobs
          </span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5  gap-4 mt-4">
          {filteredFeatureProduct.map((featureItem, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">{featureItem?.title}</h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <FaMapMarkerAlt />
                <span>{featureItem?.location}</span>
              </div>

              <div className="flex items-center flex-wrap gap-2 text-gray-500 text-sm mt-2">
                <div className="flex items-center gap-2">
                  <FaClock />
                  {featureItem?.postedTime} |
                </div>
                <p className=" cursor-pointer ml-2 text-primary hover:text-secondary ">
                  {featureItem?.applicants} applicants
                </p>
              </div>
              <div className="flex items-end justify-between gap-2 text-gray-500 text-sm mt-2">
                <button className="mt-2 cursor-pointer bg-[#0154AA] hover:bg-[#0153aace]  text-white px-4 py-2 rounded lg:w-[80%] w-fit">
                  Apply Now
                </button>
                <p className="py-2 text-[20px]">
                  <FaRegBookmark className="hover:text-primary" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Jobs Section */}
      <div className="mt-6">
        <h2 className="sm:text-2xl text-[22px]  font-normal flex sm:flex-row flex-col sm:items-center sm:gap-4 gap-1">
          Recommended Jobs{' '}
          <span className="text-primary hover:text-[#0153aace] cursor-pointer  border-b-2 w-fit text-[15px] sm:text-[17px] lg:text-1xl">
            See Recommended Jobs
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-4 mt-4">
          {filteredRecommandedProduct.map((itemRecommanded, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">{itemRecommanded?.title}</h3>

              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <FaMapMarkerAlt />
                <span>{itemRecommanded?.location}</span>
              </div>

              <div className="flex items-center flex-wrap gap-2 text-gray-500 text-sm mt-2">
                <div className="flex items-center gap-2">
                  <FaClock />
                  {itemRecommanded?.postedTime} |
                </div>
                <p className="text-primary hover:text-secondary ml-2 cursor-pointer">
                  {itemRecommanded?.applicants} applicants
                </p>
              </div>
              <div className="flex items-end justify-between gap-2 text-gray-500 text-sm mt-2">
                <button className="mt-2 cursor-pointer bg-[#0154AA] hover:bg-[#0153aace]  text-white px-4 py-2 rounded lg:w-[80%] w-fit">
                  Apply Now
                </button>
                <p className="py-2 hover:b text-[20px]">
                  <FaRegBookmark className="hover:text-primary" />
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
