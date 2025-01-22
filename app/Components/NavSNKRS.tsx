import React from "react";
import { ShoppingCart, Globe, Menu } from "lucide-react"
import Link from "next/link";
import Image from "next/image";

const NavSNKRS = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-4 py-3 shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <Link href="/SnkrsRoute" className="flex items-center">
          <Image
            src="/images/snkrs-logo.PNG" // Replace with your Nike logo path
            alt="Nike Logo"
            width={100}
            height={100}
            className="ml-[30%] w-8 h-8"
          />
        </Link>
      </div>

      {/* Center Section (Links) */}
      <div className="hidden md:flex space-x-6">
        <Link
          href="/SnkrsRoute"
          className="text-gray-800 hover:text-black text-sm font-medium"
        >
          Feed
        </Link>
        <Link
          href="#"
          className="text-gray-800 hover:text-black text-sm font-medium"
        >
          In Stock
        </Link>
        <Link href="/upcoming"
          className="text-gray-800 hover:text-black text-sm font-medium"
        >
          Upcoming
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Hidden on small screens */}
        <Link
          href="/Login"
          className="text-gray-800 hover:text-black text-sm font-medium hidden md:inline"
        >
          Join/Log In
        </Link>
        <Link
          href="/Help"
          className="text-gray-800 hover:text-black text-sm font-medium hidden md:inline"
        >
          Help
        </Link>
        <ShoppingCart className="w-5 h-5 text-gray-800 hover:text-black" />
        <Globe className="w-5 h-5 text-gray-800 hover:text-black" />
        {/* Menu icon for smaller screens */}
        <Menu className="w-5 h-5 text-gray-800 hover:text-black md:hidden" />
      </div>
    </nav>
  );
};

export default NavSNKRS;
