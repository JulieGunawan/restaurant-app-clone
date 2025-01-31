import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="h-12 md:h-20 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between uppercase">
             <Link href={"/"} className="text-lg md:font-bold flex-1 ">Absolutely Delicioso</Link>
             <p>© Copyright 2025 </p>
        </div>
    )
}

export default Footer;