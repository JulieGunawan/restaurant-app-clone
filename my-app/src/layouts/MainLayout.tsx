"use client";
import Footer from "@/components/Footer"
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
          <Head>
                <title>Absolutely Delicioso</title>
                <meta name="description" content="Fill your stomach with many delicious dishes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthProvider>
                <QueryProvider>
                    <div>
                        <Notification />
                        <Navbar />
                        <main className="min-h-screen ">
                            {children} 
                        </main>
                        <Footer />
                        <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
                    </div>
                </QueryProvider>
            </AuthProvider>
        </>
    )
}

export default MainLayout;