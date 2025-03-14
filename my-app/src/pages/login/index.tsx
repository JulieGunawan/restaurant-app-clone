"use client";
import React  from "react";
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const {data, status} = useSession();
    const router =  useRouter();
    
    if (status === "loading") {
        return <p>Loading...</p>
    } else if (status === "authenticated") {
        router.push("/");
    } else {
    return (
        <MainLayout>
        <div className=" h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)] flex items-center justify-center">
            <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
                <div className="relative h-1/3 w-full md:h-full md:w-1/2">
                    <Image src="/assets/loginBG.jpg" alt="Login Page"  fill className="object-cover"/>
                </div>
                <div className="p-10 flex flex-col gap-8 md:w-1/2">
                    <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
                    <p>Log into your account or create a new one using social buttons</p>
                    <button 
                     className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
                     onClick={() => signIn("google")}>
                        <Image src="/assets/google-48.png" alt="" width={20} height={20} className="object-contain"/>
                        <span>Sign in with Google</span>
                    </button>
                    <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
                        <Image src="/assets/facebook-48.png" alt="" width={20} height={20} className="object-contain"/>
                        <span>Sign in with Facebook</span>
                    </button>
                    <p className="text-sm">
                        Have a problem? 
                        <Link href="" className="underline"> Contact us</Link>
                    </p>
                </div>
            </div>
        </div>
        </MainLayout>
    )
}
}

export default LoginPage;