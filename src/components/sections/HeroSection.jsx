import { useEffect, useRef, useState } from "react";
import SelectedWorks from "../ui/SelectedWorks";
import gradientVideo from "../../assets/bg-gradient-3.mp4";
import gradientPoster from "../../assets/bg-gradient-poster.svg";
import portrait from "../../assets/my-pic.webp";
import envelopeIcon from "../../assets/Envelope.svg";
import twitterIcon from "../../assets/twitter.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Button from "../ui/Button";

function AboutSection() {
  const [mode, setMode] = useState("tldr");
  const [emailCopied, setEmailCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText("riteshnishadofficial66@gmail.com");
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 1800);
  };
  const emphasis = (text) => (
    <span className={mode === "tldr" ? "text-black" : "text-inherit"}>
      {text}
    </span>
  );
  const textColor = mode === "story" ? "text-black" : "text-neutral-300";

  return (
    <section
      id="aboutSection"
      className="hero-reveal hero-reveal--rest border-x border-b border-neutral-950 bg-white/80 px-6 pb-5 pt-6 backdrop-blur-md sm:px-10 sm:pb-5 sm:pt-10 md:px-16 md:pb-5 md:pt-16"
    >
      <div className="flex items-end justify-between gap-3">
        <img
          className="aspect-[3/4] w-[clamp(7rem,18vw,14rem)] shrink-0 object-cover"
          src={portrait}
          alt="Illustrated portrait of Ritesh"
          loading="lazy"
        />
        <div
          className="flex gap-1 border border-neutral-300 p-1"
          role="group"
          aria-label="About text view"
        >
          {["story", "tldr"].map((option) => (
            <button
              key={option}
              type="button"
              className={`cursor-pointer px-2 py-1.5 text-base leading-[1.45] transition-colors duration-200 md:px-3 md:text-xl ${mode === option ? "!bg-black !text-white" : "text-black"}`}
              aria-pressed={mode === option}
              onClick={() => setMode(option)}
            >
              {option === "story" ? "Story" : "TL;DR"}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`my-8 max-w-4xl text-base leading-[1.45] sm:my-12 sm:text-lg md:text-xl ${textColor}`}
        aria-live="polite"
      >
        <p>
          Hey! I'm {emphasis("Ritesh")}, a{" "}
          {emphasis("software product designer from Mumbai, India.")} I enjoy
          figuring out how things work, why they look the way they do, and how
          they can be made better. I tend to bring a{" "}
          {emphasis(
            "strong sense of taste and a lot of care into the products I design",
          )}{" "}
          and build.
        </p>
        <p className="mt-5">
          I enjoy working with ambitious founders and{" "}
          {emphasis("teams across product and web design.")} I'm currently{" "}
          {emphasis("open to freelance projects")} and{" "}
          {emphasis("full-time opportunities.")}
        </p>
        <p className="mt-5">
          My journey started with frontend development, not design ;){" "}
          {emphasis(
            "I gradually got into design by paying more attention to the software I use every day and the little interactions that make an experience feel special.",
          )}{" "}
          Something as simple as the hover interactions in the Microsoft Store
          can catch my attention. They're just so delightful. More recently,
          I've found myself getting {emphasis("interested in icon design")},
          partly inspired by the Google Gemini app on Android.
        </p>
        <p className="mt-5">
          I'm still learning, building, and exploring different sides of design.{" "}
          {emphasis("My goal is to grow into a design engineer")} who can think
          through a problem, design a thoughtful solution, and bring it to life.
        </p>
      </div>
      <div id="footerSection" className="-mx-6 border-t border-neutral-950 px-6 pt-5 sm:-mx-10 sm:px-10 md:-mx-16 md:px-16">
        <div className="space-y-3">
        <div>
        <Button
          href="https://cal.com/ritesh-n/15min?overlayCalendar=true"
          external
          className="h-12 min-h-12 w-full border-black px-4 py-0 text-base leading-[1.45] md:text-xl"
        >
          <span>Book a call</span>
          <span aria-hidden="true">→</span>
        </Button>
        </div>
        <div>
        <Button
          type="button"
          variant="secondary"
          onClick={copyEmail}
          className="h-12 min-h-12 w-full border-neutral-400 px-4 py-0 text-base leading-[1.45] md:text-xl"
        >
          <img className="h-6 w-6" src={envelopeIcon} alt="" />
          {emailCopied ? "Email copied" : "Copy email"}
        </Button>
        </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-[22px]">
        <a
          className="cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
        >
          <img className="h-6 w-6 scale-90" src={twitterIcon} alt="" />
        </a>
        <a
          className="cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img className="h-6 w-6" src={linkedinIcon} alt="" />
        </a>
        <a
          className="cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
          href="https://github.com/ritesh-404"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img className="h-6 w-6" src={githubIcon} alt="" />
        </a>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
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
    <main className="mx-auto w-full max-w-[1040px] px-5 sm:px-6 lg:px-0">
      <section
        id="heroSection"
        className="relative isolate pt-12"
      >
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
        <div className="relative z-10 border border-neutral-950 bg-white/80 p-4 backdrop-blur-md sm:p-5 md:p-8 lg:p-16 xl:p-20">
          <div className="hero-reveal hero-reveal--badge inline-flex items-center gap-2 border border-neutral-950 px-3 py-1.5 text-base leading-[1.45] max-md:hidden">
            Available for product design roles
          </div>
          <h1 className="hero-heading hero-reveal hero-reveal--heading mt-6 font-heading font-medium leading-[0.9] tracking-[-.055em] text-black md:mt-10 lg:mt-[60px]">
            Thinking in systems.
            <br />
            <span
              className="designing-word whitespace-nowrap"
              aria-label="Designing"
              tabIndex={0}
            >
              <span className="designing-letter font-niconne">D</span>
              <span className="designing-letter font-nata">e</span>
              <span className="designing-letter font-pixelify">s</span>
              <span className="designing-letter font-rocker">i</span>
              <span className="designing-letter">g</span>
              <span className="designing-letter font-elite">n</span>
              <span className="designing-letter font-rocker">i</span>
              <span className="designing-letter font-nata">n</span>
              <span className="designing-letter font-nova">g</span>
            </span>{" "}
            in details.
          </h1>
          <p className="hero-reveal hero-reveal--subheading mb-10 mt-4 max-w-none text-base leading-[1.45] text-pretty text-black sm:text-lg md:mb-14 md:text-xl lg:mb-[80px] lg:text-2xl">
            I design thoughtful digital products and build interfaces that make
            complex things feel simple. From the first sketch to the final
            interaction.
          </p>
          <div className="hero-reveal hero-reveal--rest">
            <SelectedWorks />
          </div>
        </div>
      </section>
      <AboutSection />
    </main>
  );
}
