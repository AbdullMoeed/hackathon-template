'use client';

import React from "react";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css"; // Swiper CSS is required
import "swiper/css/navigation"; // Optional: Add more if needed
import { Swiper as SwiperInstance } from "swiper/types"; // Import Swiper types

// Dynamically import Swiper and SwiperSlide
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });

const AirMaxSection: React.FC = () => {
  const items = [
    {
      image: "/Images/shoe1.png",
      title: "Nike Air Max Pulse",
      category: "Womens Shoes",
      price: "₹ 13,995",
    },
    {
      image: "/Images/shoe2.png",
      title: "Nike Air Max Pulse",
      category: "Mens Shoes",
      price: "₹ 13,995",
    },
    {
      image: "/Images/shoe3.png",
      title: "Nike Air Max 97 SE",
      category: "Mens Shoes",
      price: "₹ 16,995",
    },
    {
      image: "/Images/shoe1.png",
      title: "Nike Air Max Pulse",
      category: "Womens Shoes",
      price: "₹ 13,995",
    },
  ];

  const handlePrev = () => {
    if (typeof window !== "undefined") {
      const swiperElement = document.querySelector(".swiper") as HTMLElement & { swiper: SwiperInstance };
      if (swiperElement?.swiper) {
        swiperElement.swiper.slidePrev();
      }
    }
  };

  const handleNext = () => {
    if (typeof window !== "undefined") {
      const swiperElement = document.querySelector(".swiper") as HTMLElement & { swiper: SwiperInstance };
      if (swiperElement?.swiper) {
        swiperElement.swiper.slideNext();
      }
    }
  };

  return (
    <div className="airmax-section">
      {/* Header Section */}
      <div className="header flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Best of Air Max</h2>
        <div className="arrows flex gap-4">
          <button
            className="arrow bg-gray-800 text-white p-2 rounded-full"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="arrow bg-gray-800 text-white p-2 rounded-full"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper slidesPerView={3} spaceBetween={20} className="mySwiper">
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-white p-4 rounded-lg shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="rounded-lg object-contain"
              />
              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className="price text-gray-800 font-bold mt-2">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AirMaxSection;
