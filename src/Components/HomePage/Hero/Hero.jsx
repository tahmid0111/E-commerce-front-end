import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Thumbs, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css/bundle';
import SingleHero from './SingleHero';

const Hero = () => {
  const  [sliders, setSliders] = useState([])


  useEffect(() => {
    fetch("http://localhost:8080/product/api/v1/allsliders")
    .then((res) => res.json())
    .then((data) => setSliders(data.data));
  }, [])
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Thumbs, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    >
      
      {
        sliders.map((item, i) => (
          <SwiperSlide key={i}>
            <SingleHero item={item} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default Hero
