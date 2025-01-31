import MainLayout from "@/layouts/MainLayout";
import { sandwiches } from "@/utils/constants";
import React  from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
    return (
        <MainLayout>
        <div className="flex flex-wrap text-red-500">
            {
                sandwiches.map(sandwich => (
                    <Link href={`/product/${sandwich.id}`} key={sandwich.id} className="w-full h-[60vh] sm:w-1/2 lg:w-1/3 p-4 flex flex-col gap-2 border-r-2 border-b-2 border-red-500 even:bg-fuchsia-100 group">
                        <div className="relative h-[80%]">
                            <Image src={sandwich.image} alt={sandwich.title} fill className="object-contain" />
                        </div>
                        <div className="flex items-center justify-between font-bold ">
                            <h1 className="text-2xl uppercase p-2">{sandwich.title}</h1>
                            <h2 className="text-xl group-hover:hidden font-bold">${sandwich.price}</h2>
                            <button className="hidden group-hover:block bg-red-500 text-white px-4 py-2 rounded-md uppercase">Add to Cart</button>    
                        </div>
                    </Link>
                ))
            }
        </div>
        </MainLayout>
    )
}

export default CategoryPage;