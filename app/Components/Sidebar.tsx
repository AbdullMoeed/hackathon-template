import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/4 border-r p-4">
        <div className="flex gap-8">
        <div >
        <ul className="space-y-4 text-lg font-serif">
            <li>Shoes</li>
            <li>Sports Bras</li>
            <li>Tops & T-Shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers & Tights</li>
            <li>Shorts</li>
            <li>Tracksuits</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories & Equipment</li>
        </ul>
      </div>
      <div className="w-[7px] h-[389px] bg-gray-500 rounded-lg"></div>
        </div>
      
      <div className="mb-6 mt-4">
        <h3 className="text-lg font-semibold mb-2">Gender</h3>
        <div>
          <label className="block text-sm">
            <input type="checkbox" className="mr-2" />
            Men
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-2" />
            Women
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-2" />
            Unisex
          </label>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Shop by Price</h3>
        <div>
          <label className="block text-sm">
            <input type="checkbox" className="mr-2" />
            Under ₹2,500
          </label>
          <label className="block text-sm">
            <input type="checkbox" className="mr-2" />
            ₹2,501 - ₹5,000
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
