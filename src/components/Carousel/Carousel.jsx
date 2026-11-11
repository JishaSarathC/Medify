import React from 'react';
import CarImage1 from "../../assets/car1.png";
import CarImage2 from "../../assets/car2.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
export default function Carousel(){
  const images=[CarImage1, CarImage2, CarImage1,CarImage2,CarImage1];
  return (
    <Swiper
  className="myswiper"
  modules={[Pagination]}
  spaceBetween={20}
  breakpoints={{
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  600: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 20
  }
}}
  pagination={{
    clickable: true,
    }}
    style={{ paddingBottom: "30px", paddingTop: "30px" }}
>
      {images.map((img,index)=>(
        <SwiperSlide key={index}>
          <img src={img} alt={`car-${index}`} className="carousel-img" />

        </SwiperSlide>
      ))}
    </Swiper>
    
  );
}
