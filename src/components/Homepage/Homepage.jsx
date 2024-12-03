import React from 'react';
import Banner from './Banner';
import OurServices from './OurServices';
import Technology from './Technology';
import SDLC from './SDLC';
import About from './About';
import Testimonial from './Testimonial';
import Hello from './Hello';
import TechUse from './TechUse';
import BestFeatures from './BestFeatures';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <About></About> */}
            <BestFeatures></BestFeatures>
            <OurServices></OurServices>
            <Technology></Technology>
            <SDLC></SDLC>
            <TechUse></TechUse>
            <Testimonial></Testimonial>
            <Hello></Hello>
        </div>
    );
};

export default Homepage;