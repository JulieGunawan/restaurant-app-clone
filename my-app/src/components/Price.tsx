"use client";
import { useCartStore } from "@/utils/store";
import {  Product } from "@/utils/type";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Price = ({item}: {item:Product}) => {
    const {addToCart} = useCartStore();
    const [total, setTotal] = useState(item.price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        const numValue = value === "" ? 0 : parseInt(value);
        if (numValue >=0 && numValue <= 100) {
            setQuantity(numValue);
        }
    }
    
    useEffect(()=>{
        useCartStore.persist.rehydrate();
    },[]);
    
    useEffect(() => {
        const updatedPrice = item.options?.length ? Number(item.price) + Number(item.options[selected].additionalPrice) : Number(item.price)
        setTotal((quantity * updatedPrice));  
    },[quantity, selected, item.options, item.price, ]);

    const handleCart = () => {
        addToCart({
            id: item.id,
            img: item.img,
            title: item.title,
            desc: item.desc,
            price: total,
            quantity: quantity,
            options: item.options ? [item.options[selected]] : undefined
        })
        toast.success("Product added to the cart");
    }
    return (
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 xl:gap-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-red-500">${total}</h2>      
            <div className="flex gap-4 lg:text-xl">
                {item.options?.map((option, index) => (
                    <button key={`${option.title}-${item.id}`} className={`ring-1 py-2 px-4 ring-red-700 rounded-md min-w-[6rem]`} 
                    style={{
                        background: selected === index ? "rgb(248 113 113)" :"white",
                        color: selected === index ? "white" :"rgb(248 113 113)"
                    }}    
                    onClick={() => {
                        setSelected(index);
                        setTotal(item.price + option.additionalPrice)
                    }}>
                        {option.title} 
                    </button>)
                )}
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex justify-between w-[75%] p-3 ring-1 ring-red-400">
                    <span >Quantity</span>
                    <div className="flex gap-4 items-center justify-center">
                        <button onClick={() => setQuantity((prev) => Math.max(0,prev - 1))} className="">{'-'}</button>
                        <input type="text" value={quantity} className="w-8 text-center" onChange={onChange}/>
                        <button onClick={() => setQuantity((prev) => Math.min(100,prev + 1))}>{'+'}</button>
                    </div>
                </div>
                <button 
                    className="p-3 bg-red-500 text-white rounded-md uppercase w-56"
                    onClick={()=>handleCart()}
                >Add to Cart</button>
            </div>      
        </div>
    )
}

export default Price;