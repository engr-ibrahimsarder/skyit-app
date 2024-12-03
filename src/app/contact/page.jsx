import Image from 'next/image';
import React from 'react';
import image_1 from '../../../public/images/img-1.jpg'
import SectionTitle from '@/components/shared/SectionTitle';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const page = () => {
    return (
        <div className="max-w-[1440px] mx-auto gap-4 p-4">
            <SectionTitle heading="Get in touch with Us"></SectionTitle>

            {/* <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-4">
                <div className="lg:w-[350px] md:w-[320px] sm:w-[280px] mx-auto">
                    <form action="">
                        <div className="form-control">
                            <div className="label">
                                <span className="label-text font-bold">Select Your Purpose</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected></option>
                                <option>Web Development</option>
                                <option>Soft Development</option>
                                <option>Mobile App Development</option>
                                <option>Digital Marketing</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Phone</span>
                            </label>
                            <input type="number" name="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Company</span>
                            </label>
                            <input type="text" name="company" className="input input-bordered" required />
                        </div>


                        <div className="form-control mt-6">
                            <input className="text-white btn bg-[#eb4034]" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>

                <Image
                    className="border mx-auto"
                    alt=""
                    src={image_1}
                    width={500}
                    height={300}
                />
            </div> */}
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-4 mb-8'>
                <div>
                    <h1 className='text-5xl font-bold'>Get in touch with Us</h1>
                    <p>
                        Why I say old chap that is spiffing, young delinquent in my flat bloke
                        buggered what a plonker.
                    </p>
                </div>
                <div>
                    <Image
                        className="border mx-auto"
                        alt=""
                        src={image_1}
                        width={500}
                        height={300}
                    />
                </div>
            </div>
            <div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-4'>
                    <div>
                        <h4 className='text-xl font-semibold'>Our Location</h4>
                        <p>2/H, 2/23 Mirpur
                            Dhaka 1216, Bangladesh
                        </p>
                        <h4 className='text-xl font-semibold mt-4'>Say Hello</h4>
                        <p className='flex items-center gap-2'><FaPhone /> +092394779303</p>
                        {/* <div className="divider divider-neutral w-[100px]"></div> */}
                        <p className='flex items-center gap-2 mt-2'> <MdEmail /> info@skyit-bd.com</p>

                    </div>
                    <div className='mx-auto'>
                        <form action="">
                            <div className="form-control">
                                <div className="label">
                                    <span className="label-text font-bold">Select Your Purpose</span>
                                </div>
                                <select className="select select-bordered  rounded-full">
                                    <option disabled selected></option>
                                    <option>Web Development</option>
                                    <option>Soft Development</option>
                                    <option>Mobile App Development</option>
                                    <option>Digital Marketing</option>
                                </select>
                            </div>

                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-between gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="name" name="name" className="input input-bordered rounded-full " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name="email" className="input input-bordered rounded-full" required />
                                </div>
                            </div>

                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Phone</span>
                                </label>
                                <input type="number" name="phone" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Company</span>
                                </label>
                                <input type="text" name="company" className="input input-bordered rounded-full" required />
                            </div>


                            <div className="form-control mt-6">
                                <input className="text-white btn bg-[#eb4034]  rounded-full" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default page;

{/* <textarea
                        id="OrderNotes"
                        className="mt-2 p-4 w-full rounded-lg input input-bordered align-top shadow-sm sm:text-sm"
                        rows="4"
                        placeholder="Leave a massage..."
                    ></textarea> */}