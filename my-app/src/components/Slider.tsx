"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { sliderList } from '@/utils/constants';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=>
             setCurrentSlide((prev) => prev === sliderList.length-1 ? 0 : (prev+1))
        ,2000) ;
        return () => clearInterval(interval); 
    },[]);
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row" >
            <div className="flex-1 items-center justify-center flex flex-col gap-8  text-red-500 font-bold bg-fuchsia-50">
                <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>{sliderList[currentSlide].title}</h1>
                <button className="bg-red-500 text-white py-4 px-8 rounded">Order Now</button>
            </div>
            <div className="flex-1 w-full  relative ">
                <Image src={sliderList[currentSlide].image} alt="slider" fill className='object-cover'/>
            </div>
            
        </div>
    )
}

export default Slider;