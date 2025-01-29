import Link from "next/link";
import Image from "next/image";
import React  from "react";
import MenuComponent from "./Menu";
import { links } from "@/utils/constants";
import CartIcon from "./CartIcon";
const Navbar = () =>{
    const user = false;
    return (
        <div className="h-12 text-red-500 p-4 flex justify-between border-b-2 border-b-red-500 uppercase items-center">
            {/* LEFT LINKS */}
            <div className="hidden md:flex gap-4">
                {links.map((link)=>{
                    if (link.id !==3)
                   {
                    return (
                        <Link key={link.id} href={link.url}>{link.title}</Link>
                    )
                   }
                })}

            </div>
            <Link href={"/"} className="text-xl">Absolutely Delicioso</Link>
            {/*MOBILE MENU */}
            <div className="md:hidden">
                <MenuComponent />
            </div>
            {/* RIGHT LINKS */}
            <div className="hidden md:flex gap-4 items-center">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/assets/icons8-phone-100.png" width={35} height={35} alt="phone"/>
                    <span>123 456 789</span>
                </div>
                {user ? <Link href="/order">Order</Link> : 
                <Link  href="/login">Login</Link>}
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar;