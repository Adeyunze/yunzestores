/* eslint-disable no-unused-vars */
import React from 'react';
import { shop } from '../productData';
import { Link } from 'react-router-dom';
import  img  from '../../img/sportswear.png';



const Shop = () => {
    return (
        <div>
            <header className='bg-[#282828] pt-[10vh]'>
                <div className='shop-header flex flex-row justify-between items-center w-[100vw] h-full px-12 lg:px-24'>
                    <div className="right shrink md:shrink-0">
                        <p className='text-3xl text-[#282828] bg-white px-5 py-2'>Shop</p>
                    </div>
                    <div className="header-img shrink-0 items-center">
                        <img src={img} alt="headerimg" className='h-[50vh]'/>
                    </div>
                </div>
            </header>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">            
                <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    {shop.map((product) => {
                    const  {id, imageSrc, imageAlt, name, color, price} = product;
                    return(
                        <div key={id} className="group relative">
                            <div className="w-full min-h-[25rem] bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-[23rem] lg:aspect-none">
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                    <Link to={`/shop/${id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {name}
                                    </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{price}</p>
                            </div>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop
