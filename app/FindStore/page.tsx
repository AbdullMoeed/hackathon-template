import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";

const FindStore = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row h-screen max-w-screen-xl mx-auto">
      {/* Left Section: Store List and Filter */}
      <div className="w-full md:w-1/3 bg-white p-6 border-r border-gray-200">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">Find a Nike Store</h1>

        {/* Search Box */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search Location"
            className="w-full p-3 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {/* Filter Button */}
          <button className="absolute right-2 top-2 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1 text-sm font-medium">
            Filter
          </button>
        </div>

        {/* Store Count */}
        <p className="text-sm text-gray-500 mb-4">15 Stores Near You</p>

        {/* Store List */}
        <ul className="space-y-4 text-sm">
          <li>
            <h2 className="font-semibold">Nike NYC - House of Innovation 000</h2>
            <p className="text-gray-500">650 5th Ave, New York, NY, 10019, US</p>
            <p className="text-red-500">Closed</p>
            <p className="text-gray-500">Opens at 11:00 am</p>
          </li>
          <li>
            <h2 className="font-semibold">Nike By Upper East Side</h2>
            <p className="text-gray-500">1131 3rd Ave, New York, NY, 10065, US</p>
            <p className="text-red-500">Closed</p>
            <p className="text-gray-500">Opens at 11:00 am</p>
          </li>
          <li>
            <h2 className="font-semibold">Nike By Flatiron</h2>
            <p className="text-gray-500">156 Fifth Ave, New York, NY, 10010, US</p>
            <p className="text-red-500">Closed</p>
            <p className="text-gray-500">Opens at 11:00 am</p>
          </li>
        </ul>

        {/* View All Stores */}
        <div className="mt-6">
          <a
            href="#"
            className="text-gray-800 underline hover:no-underline text-sm font-medium"
          >
            View All Stores
          </a>
        </div>
      </div>

      {/* Right Section: Map */}
      <div className="flex-1 relative">
        <Image
          src="/Images/map-img.png" // Replace with your map image path
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </>
  );
};

export default FindStore;
