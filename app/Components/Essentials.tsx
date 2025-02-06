import Image from "next/image";
import Link from "next/link";

// components/Essentials.js
export default function Essentials() {
    return (
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          The Essentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mens Section */}
          <div className="relative group">
            <Image
              src="/Images/essentials1.png" // Replace with the image URL for Men's
              alt="Men's Section"
              className="w-full h-auto rounded-md"
              width={100} 
              height={100}
            />
            <Link href="/Products"><button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium group-hover:bg-gray-800 group-hover:text-white transition">
              Mens
            </button></Link>
          </div>
          {/* Womens Section */}
          <div className="relative group">
            <Image
              src="/Images/essentials2.png" // Replace with the image URL for Women's
              alt="Womens Section"
              width={100} 
              height={100}
              className="w-full h-auto rounded-md"
            />
           <Link href="/Products"> <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium group-hover:bg-gray-800 group-hover:text-white transition">
              Womens
            </button></Link>
          </div>
          {/* Kids Section */}
          <div className="relative group">
            <Image
              src="/Images/essentials3.png" // Replace with the image URL for Kids'
              alt="Kids Section"
              width={100} 
              height={100}
              className="w-full h-auto rounded-md"
            />
            <Link href="/Products"><button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium group-hover:bg-gray-800 group-hover:text-white transition">
              Kids
            </button></Link>
          </div>
        </div>
        {/* Links Section */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-600 ml-[15%] mr-[15%]">
          <div>
            <h3 className="font-bold mb-2">Icons</h3>
            <ul>
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Shoes</h3>
            <ul>
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Clothing</h3>
            <ul>
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies  Pullovers</li>
              <li>Shirts  Tops</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Kids</h3>
            <ul>
              <li>Infant & Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  