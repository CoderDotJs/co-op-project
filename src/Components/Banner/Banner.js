import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination, Autoplay
  } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Banner.css'
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Pagination, Autoplay]);

const Banner = () => {

  const navigate = useNavigate();

  

    return (
        <div id="banner" >
            <Swiper autoplay={{ delay: 5000 }} direction={'vertical'} pagination={{
              "clickable": true
            }} className="mySwiper">

                {/* slide 1  */}
              <SwiperSlide>
                  <div className="banner-container">
                      <div className="banner-text">
                      <h4>Organic 100% Genuine Products Served.</h4>
                      <h1>Organic & <span>Healthy</span><br /> Food Everyday</h1>
                      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit.</h5>
                      <button onClick={()=> navigate('/products')}>Shop Now +</button>
                      </div>
                  <div className="banner-img-container">
                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/07/h7-bg-slider1.jpg" alt="adf" className='banner-img' style={{position: 'fixed'}}/>
                  </div>
                  </div>

              </SwiperSlide>
              
                {/* slide 2 */}

              <SwiperSlide>
              <div className="banner-container">
                      <div className="banner-text">
                      <h4>Organic 100% Genuine Products Served.</h4>
                      <h1>Organic & <span>Healthy</span><br /> Food Everyday</h1>
                      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit.</h5>
                      <button onClick={()=> navigate('/products')}>Shop Now +</button>
                      </div>
                  <div className="banner-img-container">
                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/07/h7-bg-slider2.jpg" alt="adf" className='banner-img' style={{position: 'fixed'}}/>
                  </div>
                  </div>
              </SwiperSlide>

                {/* slide 3 */}

              <SwiperSlide>
              <div className="banner-container">
                      <div className="banner-text">
                      <h4>Organic 100% Genuine Products Served.</h4>
                      <h1>Organic & <span>Healthy</span><br /> Food Everyday</h1>
                      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit.</h5>
                      <button onClick={()=> navigate('/products')}>Shop Now +</button>
                      </div>
                  <div className="banner-img-container">
                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/07/h7-bg-slider3.jpg" alt="adf" className='banner-img' style={{position: 'fixed'}}/>
                  </div>
                  </div>
              </SwiperSlide>
              </Swiper>
        </div>
    );
};

export default Banner;