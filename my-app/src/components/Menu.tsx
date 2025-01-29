//this is needed because it is a client component
"use client";
import { links } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState }  from "react";
import CartIcon from "./CartIcon";

const MenuComponent = () => {
    const [open, setOpen] = useState(false);
    const user = false;
    return (
    <div >
        <div className="items-center">
            {!open && <Image src="/assets/icons8-menu-32.png" alt ="MenuBar" width={25} height={25} />}
            {open && <Image src="/assets/icons8-close-window-100.png" alt="CloseBar" width={25} height={25} />}
        </div>
        {open && <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-8 z-10">
        {links.map(link => {
            return (
                <Link href={link.url} key={link.id} onClick={()=>setOpen(false)}>{link.title}</Link>
            )
        })}
        {user ? <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link> : <Link href="/login">Login</Link>}
        <CartIcon  />
        </div>}
    </div>
)
}

export default MenuComponent;