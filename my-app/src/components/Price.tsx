import React, { useEffect, useState } from "react";

type PriceProps = {
    id: number
    price: number
    options?: {
        title: string
        additionalPrice: number
    }[];
}
const Price = ({price,  options}:PriceProps) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        const numValue = value === "" ? 0 : parseInt(value);
        if (numValue >=0 && numValue <= 100) {
            setQuantity(numValue);
        }
    }
    
    useEffect(() => {
        setTotal((quantity * (options && options.length>0 ? (price + options[selected].additionalPrice) : price)));
    },[quantity, selected, options, price]);

    return (
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-red-500">${total}</h2>      
            <div className="flex gap-4 lg:text-xl">
                {options?.map((option, index) => (
                    <button key={`${option.title}-${index}`} className={`ring-1 py-2 px-4 ring-red-700 rounded-md min-w-[6rem]`} 
                    style={{
                        background: selected === index ? "rgb(248 113 113)" :"white",
                        color: selected === index ? "white" :"rgb(248 113 113)"
                    }}    
                    onClick={() => {
                        setSelected(index);
                        setTotal(price + option.additionalPrice)
                    }}>
                        {option.title} 
                    </button>)
                )}
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex justify-between w-full p-3 ring-1 ring-red-400">
                <span >Quantity</span>
                    <div className="flex gap-4 items-center justify-center">
                        <button onClick={() => setQuantity((prev) => Math.max(0,prev - 1))} className="">{'-'}</button>
                        <input type="text" value={quantity} className="w-8 text-center" onChange={onChange}/>
                        <button onClick={() => setQuantity((prev) => Math.min(100,prev + 1))}>{'+'}</button>
                    </div>
                </div>
                <button className="p-3 bg-red-500 text-white rounded-md uppercase w-56">Add to Cart</button>
            </div>      
        </div>
    )
}

export default Price;