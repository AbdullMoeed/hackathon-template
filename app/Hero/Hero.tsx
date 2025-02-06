import { Minus } from "lucide-react"
import Image from "next/image"
import AirMaxSection from "../Components/AirMaxSection"
import { GearUp } from "../Components/GearUp"
import Essentials from "../Components/Essentials"
import Link from "next/link"
import Navbar from "../Navbar/Navbar"

function Hero() {
  return (
    <>
      <Navbar />
      {/* Top */}
      <div className="bg-[#F5F5F5] p-2">
        <div className="container mx-auto text-center">
          <span className="text-xl font-bold">Hello Nike App</span>
          <div className="flex justify-center items-center gap-1">
            <span>Download the app to access everything Nike.</span>
            <span className="text-md font-bold underline">Get You Great</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="px-4 sm:px-[5%]">
        <Image src="/Images/hero-img.png" alt="hero section image" width={1144} height={700} className="w-full" />

        <div className="grid place-items-center text-center mt-6">
          <h1 className="text-lg">First Look</h1>
          <h3 className="text-3xl sm:text-4xl font-bold">Nike Air Max Pulse</h3>
          <h3 className="text-base sm:text-lg mt-4 sm:mt-6 px-4">
            Extreme Comfort. Hyper Durable. Max volume. Introducing the Air Max Pulse
          </h3>
          <div className="flex justify-center items-center mt-4 px-4">
            <Minus className="hidden sm:block" />
            <h3 className="text-base sm:text-lg ml-0 sm:ml-2">
              designed to push you past your limits and help you go to the max.
            </h3>
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-3 items-center text-sm justify-center mt-6 sm:mt-[2%] mb-10 sm:mb-[10%]">
          <button className="bg-black text-white rounded-full w-full sm:w-auto px-4 py-2">Notify Me</button>
          <Link href="/Products">
            <button className="bg-black text-white rounded-full w-full sm:w-auto px-4 py-2">Shop Air Max</button>
          </Link>
        </div>
      </div>

      {/* Swiper section for items */}
      <div className="px-4 sm:px-[4%]">
        <AirMaxSection />
      </div>

      {/*Featured Section*/}
      {/* Top */}
      <div className="p-2">
        <h1 className="text-xl font-bold px-4 sm:px-[5%]">Featured</h1>
      </div>

      {/* Image */}
      <div className="px-4 sm:px-[5%]">
        <Image
          src="/Images/featured-image.jpeg"
          alt="featured section image"
          width={1144}
          height={700}
          className="w-full"
        />

        <div className="grid place-items-center text-center mt-6">
          <h3 className="text-3xl sm:text-4xl font-bold px-4">STEPS INTO WHAT FEELS GOOD</h3>
          <h3 className="text-base sm:text-lg mt-4 sm:mt-6 px-4">
            Cause everyone should know the feeling of running in that perfect pair.
          </h3>
        </div>

        {/* Button */}
        <div className="flex justify-center sm:justify-start sm:ml-[45%] text-sm mt-6 sm:mt-[2%] mb-10">
          <Link href="/Products">
            <button className="bg-black text-white rounded-full px-4 py-2">Find Your Shoe</button>
          </Link>
        </div>
      </div>
      <div className="px-4 sm:px-[4%]">
        <GearUp />
      </div>

      {/*Don't Miss section */}
      {/* Top */}
      <div className="p-2">
        <h1 className="text-xl font-bold px-4 sm:px-[5%]">Do not Miss</h1>
      </div>

      {/* Image */}
      <div className="px-4 sm:px-[5%]">
        <Image
          src="/Images/don't-miss.png"
          alt="don't miss section image"
          width={1144}
          height={700}
          className="w-full"
        />

        <div className="grid place-items-center text-center mt-6">
          <h3 className="text-3xl sm:text-4xl font-bold px-4">FLIGHT ESSENTIALS</h3>
          <h3 className="text-base sm:text-lg mt-4 sm:mt-6 px-4">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </h3>
        </div>

        {/* Button */}
        <div className="flex justify-center sm:justify-start sm:ml-[45%] text-sm mt-6 sm:mt-[2%] mb-10">
          <Link href="/Login">
            <button className="bg-black text-white rounded-full px-4 py-2">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="px-4 sm:px-[4%]">
        <Essentials />
      </div>
    </>
  )
}

export default Hero







