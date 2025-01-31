import Footer from "@/components/Footer"
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
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