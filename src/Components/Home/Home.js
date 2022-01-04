import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Section2 from '../Section2/Section2';
import CustomerReview from '../CustormerReview/CustomerReview';
import SubBanner from './../SubBanner/SubBanner';
import WhyUs from './../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <SubBanner />
            <Products />
            <WhyUs />
            <CustomerReview />
        </div>
    );
};

export default Home;