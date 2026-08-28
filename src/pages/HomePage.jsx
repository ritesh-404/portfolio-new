import HeroSection from "../components/sections/HeroSection";
import Navbar from "../components/ui/Navbar";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import ProcessSection from "../components/sections/ProcessSection";
import Divider from "../components/ui/Divider";
import ContactSection from "../components/sections/ContactSection";
import ServiceSection from "../components/sections/ServiceSection";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/FooterSection";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* --------------------------- */}
      <Divider />
      <CaseStudiesSection />
      {/* --------------------------- */}
      <Divider />
      <ProcessSection />
      {/* --------------------------- */}
      <Divider />
      <ServiceSection />
      {/* --------------------------- */}
      <Divider />
      <ContactSection />
      {/* --------------------------- */}
      <AboutSection />
      {/* --------------------------- */}
      <FooterSection />
    </div>
  );
}
