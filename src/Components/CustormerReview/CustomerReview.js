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
              <h4>Tom Hanks</h4>
              <h6 style={{color: '#61CE70'}}>Front End Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://p2.piqsels.com/preview/876/356/902/boy-businessman-close-up-eyes.jpg" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Will Smith</h4>
              <h6 style={{color: '#61CE70'}}>Back End Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOnsibCI6/IjU1MSIsImgiOiI4MDAi/fX0sImlkIjoiaTcxNTk4/NjgiLCJmIjoianBnIn0;.jpg" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Tim Roxet</h4>
              <h6 style={{color: '#61CE70'}}>UI/UX Developer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://i.pinimg.com/736x/29/12/d1/2912d1ba7094c8a9ee48455e3be1b002.jpg" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Millie Brown</h4>
              <h6 style={{color: '#61CE70'}}>Valueable Customer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOiIzMjAi/fSwiaWQiOiJpMTI1OTM1/MiIsImYiOiJqcGcifQ;;.jpg" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Emily Hanlks</h4>
              <h6 style={{color: '#61CE70'}}>Customer</h6>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="mb-4">
          <div>
            <div className="customer-img-div">
              <img src="https://stylesatlife.com/wp-content/uploads/2021/09/Jennifer-Lawrence-mole-on-face.jpg.webp" alt="" id="customer-img"/>
            </div>
            <div>
              <q className="fs-normal fw-light text-muted d-block my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eius!</q>
              <h4>Emma Watson</h4>
              <h6 style={{color: '#61CE70'}}>Customer</h6>
            </div>
          </div>
      </SwiperSlide>
      
      
      </Swiper>
        </Container>
        </>
    );
};

export default CustomerReview;