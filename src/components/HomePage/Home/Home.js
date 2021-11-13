import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import HomeProducts from '../HomeProducts/HomeProducts';


const Home = () => {
    return (
        <div>
            <Banner />
            <HomeProducts />
            <Brands/>
        </div>
    );
};

export default Home;