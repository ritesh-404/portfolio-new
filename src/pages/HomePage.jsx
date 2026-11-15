import { useEffect, useRef, useState } from "react";

import HeroSection from "../components/sections/HeroSection";
import Navbar from "../components/ui/Navbar";
import gradientVideo from "../assets/videos/bg-gradient-6.mp4";
import gradientPoster from "../assets/images/gradient-poster.png";

export default function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playback = video.play();

    playback?.catch(() => {});
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed background layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="hero-video pointer-events-none z-0 max-w-none"
          src={gradientVideo}
          poster={gradientPoster}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
        />
      </div>

      {/* Navbar always stays above scrolling content */}
      <div className="sticky top-0 z-50 site-navbar">
        <Navbar />
      </div>

      {/* All page content scrolls together */}
      <HeroSection />
    </div>
  );
}
