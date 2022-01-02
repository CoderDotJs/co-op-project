import React from 'react';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Cart />
        </div>
    );
};

export default Home;