import { useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import ContactSection from "../components/sections/ContactSection";
import AboutSection from "../components/sections/AboutSection";
import CoreCaseStudiesFeatured from "../components/sections/CoreCaseStudiesFeatured";

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    let attempts = 0;
    const scrollToSection = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 20) {
        attempts += 1;
        requestAnimationFrame(scrollToSection);
      }
    };

    // Wait for the page (and any images) to lay out before scrolling
    const timer = setTimeout(scrollToSection, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <span
        class="t-shimmer"
        data-text="Starts at just  $1499   $999 for first two clients"
      >
        Starts at just <span className="line-through decoration-orange-800">$1499</span> $999 for first two clients
      </span>
      <HeroSection />
      {/* <ContactSection />
      <AboutSection />
      <CoreCaseStudiesFeatured /> */}
    </div>
  );
}
