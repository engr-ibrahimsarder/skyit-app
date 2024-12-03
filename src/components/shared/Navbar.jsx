import Link from 'next/link';
import React from 'react';
import DarkMode from './DarkMode';
import FormElementsToggleLgDayNight from './DarkTwo';
import Image from 'next/image';
// import FormElementsToggleLgDayNight from './DarkTwo';
import log from '../../../public/images/logo.png'

const Navbar = () => {

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About Us",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Portfolio",
            path: "/portfolio"
        },
        {
            title: "Contact Us",
            path: "/contact"
        }

    ]

    return (
        <div className=''>
            <div className="navbar mx-auto max-w-[1440px]">
                <div className="navbar-start">
                    <Link href='/'>
                        <Image
                            className=""
                            alt=""
                            src={log}
                            width={200}
                            height={100}
                        />
                    </Link>
                </div>
                <div className="navbar-end">
                    {/* Dropdown for mobile */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 left-auto">
                            {
                                links.map((link) =>
                                    <li key={link.path}>
                                        <Link href={link.path}>{link.title}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold ">
                            {
                                links.map((link) =>
                                    <li key={link.path}>
                                        <Link href={link.path}>{link.title}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <DarkMode></DarkMode>
                {/* <FormElementsToggleLgDayNight></FormElementsToggleLgDayNight> */}
            </div>
        </div>


    );
};

export default Navbar;