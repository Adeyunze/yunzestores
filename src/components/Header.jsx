import React from 'react';
import headerImg from '../img/headerImg.png';

const Header = () => {
    return (
        <header className='bg-[#282828] pt-[10vh]'>
            <div className='container flex flex-row justify-between items-center w-[100vw] h-full px-12 lg:px-24'>
                <div className="right shrink md:shrink-0">
                    <h1 className='playfair lg:text-4xl md:text-3xl text-3xl'>A Simple guide to minimalist style</h1>
                    <a href="/shop" className='header-btn hover:opacity-[0.75]'>Shop Now</a>
                </div>
                <div className="header-img shrink-0 items-center">
                    <img src={headerImg} alt="headerimg" />
                </div>
            </div>
        </header>
    )
}

export default Header;
