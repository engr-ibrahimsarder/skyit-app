import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import img2 from '../../../public/images/img-2.png'

const AWord = () => {
    return (
        <div className='p-2'>
            {/* <div className='bg-[#f5f5f5] p-2'> */}
            <SectionTitle heading="WHO WE ARE"></SectionTitle>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-items-end p-4">
                {/* <div>

                    <h2>Image....Loading</h2>
                </div>
                <div>
                    <p className="text-2xl italic">
                        We believe that each of our individuals is an expert. And it is their utmost responsibility to work with passion. Our main priority is to serve the clients with quality content on time. And our team will ensure you with an effective result. The proper utilization of skills will reflect in the overall performance of the company. And by cherishing this strong belief we are heading towards our goal.
                    </p>
                </div> */}

                <div>
                    <p>
                        Our mission is to transform ideas into digital products and enable organizations to leverage technology for betterment. Our priority is to deliver impactful digital solutions with superior user experience. We build such a solution that can accelerate the growth of your business.
                    </p>

                </div>
                <div>
                    <Image
                        className="border"
                        alt=""
                        src={img2}
                        width={200}
                        height={200}
                    />
                </div>

            </div>
        </div>
    );
};

export default AWord;