import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/utils/type';
import { useRouter } from 'next/navigation';

const Featured = () => {
    const [products, setProducts] = useState<Product[]>([]);   
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const handleClick = (productId:string) => {
        router.push(`/product/${productId}`);
    }
    useEffect(() => {
       const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
            if (!response.ok) {
                throw new Error('Failed to fetch product with feature');
            }
            const fetchedData = await response.json();
            const fetchedProducts = fetchedData.map((product:Product) => ({
                ...product,
                price: Number(product.price),
            }));
            setProducts(fetchedProducts);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
       }
       fetchData();
    }, [])
  

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            <div className="w-max flex">
                {products.map(product => (
                    <div key={product.id} onClick={()=>{handleClick(product.id)}}>
                         <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500" >
                                <Image src={product.img || '/assets/blankImage.jpg'} alt={product.title} fill className='object-contain'/>
                            </div>
                            <div className="flex-1 gap-4 flex flex-col items-center justify-center">
                                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
                                <p className="items-center text-center p-4 xl:text-xl 2xl:text-2xl 2xl:p-8">{product.desc}</p>
                                <span className="text-xl font-bold xl:text-2xl">${product.price.toFixed(2)}</span>
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