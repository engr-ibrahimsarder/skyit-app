"use client"
import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import jomuna from '../../../public/images/client/jomuna.png'
import gazi from '../../../public/images/client/gazi-group.jpg'
import pren from '../../../public/images/client/pran-logo-17F049097A-seeklogo.com.png'
import basu from '../../../public/images/client/bashundhara.jpg'

const CLients = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        rlt: true,
        // mode: "free",
        slides: {
            perView: 4,
            spacing: 50,
        },
    });
    return (
        <div className='max-w-[1440px] mx-auto'>
            <SectionTitle heading='Our Featured Client'></SectionTitle>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <Image src={jomuna} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image src={basu} alt="" />
                </div>
                {/* <div className="keen-slider__slide number-slide3">
                <Image src={react} alt="" />
            </div>
            <div className="keen-slider__slide number-slide4">
                <Image src={tail} alt="" />
            </div> */}
                <div className="keen-slider__slide number-slide5">
                    <Image src={gazi} alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <Image src={pren} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image src={jomuna} alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <Image src={pren} alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <Image src={basu} alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <Image src={gazi} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image src={pren} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CLients;