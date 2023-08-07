import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='bg-[#2699fb]  p-[100px]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-10'>
                <div>
                    <h2 className='text-2xl font-bold mb-2'>WsCube Tech.</h2>
                    <p className='text-white mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officiis?</p>
                    <div className='flex gap-10'>
                        <AiOutlineFacebook className='text-3xl' />
                        <AiOutlineInstagram className='text-3xl' />
                        <AiOutlineTwitter className='text-3xl' />
                        <AiFillGithub className='text-3xl' />
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl'>solutions</h2>
                    <div className='text-white mt-2'>
                        <p>Analyits</p>
                        <p>Marketing</p>
                        <p>Commerce</p>
                        <p>lnsights</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl  mt-2'>Support</h2>
                    <div className='text-white mt-2'>
                        <p>Pricing</p>
                        <p>Documention</p>
                        <p>Guides</p>
                        <p>API Slalus</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl mt-2'>Company</h2>
                    <div className='text-white mt-2'>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Careers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;