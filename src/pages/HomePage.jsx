import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import Navbar from "../components/ui/Navbar";

export default function HomePage() {
  return (
    <div className="bg-black">
      <div className="relative z-10 bg-white font-inter text-black">
        <Navbar />
        <HeroSection />
      </div>

      <FooterSection />
    </div>
  );
}
