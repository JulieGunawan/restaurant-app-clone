import MainLayout from "@/layouts/MainLayout";
import React  from "react";
import Image from "next/image";
import { singleProduct } from "@/utils/constants";
import Price from "@/components/Price";

const ProductPage = () => {


    return (
        <MainLayout>
            <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col md:flex-row justify-around text-red-500">
                <div className="w-full h-1/2 relative">
                    <Image src={singleProduct.image} alt="product" fill className="object-contain" />
                </div>
                <div className="flex h-1/2 flex-col gap-4">
                    <h1 className="text-3xl font-bold uppercase">{singleProduct.title}</h1>
                    <p>{singleProduct.desc}</p>
                    <Price price={singleProduct.price} options={singleProduct.options} />
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductPage;