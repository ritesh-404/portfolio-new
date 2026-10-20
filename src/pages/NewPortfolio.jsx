import { useEffect, useRef } from "react";

import temporalBig from "../assets/new_portfolio/temporal-newPortfolio_big.png";
import typaniBig from "../assets/new_portfolio/typani-newPortfolio_big.png";
import typani from "../assets/new_portfolio/typani_newPortfolio.png";
import temporal from "../assets/new_portfolio/temporal_newPortfolio.png";
import byteAsk from "../assets/new_portfolio/byte-ask_newPortfolio.webp";
import hyperProbe from "../assets/new_portfolio/hyperProbe_newPortfolio.webp";
import openSeo from "../assets/new_portfolio/openseo_newPortfolio.webp";
import threadOtter from "../assets/new_portfolio/thread_otter_newPortfolio.webp";

import BackLinkBtn from "../components/ui/BackLinkBtn";

/* ---------- data ---------- */

const works = [
  {
    title: "Temporal AI",
    description:
      "Temporal AI has a landing page but with a lot of problems such as meaningless illustrations that has nothing to do with the product itself, inconsistent designs, and spacing etc...",
    image: temporalBig,
    href: "/work/temporal",
  },
  {
    title: "Typani",
    description:
      "Typani answers Google reviews for local businesses. But on their website the content is just out there with no consistency to build trust and look credible, very weak visuals and no branding or personality to their website so users remember their site atleast",
    image: typaniBig,
    href: "/work/typani",
  },
  {
    title: "Hero sections",
    description: (
      <>
        I love to fix broken user interfaces and in my free time I find random
        latest startups from VCs databases e.g.{" "}
        <span className="text-[#6e6e6e]">Y combinator</span> and redesign their
        hero sections to explain the product much better and I fix spacing and
        other UI changes I see and before I start designing I always research
        what the company does and who they are targeting to sell etc...
      </>
    ),
    images: [typani, byteAsk, hyperProbe, openSeo, threadOtter, temporal],
    href: "/work/heroSections",
  },
];

/* ---------- styles ---------- */

const pill =
  "inline-flex h-8 w-fit cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg border border-white/10 bg-white/10 py-4 pl-2 pr-4 text-base text-white transition-colors hover:bg-white/20";

const card = "rounded-2xl border border-white/10 bg-[#1b1b1d] p-2";

/* ---------- marquee ---------- */

const MARQUEE_SPEED = 22;

function useMarquee(trackRef) {
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let distance = 0;
    let lastTime = null;
    let raf = 0;

    const tick = (now) => {
      if (lastTime !== null) {
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          distance =
            (distance + (MARQUEE_SPEED * (now - lastTime)) / 1000) % halfWidth;
          track.style.transform = `translate3d(${-distance}px, 0, 0)`;
        }
      }
      lastTime = now;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trackRef]);
}

function HeroMarquee({ images }) {
  const trackRef = useRef(null);
  useMarquee(trackRef);

  return (
    <div className="flex aspect-[4/3] w-full items-center overflow-hidden rounded-lg border border-white/10 bg-[#252528] md:aspect-[21/8]">
      <div ref={trackRef} className="flex w-max will-change-transform">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i < images.length ? "Hero section redesign" : ""}
            aria-hidden={i >= images.length}
            draggable={false}
            className="mr-4 h-36 w-auto shrink-0 rounded-md border border-white/10 md:h-56"
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- work card ---------- */

function WorkCard({ w, className = "" }) {
  return (
    <article className={`${card} flex flex-col ${className}`}>
      <a href={w.href} className="block">
        {w.images ? (
          <HeroMarquee images={w.images} />
        ) : (
          <div className="flex aspect-[4/3] w-full items-start justify-center overflow-hidden rounded-xl border border-white/10 bg-[#252528] px-[9%] pt-[7%]">
            <img
              src={w.image}
              alt={`${w.title} landing page`}
              loading="lazy"
              className="h-auto w-full shrink-0 rounded-t-md border border-b-0 border-white/10"
            />
          </div>
        )}
      </a>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-geist-sans text-xl text-white">{w.title}</h3>
        <p className="mt-2 text-base leading-6 text-[#dadada]">
          {w.description}
        </p>
        <a
          href={w.href}
          className={`${pill} mt-4 self-start transition-all duration-200 hover:brightness-110`}
        >
          Case study
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </article>
  );
}

const backBtnClass =
  "border text-portfolio-text-primary bg-portfolio-card-bg border-portfolio-text-primary";

/* ---------- page ---------- */

export default function NewPortfolio() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#101010] font-geist-sans text-white">
      <main className="mx-auto w-[90%] pb-24 pt-16 lg:w-[80%] flex flex-col items-center">
        <h2 className="mb-5 md:text-5xl font-geist-sans">---Case Studies---</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-6">
          <WorkCard w={works[0]} className="md:col-span-3" />
          <WorkCard w={works[1]} className="md:col-span-3" />
          <WorkCard w={works[2]} className="md:col-span-6" />
        </div>
        <BackLinkBtn className={`${backBtnClass} my-10`} href="/" />
      </main>
    </div>
  );
}
