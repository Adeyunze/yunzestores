import React from 'react';
import productImg from '../img/sportswear.png'

const Advert = () => {
    return (
        <article className='advert mt-20'>
            <div className='lg:px-24 px-12 h-full sm:h-[50vh] bg-[#282828] flex justify-between'>
                <div className='z-10 relative md:pb-auto pb-12 pt-12 '>
                    <h1 className='text-white text-2xl sm:text-4xl pb-5'>Nike sportwear hoddie</h1>
                    <button className='header-btn hover:opacity-[0.75]'>Shop Now</button>
                </div>
                <img src={productImg} alt="product-img" className='h-[100%] shrink-1  right-auto md:right-[5rem] z-0 md:block hidden' />
            </div>
        </article>
    );
};

export default Advert;
