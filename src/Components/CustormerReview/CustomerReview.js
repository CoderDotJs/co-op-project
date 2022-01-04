import React from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./CustomerReview.css";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation, Autoplay
} from 'swiper';
import { Container } from 'react-bootstrap';

// install Swiper modules
SwiperCore.use([Pagination,Navigation, Autoplay]);

const CustomerReview = () => {
    return (
        <>
         <h2 className="mt-5">Our Customers Feedback</h2>
        <Container fluid className="bg-light">

         
        <Swiper 
        autoplay={{ delay: 5000 }} 
        slidesPerView={3} 
        spaceBetween={30} 
        slidesPerGroup={3} 
        loop={true} 
        loopFillGroupWithBlank={false} 
        pagination={{
        "clickable": true,
        }} 
        navigation={false}
        breakpoints={{
          // when window width is >= 640px
          300:{
            width: 300,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          576: {
            width: 576,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            slidesPerGroup: 2,
          }
        }}
        className="container mx-auto my-5  py-5">

      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Md Akash</h4>
              <h6 style={{color: '#61CE70'}}>Front End Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Md Akash</h4>
              <h6 style={{color: '#61CE70'}}>Front End Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Md Akash</h4>
              <h6 style={{color: '#61CE70'}}>Front End Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Md Akash</h4>
              <h6 style={{color: '#61CE70'}}>Front End Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Md Akash</h4>
              <h6 style={{color: '#61CE70'}}>Front End Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Md Akash</h4>
              <h6 style={{color: '#61CE70'}}>Front End Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      
      
      </Swiper>
        </Container>
        </>
    );
};

export default CustomerReview;