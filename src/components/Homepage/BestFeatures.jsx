import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiDevices } from "react-icons/pi";
import { FaCircleNodes } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";


const BestFeatures = () => {

    const features = [
        {
            icon: <AiOutlineThunderbolt />,
            title: "Fast Performance",
            description: "Optimized for a smaller build size, faster dev compilation and dozens of other improvements.",
        },
        {
            icon: <PiDevices />,
            title: "Perfect Responsive",
            description: "Our theme is perfect for all devices. You can view it across various screen sizes seamlessly.",
        },
        {
            icon: <FaCode />,
            title: "Well Documented Codes",
            description: "Our code is well documented and easily customizable.",
        },
        {
            icon: <IoPulseOutline />,
            title: "SEO & SMM Friendly",
            description: "Optimized for search engines to help you rank better and get more visibility.",
        },
        {
            icon: <IoMdRefresh />,
            title: "Fast Loading Speed",
            description: "Inbio offers a fast loading speed to improve user experience.",
        },
        {
            icon: <FaCircleNodes />,
            title: "Fast & Friendly Support",
            description: "We provide 24/7 support for our clients. Purchase with confidence!",
        },
    ];

    return (
        <div className='max-w-[1440px] mx-auto p-4'>
            <SectionTitle heading="Awesome Feature"></SectionTitle>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {
                    features.map((feature, index) => (
                        <div key={index} className='shadow-xl rounded p-8'>
                            <div className='transform transition duration-300 hover:scale-105'>
                                <h1 className='text-5xl' >{feature.icon}</h1>
                                <h3 className='text-2xl font-bold'>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default BestFeatures;


{/* <div className='shadow-xl rounded p-8'>
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h1 className='text-5xl' ><PiDevices /></h1>
                        <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                        <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                    </div>

                </div>
                <div className='shadow-xl rounded p-8'>
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h1 className='text-5xl'><FaCode /></h1>
                        <h3 className='text-2xl font-bold'>Well Documented Codes</h3>
                        <p>The Inbio code is awesome well documented code. And Its customization is very easily
                        </p>
                    </div>
                </div>
                <div className='shadow-xl rounded p-8'>
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h1 className='text-5xl'><IoPulseOutline /></h1>
                        <h3 className='text-2xl font-bold'>SEO & SMM Friendly</h3>
                        <p>Inbio can made it ranked first by search engines. Inbio optimized for search engines according to the latest SEO trends and guidelines
                        </p>
                    </div>

                </div>
                <div className='shadow-xl rounded p-8'>
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h1 className='text-5xl'><IoMdRefresh /></h1>
                        <h3 className='text-2xl font-bold'>Fast Loading Speed</h3>
                        <p>Inbio is faster loading speed. Inbio create your theme so much faster
                        </p>
                    </div>

                </div>
                <div className='shadow-xl rounded p-8'>
                    <div className='transform transition duration-300 hover:scale-105'>
                        <h1 className='text-5xl'><FaCircleNodes /></h1>
                        <h3 className='text-2xl font-bold'>Fast & Friendly Support</h3>
                        <p>We are provide 24 hours support for all clients.You can purchase without hesitation.</p>
                    </div>
                </div> */}