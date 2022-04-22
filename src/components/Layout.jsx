/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { links } from '../data';
import logo from '../img/Yunzestores.png';
import { BsBag, BsHeart } from 'react-icons/bs';
import { RiMenu2Fill } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Cart from './Cart';


const Layout = () => {
    const [toggleLinks, setToggleLinks] = useState(false);    
    return (
        <div>
            <nav className='w-screen lg:px-24 px-12 py-2 bg-[#282828] flex justify-between md:items-center z-10  sticky top-0'>
                <div className='block md:flex sm:items-center md:justify-between lg:w-[60vw] w-[70vw]'>
                    <div className="logo shrink-0">
                        <Link to="/">
                            <img src={logo} alt="logo" className='w-24' />
                        </Link>
                        
                    </div> 
                    <div className={`${toggleLinks ? "links-container text-[#C0C0C0] flex flex-col rounded-b-lg md:mt-0 md:flex-row md:justify-between md:w-96 capitalize font-medium shrink-0 mt-6 overflow-hidden" : "links-container text-[#C0C0C0] flex flex-col justify-center md:mt-0 md:flex-row  md:w-96 capitalize font-medium shrink-0 h-0 overflow-hidden"}`}>
                        {links.map((link)=> {
                            const {id, url, text} = link;
                            return (
                                <Link key={id} to={url} className='py-2 hover:text-white px-3'>{text}</Link>
                            )
                        })}
                    </div>
                </div>
                
                <div className="elements flex  items-start w-16 mt-3 md:mt-0 cursor-pointer">
                    <button className='text-[#C0C0C0] text-xl cursor-pointer hover:text-white'>
                        <BsBag/>
                    </button>
                    <button className='text-[#C0C0C0] text-xl cursor-pointer hover:text-white ml-3'>
                        <BsHeart />
                    </button>
                    
                </div>
                <div className='block md:hidden'>
                    <button className='text-[#C0C0C0] text-xl mt-3 ml-6 cursor-pointer hover:text-white hover:rotate-90 transition' onClick={()=> setToggleLinks(!toggleLinks)}>
                        <RiMenu2Fill/>
                    </button>
                </div> 
            </nav>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;
