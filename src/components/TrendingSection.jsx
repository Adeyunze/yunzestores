/* eslint-disable no-unused-vars */
import React from 'react'
import Products from './Products';
import { Link, useParams } from 'react-router-dom';

const TrendingSection = () => {
    return (
        <section>
            <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='text-3xl font-bold tracking-tight text-[#282828]'>Trending Products</h2>
                <Products/>
            </div>
        </section>
    )
} 


export default TrendingSection;