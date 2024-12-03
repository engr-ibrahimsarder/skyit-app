"use client"
import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import git from '../../../public/images/logo/git.png'
import js from '../../../public/images/logo/javascript.png'
import node from '../../../public/images/logo/node.png'
import react from '../../../public/images/logo/react.png'
import tail from '../../../public/images/logo/tail.png'
import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle';

const TechUse = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        rlt: true,
        // mode: "free",
        slides: {
            perView: 6,
            spacing: 15,
        },
    });

    return (
        <div className='max-w-[1440px] mx-auto'>
            <SectionTitle heading='Technology We Use'></SectionTitle>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <Image src={git} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image src={node} alt="" />
                </div>
                {/* <div className="keen-slider__slide number-slide3">
                    <Image src={react} alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <Image src={tail} alt="" />
                </div> */}
                <div className="keen-slider__slide number-slide5">
                    <Image src={js} alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <Image src={git} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image src={node} alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <Image src={js} alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <Image src={js} alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <Image src={git} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image src={node} alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <Image src={js} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TechUse;