"use client";
import Footer from "@/components/Footer"
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Head from "next/head";



const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
          <Head>
                <title>Absolutely Delicioso</title>
                <meta name="description" content="Fill your stomach with many delicious dishes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Notification />
            <Navbar />
            <main className="min-h-screen ">
                {children} 
            </main>
            <Footer />
        </>
    )
}

export default MainLayout;