
'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importing arrows from React Lucide

const AirMaxSection = () => {
  const items = [
    {
        image: "/Images/shoe1.png",
        title: "Nike Air Max Pulse",
        category: "Women's Shoes",
        price: "₹ 13,995",
      },
      {
        image: "/Images/shoe2.png",
        title: "Nike Air Max Pulse",
        category: "Men's Shoes",
        price: "₹ 13,995",
      },
      {
        image: "/Images/shoe3.png",
        title: "Nike Air Max 97 SE",
        category: "Men's Shoes",
        price: "₹ 16,995",
      },
      {
          image: "/Images/shoe1.png",
          title: "Nike Air Max Pulse",
          category: "Women's Shoes",
          price: "₹ 13,995",
      },
  ];

  const handlePrev = () => {
    const swiperElement = document.querySelector(".swiper") as HTMLElement & { swiper: any };
    if (swiperElement && swiperElement.swiper) {
      swiperElement.swiper.slidePrev();
    }
  };
  
  const handleNext = () => {
    const swiperElement = document.querySelector(".swiper") as HTMLElement & { swiper: any };
    if (swiperElement && swiperElement.swiper) {
      swiperElement.swiper.slideNext();
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
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <p className="price">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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

        /* Responsive Styles */
        @media (max-width: 1024px) { /* Medium screens (tablets) */
          .mySwiper {
            .swiper-slide {
              width: 80%;
            }
          }
        }

        @media (max-width: 768px) { /* Small screens (phones) */
          .mySwiper {
            .swiper-slide {
              width: 100%;
            }
          }
          .header {
            flex-direction: column;
            align-items: flex-start;
          }
          h2 {
            font-size: 1.2rem;
          }
          .arrows {
            justify-content: center;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default AirMaxSection;
