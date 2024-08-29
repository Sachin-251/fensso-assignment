import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Featured from "./components/Featured";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="md:p-10 p-4 container mx-auto">
      <Navbar />
      <HeroSection />
      <Featured />
      <Services />
    </div>
  );
}
