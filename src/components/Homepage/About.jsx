import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';

const About = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            {/* <SectionTitle heading="WHO WE ARE"></SectionTitle> */}
            <div className="p-4 grid lg:grid-cols-2 items-center gap-4">
                <div>
                    <h1 className='text-3xl font-bold'>SkyIt</h1>
                    <p>
                        started its journey with the determination of enabling organizations to leverage technology for betterment. Our priority is to deliver impactful solutions with superior user<span className='text-red-600'> ----this paragraph will change----</span> experience. we are highly designed focused and practice SCRUM to meet clients requirements and deliver solutions in time and within budget.

                    </p>
                </div>
                <div className='flex gap-4 text-center mx-auto'>
                    <div className='border p-2'>
                        <h2>image</h2>
                        <h5 className='text-5xl font-semibold'>6+</h5>
                        <p>Years Experience <br /> in App Development</p>
                    </div>
                    <div className='border p-2'>
                        <h2>image</h2>
                        <h5 className='text-5xl font-semibold'>28</h5>
                        <p>Mobile Apps <br />
                            Developed</p>
                    </div>
                    <div className='border p-2'>
                        <h2>image</h2>
                        <h5 className='text-5xl font-semibold'>25</h5>
                        <p>Websites <br /> Developed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;