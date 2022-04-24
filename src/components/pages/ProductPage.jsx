/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { shop } from '../productData';
import { Link, useParams } from 'react-router-dom';
import { BsStar, BsStarHalf, BsStarFill, BsBag, BsHeart} from 'react-icons/bs';


const ProductPage = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const newProduct = shop.find((single) => single.id === parseInt(id));
        setProduct(newProduct);
    }, [id]);
    const  {imageSrc, imageAlt, name, reviews, price} = product;
    return (
        <article key={id}>           
            <div className="md:p-12 p-4 w-full h-full flex justify-center items-center">    
                <div className='flex flex-col md:flex-row h-full md:h-[70vh] justify-between'>
                    <img src={imageSrc} alt={imageAlt} className='md:h-full rounded' />
                    <div className="flex flex-col text-[#282828] w-full pl-auto md:pl-12 pt-4 md:pt-0">
                        <h2 className='text-xl font-bold'>{name}</h2>
                        <p className='text-3xl pt-3'>{price}</p>
                        <div className="flex items-center pt-7 group cursor-pointer">
                            <div className="stars flex text-[#282828] w-[6rem] justify-between">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStar className='star'/>
                            </div>
                            <p className='text-sm text-blue-500 group-hover:opacity-[0.5] ml-2'>{`${reviews} reviews`}</p>
                        </div>
                            <p className='pt-7 md:w-96 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem, deleniti excepturi animi distinctio quam maxime molestiae itaque non provident fuga doloribus odit? Sit asperiores, ad a alias velit quidem.</p>
                            <div className="sizes mt-7">
                                <p className='text-blue-600 font-bold mb-4'>Sizes</p>
                                <div className='size flex w-[100%]'>
                                    <div className="w-[50%] md:w-[50px] h-[50px] rounded border border-[#C0C0C0] flex justify-center items-center cursor-pointer mr-3">XSS</div>
                                    <div className="w-[50%] md:w-[50px] h-[50px] rounded border border-[#C0C0C0] flex justify-center items-center cursor-pointer mr-3">XS</div>
                                    <div className="w-[50%] md:w-[50px] h-[50px] rounded border border-[#C0C0C0] flex justify-center items-center cursor-pointer mr-3">S</div>
                                    <div className="w-[50%] md:w-[50px] h-[50px] rounded border border-[#C0C0C0] flex justify-center items-center cursor-pointer mr-3">M</div>
                                    <div className="w-[50%] md:w-[50px] h-[50px] rounded border border-[#C0C0C0] flex justify-center items-center cursor-pointer mr-3">L</div>
                                    <div className="w-[50%] md:w-[50px] h-[50px] rounded border border-[#C0C0C0] flex justify-center items-center cursor-pointer mr-3">XL</div>
                                </div>
                            </div>
                            <button className='md:w-96 w-full h-10 bg-[#282828] text-white rounded mt-12 shrink-1 md:shrink-0 flex justify-center items-center'>
                                <BsBag className='text-xl mr-3'/> Add To Bag</button>
                            <button className='md:w-96 w-full h-10 bg-[#ffff] text-[#282828] rounded mt-3 shrink-1 md:shrink-0 flex justify-center items-center border border-[#C0C0C0]'>
                                <BsHeart className='text-xl mr-3'/> Add To Favourites</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductPage;
