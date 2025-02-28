import Footer from "@/components/Footer"
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
    title: "Absolutely Delicioso",
    description: "Fill your stomach with many delicious dishes",
}
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <Notification />
            <Navbar />
            <main className="min-h-screen ">
                {children} 
            </main>
            <Footer />
        </AuthProvider>
    )
}

export default MainLayout;