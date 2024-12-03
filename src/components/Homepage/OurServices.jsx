import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { FaFingerprint } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
const OurServices = () => {
    return (
        <div className='max-w-[1440px] mx-auto  p-4'>
            <SectionTitle heading="Our Core Services"></SectionTitle>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 text-center">

                <div className="p-6 shadow-lg rounded bg-[#DDE8F0] ">
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h2><FaWebflow /></h2>
                        {/* <img src="" alt="" /> */}
                        <h1 className="text-xl font-bold ">Custom Software</h1>
                        <p>We are devoted to help you and broaden your horizon with our dynamic team in custom digital software experience. We use the most advanced approaches, and our team is liable to deploy their skills to create and design your dream. Our result-driven team works to develop client-server Apps, CRM, ERP, TMS, and other platforms for businesses from start-ups to enterprise-level to unlock the true potential of the business.  <span className='text-blue-400 text-xs'>Learn More...</span></p>
                    </div>
                </div>
                <div className="p-6 shadow-lg rounded bg-[#DDE8F0] ">
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h2><FaFingerprint/></h2>
                        {/* <img src="" alt="" /> */}
                        <h1 className="text-xl font-bold ">Web App Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur dolorem eos cumque architecto cum id ab dolores doloremque neque in minima quas, rem amet quidem cupiditate? Saepe animi mollitia velit, officiis aliquam consequatur blanditiis, qui ducimus, nam dolor laudantium nihil soluta amet. Facilis at natus vero nulla distinctio voluptatum. <span className='text-blue-400 text-xs'>Learn More...</span></p>
                    </div>
                </div>
                <div className="p-6 shadow-lg rounded bg-[#DDE8F0] ">
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h2>Logo</h2>
                        {/* <img src="" alt="" /> */}
                        <h1 className="text-xl font-bold ">E-commerce Solution</h1>
                        <p>We are a full-fledged e-commerce solution provider for your business trip. Today’s business across the world needs more online setups that you can’t do with only the physical setup. So, boost up your online sale, and spread your business across the globe. Just seatback to our developers and enjoy the lead conversion and an apt setup of your business strategies. You can hire our expert team for a short course of time. <span className='text-blue-400 text-xs'>Learn More...</span></p>
                    </div>
                </div>
                <div className="p-6 shadow-lg rounded bg-[#DDE8F0] ">
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h2>Logo</h2>
                        {/* <img src="" alt="" /> */}
                        <h1 className="text-xl font-bold ">CRM and ERP Software</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur dolorem eos cumque architecto cum id ab dolores doloremque neque in minima quas, rem amet quidem cupiditate? Saepe animi mollitia velit, officiis aliquam consequatur blanditiis, qui ducimus, nam dolor laudantium nihil soluta amet. Facilis at natus vero nulla distinctio voluptatum. <span className='text-blue-400 text-xs'>Learn More...</span></p>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default OurServices;