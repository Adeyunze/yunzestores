/* eslint-disable no-unused-vars */
import React from 'react';
import { links } from '../data';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col bg-[#282828] text-[#C0C0C0] justify-center items-center pt-5 px-3 mt-6'>
                <div className='flex flex-row w-[100%] md:w-[30%] justify-center pb-5'>
                    {links.map((link)=> {
                                const {id, url, text} = link;
                                return (
                                    <Link key={id} to={url} className='py-2 hover:text-white capitalize font-medium px-3'>{text}</Link>
                                )
                    })}
                </div>             
                <div className="social text-3xl flex w-[200px] md:w-[20%] justify-between">
                    <BsFacebook/>
                    <BsInstagram/>
                    <BsPinterest/>
                    <BsTwitter/>
                </div>
                <p className='text-medium text-[grey] pt-5'>&copy;{new Date().getFullYear()} Yunzestores. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
