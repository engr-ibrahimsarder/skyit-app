import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import SectionTitleTwo from '../shared/SectionTitleTwo';
import img1 from '../../../public/images/services/1.png'
import img2 from '../../../public/images/services/2.png'
import img3 from '../../../public/images/services/3.png'
import img4 from '../../../public/images/services/4.png'
import img5 from '../../../public/images/services/5.png'
import img6 from '../../../public/images/services/6.png'
import Image from 'next/image';

const Services = () => {
    return (
        <div>
            <SectionTitle heading="Our Services"></SectionTitle>
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    <div className=' bg-[#DDE8F0] p-2 flex flex-col items-center text-center shadow-sm transform transition duration-300 hover:scale-105'>
                        <Image src={img1}></Image>
                        <SectionTitleTwo heading="Custom Software"></SectionTitleTwo>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in deleniti quidem recusandae enim eveniet autem nobis molestiae voluptas vel?</p>
                    </div>
                    <div className=' bg-[#DDE8F0] p-2 flex flex-col items-center text-center shadow-sm transform transition duration-300 hover:scale-105'>
                        <Image src={img2}></Image>
                        <SectionTitleTwo heading="ERP Software"></SectionTitleTwo>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in deleniti quidem recusandae enim eveniet autem nobis molestiae voluptas vel?</p>
                    </div>
                    <div className=' bg-[#DDE8F0] p-2 flex flex-col items-center text-center shadow-sm transform transition duration-300 hover:scale-105'>
                        <Image src={img3}></Image>
                        <SectionTitleTwo heading="Mobile Application Development"></SectionTitleTwo>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in deleniti quidem recusandae enim eveniet autem nobis molestiae voluptas vel?</p>
                    </div>
                    <div className=' bg-[#DDE8F0] p-2 flex flex-col items-center text-center shadow-sm transform transition duration-300 hover:scale-105'>
                        <Image src={img4}></Image>
                        <SectionTitleTwo heading="UI/UX"></SectionTitleTwo>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in deleniti quidem recusandae enim eveniet autem nobis molestiae voluptas vel?</p>
                    </div>
                    <div className=' bg-[#DDE8F0] p-2 flex flex-col items-center text-center shadow-sm transform transition duration-300 hover:scale-105'>
                        <Image src={img5}></Image>
                        <SectionTitleTwo heading="SQA and Testing"></SectionTitleTwo>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in deleniti quidem recusandae enim eveniet autem nobis molestiae voluptas vel?</p>
                    </div>
                    <div className=' p-2 flex flex-col items-center text-center shadow-sm  bg-[#DDE8F0] transform transition duration-300 hover:scale-105'>
                        <Image src={img6}></Image>
                        <SectionTitleTwo heading="Complete Support and maintenance"></SectionTitleTwo>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in deleniti quidem recusandae enim eveniet autem nobis molestiae voluptas vel?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;