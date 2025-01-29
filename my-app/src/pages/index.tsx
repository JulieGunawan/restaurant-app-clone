import Notification from "@/components/Notification";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    // <div
    //   className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    // >
    <div>
      <Notification />
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hello World
      </main> */}
      <Navbar />
        <Footer />
    </div>
  );
}
