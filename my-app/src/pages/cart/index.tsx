import React, { useEffect, useState }  from "react";
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";
import { cartItems } from "@/utils/constants";

const CartPage = () =>{
    const [subtotal, setSubtotal] = useState(0);
    
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            const price = item.price + (item.options ? item.options[0].additionalPrice : 0);
            return acc + price;
        }, 0);
        setSubtotal(total);
    }, []);
    
    return (
        <MainLayout>
            <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)]  flex flex-col lg:flex-row text-red-400 md:w-full ">
                <div className="h-1/2 lg:h-full lg:w-2/3 flex flex-col p-4 lg:px-20 xl:px-40 overflow-scroll 2xl:w-1/2 justify-center">
                    {cartItems.map(item => {
                        const totalPrice = item.price + (item.options ? item.options[0].additionalPrice : 0);                      
                        return(
                            <div className="flex items-center justify-between mb-4 " key={item.id}>
                            <Image src={item.img || '/assets/blankImage.jpg'} alt="logo" width={100} height={100} className="object-contain" />
                            <div className="">
                                <h1 className="font-bold text-xl uppercase">{item.title}</h1>
                                {item.options && <span>{item.options[0].title}</span>}
                            </div>
                            <h2 className="font-bold">${totalPrice.toFixed(2)}</h2>
                            <span className="cursor-pointer">X</span>
                        </div>
                        )
                    })}
                    
                </div>
                <div className="text-xl h-1/2 flex flex-col gap-4 p-4 lg:px-20 xl:px-30 justify-center bg-fuchsia-50 lg:h-full lg:w-1/3 2xl:w-1/2 2xl:text-xl 2xl:gap-8">
                    <div className="flex justify-between">
                        <span className="">Subtotal (3 items):</span>
                        <span className="">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Service Cost (incl. Tax):</span>
                        <span className="">$0.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Delivery Cost:</span>
                        <span className=" text-green-500">FREE !</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                        <span className="">TOTAL:</span>
                        <span className=" font-bold">${subtotal.toFixed(2)}</span>
                    </div>
                    <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">Checkout</button>
                </div>
            </div>
        </MainLayout>
    )
}

export default CartPage;