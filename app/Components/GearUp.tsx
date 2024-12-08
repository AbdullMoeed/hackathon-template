
'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importing arrows from React Lucide
import Image from "next/image";

const GearUp = () => {
  const menSwiperRef = useRef(null); // Reference for men's swiper
  const womenSwiperRef = useRef(null); // Reference for women's swiper

  const menItems = [
    {
        image: "/Images/men-tshirt.png",
        title: "Nike Dri-FIT ADV TechKnit Ultra",
        category: "Men's Men's Short-Sleeve Running Top",
        price: "₹ 3 895",
      },
      {
        image: "/Images/men-shorts.png",
        title: "Nike Dri-FIT Challenger",
        category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
        price: "₹ 2 495",
      },
  ];

  const womenItems = [
    {
        image: "/Images/women-tshirt.png",
        title: "Nike Dri-FIT ADV Run Division",
        category: "Women's Long-Sleeve Running Top",
        price: "₹ 5 295",
      },
      {
        image: "/Images/women-trouser.png",
        title: "Nike Fast",
        category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
        price: "₹ 3 795",
      },
  ];

  const handlePrevMen = () => {
    if (menSwiperRef.current) {
      menSwiperRef.current.swiper.slidePrev();
    }
  };
  
  const handleNextMen = () => {
    if (menSwiperRef.current) {
      menSwiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevWomen = () => {
    if (womenSwiperRef.current) {
      womenSwiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextWomen = () => {
    if (womenSwiperRef.current) {
      womenSwiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="airmax-section">
      <div className="header">
        <h2>Best of Air Max</h2>
      </div>

      {/* Container for Men and Women sections */}
      <div className="items-container">
        {/* Men Section */}
        <div className="section men-section">
          <div className="arrows">
            <div className="ml-[60%] mb-[1%] flex gap-2 ">
              <div className="arrow" onClick={handlePrevMen}>
                <ChevronLeft size={20} color="white" />
              </div>
              <div className="arrow" onClick={handleNextMen}>
                <ChevronRight size={20} color="white" />
              </div>
            </div>
          </div>
          <Swiper
            ref={menSwiperRef}
            slidesPerView={2}
            spaceBetween={20}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {menItems.map((item, index) => (
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
        </div>

        {/* Women Section */}
        <div className="section women-section">
          <div className="arrows ml-[70%] mb-[1%]">
            <div className="arrow" onClick={handlePrevWomen}>
              <ChevronLeft size={20} color="white" />
            </div>
            <div className="arrow" onClick={handleNextWomen}>
              <ChevronRight size={20} color="white" />
            </div>
          </div>
          <Swiper
            ref={womenSwiperRef}
            slidesPerView={2}
            spaceBetween={20}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {womenItems.map((item, index) => (
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
        </div>
      </div>

      <style jsx>{`
        .airmax-section {
          padding: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        h2 {
          font-size: 1.5rem;
        }
        .arrows {
          display: flex;
          gap: 10px;
        }
        .arrow {
          background-color: #F5F5F5; /* Default back arrow color */
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
        .arrow:nth-child(2) {
          background-color: #E5E5E5; /* Forward arrow color */
        }
        .mySwiper {
          position: relative;
        }
        .card {
          text-align: center;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 15px;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
        .price {
          color: #ff0000;
          font-weight: bold;
        }

        .items-container {
          display: flex;
          justify-content: space-between;
        }

        .section {
          width: 48%; /* Adjust width of each section */
        }

        .men-section {
          margin-right: 10px;
        }

        .women-section {
          margin-left: 10px;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) { /* Medium screens (tablets) */
          .items-container {
            flex-direction: column;
            align-items: center;
          }
          .section {
            width: 80%; /* Adjust width of each section on tablet */
            margin-bottom: 20px; /* Add space between sections */
          }

          .arrows {
            margin-left: 0;
            justify-content: center; /* Center arrows */
            margin-bottom: 10px;
          }

          .arrows .arrow {
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 768px) { /* Small screens (phones) */
          .items-container {
            flex-direction: column;
            align-items: center;
          }
          .section {
            width: 90%; /* Adjust width of each section on small screen */
            margin-bottom: 20px; /* Add space between sections */
          }

          .arrows {
            justify-content: center; /* Center arrows */
            margin-bottom: 10px;
          }

          .arrows .arrow {
            width: 30px;
            height: 30px;
          }

          .mySwiper {
            .swiper-slide {
              width: 100%; /* Adjust swiper slides to be full width */
            }
          }
        }
      `}</style>
    </div>
  );
};

export default GearUp;
