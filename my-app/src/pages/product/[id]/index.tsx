import MainLayout from "@/layouts/MainLayout";
import React  from "react";
import Image from "next/image";
import { singleProduct } from "@/utils/constants";
import Price from "@/components/Price";

const ProductPage = () => {
    return (
        <MainLayout>
            <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col md:flex-row gap-4 md:gap-8 md:items-center justify-around text-red-500  h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)] ">
                <div className="w-full h-1/2 md:justify-center relative">
                    <Image src={singleProduct.image} alt="product" fill className="object-contain" />
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

export default ProductPage;