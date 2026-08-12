import "./App.css";
// import {
//   LayoutIcon,
//   DashboardIcon,
//   LayersIcon,
//   CameraIcon,
//   HeyIcon,
//   ArrowIcon,
//   BookIcon,
//   PeaceHandIcon,
//   MessageIcon,
// } from "./components/icons";

// import Button from "./components/ui/Button";
// import Pill from "./components/ui/Pill";
import Footer from "./components/ui/Footer";
import HeroSection from "./components/sections/HeroSection";
import FeaturedProjectsSection from "./components/sections/FeaturedProjectsSection";

import Button from "./components/ui/Button";
import { ArrowIcon } from "./components/icons";

function App() {
  return (
    <div className="relative min-h-screen pb-40 pt-8 px-8 bg-black">
      {/* Top divider */}
      <div className="fixed top-0 left-0 right-0 h-8 border-b border-border-dark pointer-events-none bg-black z-10" />

      {/* Left divider */}
      <div className="absolute top-0 bottom-0 left-0 w-8 border-r border-border-dark pointer-events-none" />

      {/* Right divider */}
      <div className="absolute top-0 bottom-0 right-0 w-8 border-l border-border-dark pointer-events-none" />

      <HeroSection />

      <FeaturedProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
// iconPosition = "right"
