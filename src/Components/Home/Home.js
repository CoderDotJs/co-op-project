import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import CustomerReview from '../CustormerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Section1 />
            <Products />
            <Section2 />
            <CustomerReview />
        </div>
    );
};

export default Home;