import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReview from '../HomeReview/HomeReview';


const Home = () => {
    return (
        <div>
            <Banner />
            <HomeProducts />
            <HomeReview/>
            <Brands />
            
        </div>
    );
};

export default Home;