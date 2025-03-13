import MainLayout from "@/layouts/MainLayout";
import React  from "react";
import Image from "next/image";
import Price from "@/components/Price";
import { GetServerSideProps } from "next";
import { Product } from "@/utils/type";

export const getServerSideProps: GetServerSideProps = async(context) => {
    const {id} = context.params as {id:string};
    try{
        const res = await fetch(`http://localhost:3000/api/products/${id}`,{
            cache:'no-store'
        })
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const product =  await res.json();
        return {
            props:{
                singleProduct: product
            }
        }
    } catch (err){
        console.log("Error fetching product: ", err);
        return {
            notFound: true
        }
    } 
}

const SingleProductPage = async ({singleProduct}:{singleProduct:Product}) => {
    
    return (
        <MainLayout>
            <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col md:flex-row gap-4 md:gap-8 md:items-center justify-around text-red-500  h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)] ">
                <div className="w-full h-1/2 md:justify-center relative">
                    <Image src={singleProduct.img} alt="product" fill className="object-contain" />
                </div>
                <div className="flex h-1/2  md:h-[40%] lg:h-[70%] flex-col gap-4 md:justify-center">
                    <h1 className="text-3xl lg:text-5xl font-bold uppercase">{singleProduct.title}</h1>
                    <p className="lg:text-xl">{singleProduct.desc}</p>
                    <Price price={singleProduct.price} options={singleProduct.options} id={singleProduct.id}/>
                </div>
            </div>
        </MainLayout>
    )
}

export default SingleProductPage;