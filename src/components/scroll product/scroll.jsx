import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './scroll.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import catone from "../../img/cat-1.jpg"
import cattwo from "../../img/cat-2.jpg"
import catthree from "../../img/cat-3.jpg"
import catfour from "../../img/cat-4.jpg"
import catfive from "../../img/cat-5.jpg"

export default function Scroll() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='edit'>
          <img src={catone} />
        <h3>Fresh Fruits</h3>

          
        </SwiperSlide>
        <SwiperSlide className='edit'>
          <img src={cattwo} />
                  <h3>Dried Fruits</h3>

        </SwiperSlide>
        <SwiperSlide className='edit'>
          <img src={catthree}/>
                  <h3>Vegetables</h3>

        </SwiperSlide>
        <SwiperSlide className='edit'>
          <img src={catfour} />
                  <h3>Drink Fruits</h3>

        </SwiperSlide>
        <SwiperSlide className='edit'>
          <img src={catfive} />
          <h3>Meat food</h3>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
