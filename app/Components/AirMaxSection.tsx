

'use client';

import React from "react";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importing arrows from React Lucide
import Image from "next/image";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });

const AirMaxSection = () => {
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
      const swiperElement = document.querySelector(".swiper") as HTMLElement & { swiper: any };
      if (swiperElement?.swiper) {
        swiperElement.swiper.slidePrev();
      }
    }
  };

  const handleNext = () => {
    if (typeof window !== "undefined") {
      const swiperElement = document.querySelector(".swiper") as HTMLElement & { swiper: any };
      if (swiperElement?.swiper) {
        swiperElement.swiper.slideNext();
      }
    }
  };

  return (
    <div className="airmax-section">
      <div className="header">
        <h2>Best of Air Max</h2>
        <div className="arrows">
          <div className="arrow" onClick={handlePrev}>
            <ChevronLeft size={20} color="white" />
          </div>
          <div className="arrow" onClick={handleNext}>
            <ChevronRight size={20} color="white" />
          </div>
        </div>
      </div>
      <Swiper slidesPerView={3} spaceBetween={20} className="mySwiper">
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <Image src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <p className="price">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        /* Add styles here */
      `}</style>
    </div>
  );
};

export default AirMaxSection;

