import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../about us/AboutUs';
import Programs from '../Programs/Programs';
import PopularClasses from '../PopularClass/PopularClasses';
import PopularInstructor from '../popularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Programs></Programs>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;