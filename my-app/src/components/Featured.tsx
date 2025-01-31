import React from 'react';
import Image from 'next/image';
import { products } from '@/utils/constants';

const Featured = () => {
    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            <div className="w-max flex">
                {products.map(product => (
                    <div key={product.id}>
                         <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]">
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500" >
                                <Image src={product.image || ""} alt={product.title} fill className='object-contain'/>
                            </div>
                            <div className="flex-1 gap-4 flex flex-col items-center justify-center">
                                <h1 className="text-xl font-bold uppercase">{product.title}</h1>
                                <p className="items-center text-center p-4">{product.desc}</p>
                                <span className="text-xl font-bold">${product.price}</span>
                                <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured;