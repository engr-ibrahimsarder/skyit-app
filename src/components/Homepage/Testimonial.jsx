"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import SectionTitle from "../shared/SectionTitle";
import Image from 'next/image';

import img1 from '../../../public/images/img-1.jpg'



const Testimonial = () => {

    return (
        <div className="max-w-[1440px] mx-auto">
            <SectionTitle heading='What our client say about us'></SectionTitle>

            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'3'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 100,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px] bg-[#DDE8F0] p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0] p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0] p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-[500px]  bg-[#DDE8F0]  p-4'>
                            <div className='grid grid-cols-2 '>
                                <Image
                                    className=""
                                    alt=""
                                    width={400}
                                    height={300}
                                    src={img1} />
                            </div>
                            <div>
                                <div className='transform transition duration-300 hover:scale-105'>
                                    <h1 className='text-5xl' ></h1>
                                    <h3 className='text-2xl font-bold'>Perfect Responsive</h3>
                                    <p>Our theme is full Perfect for all device. You can visit our theme all device easily.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Testimonial;