"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
    const { status} = useSession();

    return (
       <div>
        {status ==="authenticated" ? (
            <div className="flex items-center gap-2 cursor-pointer">
                <Link href="/orders">Orders</Link>
                <span onClick={() => signOut()}>Log out</span>
            </div>
        ) : (
            <Link href="/login">Login</Link>
        )}
       </div>
    )
}

export default UserLinks;