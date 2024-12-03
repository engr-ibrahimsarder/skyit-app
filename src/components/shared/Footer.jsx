import React from 'react';

const Footer = () => {
    return (
        <div className='mx-auto max-w-[1440px]'>
            <footer className="footer text-base-content p-10">
                <nav className=''>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer text-base-content">

                <footer className="footer footer-center  text-base-content pb-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Sky IT LTD.</p>
                    </aside>
                </footer>
            </footer>
        </div>
    );
};

export default Footer;