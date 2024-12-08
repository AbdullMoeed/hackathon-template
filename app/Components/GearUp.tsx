'use client';

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const GearUp: React.FC = () => {
  const menSwiperRef = useRef<any>(null);
  const womenSwiperRef = useRef<any>(null);

  const menItems = [
    {
      image: "/Images/men-tshirt.png",
      title: "Nike Dri-FIT ADV TechKnit Ultra",
      category: "Men's Short-Sleeve Running Top",
      price: "₹ 3,895",
    },
    {
      image: "/Images/men-shorts.png",
      title: "Nike Dri-FIT Challenger",
      category: "Men's 2-in-1 Versatile Shorts",
      price: "₹ 2,495",
    },
  ];

  const womenItems = [
    {
      image: "/Images/women-tshirt.png",
      title: "Nike Dri-FIT ADV Run Division",
      category: "Women's Long-Sleeve Running Top",
      price: "₹ 5,295",
    },
    {
      image: "/Images/women-trouser.png",
      title: "Nike Fast",
      category: "Women's 7/8 Running Leggings with Pockets",
      price: "₹ 3,795",
    },
  ];

  const handlePrev = (swiperRef: React.MutableRefObject<any>) => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = (swiperRef: React.MutableRefObject<any>) => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="airmax-section">
      <div className="header">
        <h2>Gear Up for the Best</h2>
      </div>

      <div className="items-container">
        {/* Men Section */}
        <div className="section men-section">
          <div className="arrows flex gap-2 mb-4">
            <button
              className="arrow"
              onClick={() => handlePrev(menSwiperRef)}
            >
              <ChevronLeft size={20} color="white" />
            </button>
            <button
              className="arrow"
              onClick={() => handleNext(menSwiperRef)}
            >
              <ChevronRight size={20} color="white" />
            </button>
          </div>
          <Swiper
            onSwiper={(swiper) => (menSwiperRef.current = swiper)}
            slidesPerView={2}
            spaceBetween={20}
            modules={[Navigation]}
            className="mySwiper"
          >
            {menItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <Image src={item.image} alt={item.title} width={300} height={300} />
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                  <p className="price">{item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Women Section */}
        <div className="section women-section">
          <div className="arrows flex gap-2 mb-4">
            <button
              className="arrow"
              onClick={() => handlePrev(womenSwiperRef)}
            >
              <ChevronLeft size={20} color="white" />
            </button>
            <button
              className="arrow"
              onClick={() => handleNext(womenSwiperRef)}
            >
              <ChevronRight size={20} color="white" />
            </button>
          </div>
          <Swiper
            onSwiper={(swiper) => (womenSwiperRef.current = swiper)}
            slidesPerView={2}
            spaceBetween={20}
            modules={[Navigation]}
            className="mySwiper"
          >
            {womenItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <Image src={item.image} alt={item.title} width={300} height={300} />
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                  <p className="price">{item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .airmax-section {
          padding: 20px;
        }
        .header h2 {
          font-size: 1.5rem;
        }
        .arrows {
          display: flex;
        }
        .arrow {
          background-color: #f5f5f5;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          cursor: pointer;
        }
        .arrow:hover {
          background-color: darkgray;
        }
        .items-container {
          display: flex;
          justify-content: space-between;
        }
        .section {
          width: 48%;
        }
        .card {
          text-align: center;
          padding: 15px;
        }
        .price {
          color: #ff0000;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default GearUp;
