"use client"
import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 6000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div>
            <section
                className="relative bg-gradient-to-r from-[#004581] to-[#018ABD] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="text-white relative mx-auto max-w-[1440px] px-4 py-32 border sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    {/* <div className="text-left text-white ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <span>Outstanding Business</span>
                            <br />
                            Needs Better Apps
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div> */}
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">
                            <h1 className="text-3xl font-extrabold sm:text-5xl">
                                <span>Outstanding Business</span>
                                <br />
                                Needs Better Apps
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            <h1 className="text-3xl font-extrabold sm:text-5xl">
                                <span>Outstanding Business</span>
                                <br />
                                Needs Better Apps
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>
                        </div>
                        {/* <div className="keen-slider__slide number-slide3">3</div>
                        <div className="keen-slider__slide number-slide4">4</div>
                        <div className="keen-slider__slide number-slide5">5</div>
                        <div className="keen-slider__slide number-slide6">6</div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;