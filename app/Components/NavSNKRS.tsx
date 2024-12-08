import React from "react";
import { ShoppingCart, HelpCircle, Globe, Menu } from "lucide-react"
import Link from "next/link";
import Image from "next/image";

const NavSNKRS = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-4 py-3 shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <a href="#" className="flex items-center">
          <Image
            src="/images/snkrs-logo.PNG" // Replace with your Nike logo path
            alt="Nike Logo"
            className="ml-[30%] w-8 h-8"
          />
        </a>
      </div>

      {/* Center Section (Links) */}
      <div className="hidden md:flex space-x-6">
        <a
          href="/SnkrsRoute"
          className="text-gray-800 hover:text-black text-sm font-medium"
        >
          Feed
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-black text-sm font-medium"
        >
          In Stock
        </a>
        <Link href="/incoming"
          className="text-gray-800 hover:text-black text-sm font-medium"
        >
          Upcoming
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Hidden on small screens */}
        <a
          href="#"
          className="text-gray-800 hover:text-black text-sm font-medium hidden md:inline"
        >
          Join/Log In
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-black text-sm font-medium hidden md:inline"
        >
          Help
        </a>
        <ShoppingCart className="w-5 h-5 text-gray-800 hover:text-black" />
        <Globe className="w-5 h-5 text-gray-800 hover:text-black" />
        {/* Menu icon for smaller screens */}
        <Menu className="w-5 h-5 text-gray-800 hover:text-black md:hidden" />
      </div>
    </nav>
  );
};

export default NavSNKRS;
