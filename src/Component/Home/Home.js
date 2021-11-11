import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import Cars from './Cars/Cars';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Cars></Cars>
           <Contact></Contact>
        </div>
    );
};

export default Home;