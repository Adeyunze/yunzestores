/* eslint-disable no-unused-vars */
import React from 'react';
import { shop } from './productData';
import { Link } from 'react-router-dom';

const Featured = () => {
    return(
        <section>
            <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='text-3xl font-bold tracking-tight text-[#282828]'>Featured Products</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {shop.filter(product => product.categories === 'featured').map(filtered => {
                    const  {id, imageSrc, imageAlt, name, color, price} = filtered;
                    return(
                    <div key={id} className="group relative">
                        <div className="w-full min-h-[25rem] bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-[28rem] lg:aspect-none">
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
        </section>
    );
};

export default Featured;
