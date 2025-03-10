import Link from "next/link";
import Image from "next/image";
import React  from "react";
import MenuComponent from "./Menu";
import { links } from "@/utils/constants";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";
const Navbar = () =>{
    return (
        <div className="h-12 md:h-20 text-red-500 p-4 flex justify-between border-b-2 border-b-red-500 uppercase items-center lg:px-18 xl:px-40">
            {/* LEFT LINKS */}
            <div className="hidden md:flex gap-4 flex-1">
                {links.map((link)=>{
                    if (link.id !==3)
                   {
                    return (
                        <Link key={link.id} href={link.url}>{link.title}</Link>
                    )
                   }
                })}

            </div>
            <Link href={"/"} className="text-xl md:font-bold flex-1 md:text-center">Absolutely Delicioso</Link>
            {/*MOBILE MENU */}
            <div className="md:hidden">
                <MenuComponent />
            </div>
            {/* RIGHT LINKS */}
            <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
                <div className="md:absolute top-2 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md ">
                    <Image src="/assets/icons8-phone-100.png" width={35} height={35} alt="phone"/>
                    <span>123 456 789</span>
                </div>
                <UserLinks />
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar;