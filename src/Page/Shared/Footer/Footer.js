import React from 'react';
import footer from '../../../assets/images/footer.png'
const Footer = () => {
    return (

        <footer style={{ background: `url(${footer})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className=" text-black p-20 pb-0 text-neutral-content">
            <div className='footer'>

                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <p className='text-center mt-20 mb-9'>Copyright © 2022 - All right reserved</p>
        </footer>

    );
};

export default Footer;