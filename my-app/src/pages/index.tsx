import Notification from "@/components/Notification";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Offer from "@/components/Offer";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div>
      <Notification />
      <Navbar />
      <Slider />
      <Featured />
      <Offer />
      <Footer />
    </div>
  );
}
