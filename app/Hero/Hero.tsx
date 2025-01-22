
import { Minus } from "lucide-react"
import Image from "next/image"
import AirMaxSection from "../Components/AirMaxSection"
import { GearUp } from "../Components/GearUp";
import Essentials from "../Components/Essentials";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <>
    <Navbar />
      {/* Top */}
      <div className="bg-[#F5F5F5] p-2">
        <span className="text-xl font-bold ml-[45%]">Hello Nike App</span>
        <div className="flex justify-center">
          <span>Download the app to access everything Nike.</span>
          <span className="text-md font-bold underline">Get You Great</span>
        </div>
      </div>

      {/* Image */}
      <div className="">
        <Image
          src="/Images/hero-img.png"
          alt="hero section image"
          width={1144}
          height={700}
          className="ml-[5%] mr-[5%]"
        />

        <div className="grid place-items-center text-center mt-6">
          <h1 className="text-lg">First Look</h1>
          <h3 className="text-4xl font-bold">Nike Air Max Pulse</h3>
          <h3 className="text-lg mt-6">
            Extreme Comfort. Hyper Durable. Max volume. Introducing the Air Max Pulse
          </h3>
          <div className="flex justify-center items-center mt-4">
            <Minus />
            <h3 className="text-lg ml-2">
              designed to push you past your limits and help you go to the max.
            </h3>
          </div>
        </div>

        {/* Button */}
        <div className="flex gap-3 items-center text-sm justify-center mt-[2%] mb-[10%]">
          <button className="bg-black text-white rounded-full w-[67] h-[24] p-2">
            Notify Me
          </button>
          <Link href="/Products"><button className="bg-black text-white rounded-full w-[168] h-[39] p-2">
            Shop Air Max
          </button></Link>
        </div>
      </div>

      {/* Swiper section for items */}
      <div className="mr-[4%] ml-[4%]"><AirMaxSection/></div>

      {/*Featured Section*/}
      {/* Top */}
      <div className=" p-2 ">
        <h1 className="text-xl font-bold ml-[5%]">Featured</h1>
      </div>

      {/* Image */}
      <div className="">
        <Image
          src="/Images/featured-image.jpeg"
          alt="hero section image"
          width={1144}
          height={700}
          className="ml-[5%] mr-[5%]"
        />

        <div className="grid place-items-center text-center mt-6">
          <h3 className="text-4xl font-bold">STEPS INTO WHAT FEELS GOOD</h3>
          <h3 className="text-lg mt-6">
            Cause everyone should know the feeling of running in that perfect pair.
          </h3>
        </div>

        {/* Button */}
        <div className=" ml-[45%] text-sm mt-[2%]">
         <Link href="/Products"> <button className="bg-black text-white rounded-full w-[200] h-[39] px-4 py-2">
            Find Your Shoe
          </button></Link>
        </div>
      </div>
      <div className="ml-[4%] mr-[4%]">
        <GearUp />
      </div>

      {/*Don't Miss sction */}
      {/* Top */}
      <div className=" p-2 ">
        <h1 className="text-xl font-bold ml-[5%]">Featured</h1>
      </div>

      {/* Image */}
      <div className="">
        <Image
          src="/Images/don't-miss.png"
          alt="hero section image"
          width={1144}
          height={700}
          className="ml-[5%] mr-[5%]"
        />

        <div className="grid place-items-center text-center mt-6">
          <h3 className="text-4xl font-bold">FLIGHT ESSENTIALS</h3>
          <h3 className="text-lg mt-6">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </h3>
        </div>

        {/* Button */}
        <div className=" ml-[45%] text-sm mt-[2%]">
          <Link href="/Login">
          <button className="bg-black text-white rounded-full w-[100] h-[39] px-4 py-2">
            Sign Up
          </button>
          </Link>
        </div>
      </div>
      <div className="ml-[4%] mr-[4%]">
      <Essentials />
      </div>
      
    </>
    
  );
}

export default Hero;
