
import React from "react";

type PriceProps = {
    price: number
    options?: {
        title: string
        additionalPrice: number
    }[];
}
const Price = ({price,  options}:PriceProps) => {

    const [quantity, setQuantity] = React.useState(1);
    
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-red-500">${price.toFixed(2)}</h2>      
            <div className="flex gap-4">
                {options?.map((option) => (
                    <button key={option.title} className="ring-1 py-2 px-4 ring-red-400 rounded-md">{option.title}</button>)
                )}
            </div>
            <div className="flex items-center justify-between">
                <div className="flex justify-between w-full p-3 ring-1 ring-red-400">
                <span className="py-2 px-4 ">Quantity</span>
                    <div className="flex gap-4 items-center justify-center">
                        <button onClick={() => setQuantity((prev) => prev - 1)} className="">{'-'}</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity((prev) => prev + 1)}>{'+'}</button>
                    </div>
                </div>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md uppercase">Add to Cart</button>
            </div>      
        </div>
    )
}

export default Price;