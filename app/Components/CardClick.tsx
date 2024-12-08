

import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";

const ProductCard = () => {
  return (
    <>
    <Navbar />
   
    <div className="flex flex-col md:flex-row items-start max-w-4xl mx-auto p-6 gap-[20%] mb-[30%] mt-[8%]">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="/Images/pcard3.png" // Replace with your image path
          alt="Nike Air Force 1"
          className="w-[653] h-[653] max-w-sm"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-left font-sans">
        <h1 className="text-2xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
        <p className="text-gray-700 text-sm leading-6 mb-4">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid
          Its inside out inspired construction including unique layering and
          exposed foam accents ups the ante on this timeless Jordan Brand
          silhouette. Details like the deco stitching on the Swoosh add coveted
          appeal while the unexpected shading rich mixture of materials and
          aged midsole aesthetic give this release an artisan finish.
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <span className="font-semibold">Colour Shown:</span> Sail/Fossil Stone/
          Celestial Gold/Taupe Haze
        </p>
        <p className="text-gray-700 text-sm mb-4">
          <span className="font-semibold">Style:</span> DM9652-102
        </p>
        <a
          href="#"
          className="text-sm font-medium text-black underline hover:no-underline"
        >
          View Product Details
        </a>
      </div>
    </div>
    </>
  );
};

export default ProductCard;

