import React from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation, Autoplay]);

const CustomerReview = () => {
    return (
        <>
        <Swiper 
        autoplay={{ delay: 5000 }} 
        slidesPerView={3} 
        spaceBetween={30} 
        slidesPerGroup={3} 
        loop={true} 
        loopFillGroupWithBlank={true} 
        pagination={{
        "clickable": true
        }} 
        navigation={false} 
        className="mySwiper">

      <SwiperSlide>
            
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      
      </Swiper>
        </>
    );
};

export default CustomerReview;