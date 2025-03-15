import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useCartStore } from "@/utils/store";

const CartIcon = () => {
    const {totalItems} = useCartStore();
    return (
        <Link href="/cart" className="flex items-center ">
            <div className="relative h-8 w-8 md:w-5 md:h-5">
                <Image src="/assets/icons8-cart-65.png" alt="" fill/>
            </div>
            <span>Cart ({totalItems} items)</span>
        </Link>
    )
}

export default CartIcon;