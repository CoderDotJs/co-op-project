import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Section2 from '../Section2/Section2';
import CustomerReview from '../CustormerReview/CustomerReview';
import SubBanner from './../SubBanner/SubBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <SubBanner />
            <Products />
            <Section2 />
            <CustomerReview />
        </div>
    );
};

export default Home;