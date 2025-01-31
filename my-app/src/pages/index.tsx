import Slider from "@/components/Slider";
import Offer from "@/components/Offer";
import Featured from "@/components/Featured";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Slider />
        <Featured />
        <Offer />
      </MainLayout> 
    </div>
  );
}
