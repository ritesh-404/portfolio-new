import { useEffect, useRef, useState } from "react";

import temporalBig from "../assets/new_portfolio/temporal-newPortfolio_big.png";
import typaniBig from "../assets/new_portfolio/typani-newPortfolio_big.png";

import typani from "../assets/new_portfolio/typani_newPortfolio.png";
import temporal from "../assets/new_portfolio/temporal_newPortfolio.png";
import byteAsk from "../assets/new_portfolio/byte-ask_newPortfolio.png";
import hyperProbe from "../assets/new_portfolio/hyperProbe_newPortfolio.png";
import openSeo from "../assets/new_portfolio/openseo_newPortfolio.png";
import threadOtter from "../assets/new_portfolio/thread_otter_newPortfolio.png";

/* ---------- edit these ---------- */
const EMAIL = "workwithriteshhh@gmail.com";
const RESUME = "/resume.pdf"; // put the file in /public

const socials = [
  { label: "twitter", href: "https://x.com/Riteshxdev", icon: "x" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/ritesh-nishad-abb9363a4/",
    icon: "linkedin",
  },
  { label: "Github", href: "https://github.com/ritesh-404", icon: "github" },
];

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
    href: "/work/hero-sections",
  },
];
/* -------------------------------- */

/* ---------- colors (same names as your Figma styles) ---------- */
const colors = {
  "--body-bg": "#101010",
  "--text-primary": "#FFFFFF",
  "--btn-bg-primary": "#FFFFFF",
  "--btn-bg-secondary": "#D9D9D9",
  "--border-color": "rgb(255 255 255 / 0.1)", // white at 10%
  "--card-bg": "#111111",
  "--white": "#FFFFFF",
  "--black": "#000000",
};

/* ---------- shared styles (change once, applies everywhere) ---------- */
const col = "mx-auto w-full max-w-[600px] px-6 md:px-0"; // content column
const line = "border-(--border-color)"; // dividers

// Compact on mobile and stretches to fill each row (so pills pair up).
// From `sm` (640px) up it keeps the original look.
const pill =
  "inline-flex h-8 cursor-pointer items-center gap-2 rounded-[8px] border border-(--border-color) bg-(--card-bg) pl-2 pr-4 py-4 text-base text-(--text-primary) transition-colors hover:bg-(--border-color)";

/* --------------------------------------------------------------------- */

const icons = {
  mail: (
    <svg
      className="text-[#1fdf72]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z"
        fill="currentColor"
      />
    </svg>
  ),
  file: (
    <svg
      className="text-[#e6772d]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8002 3.99998C4.8002 3.55815 5.15837 3.19998 5.6002 3.19998H14.8688L19.2002 7.53135V20C19.2002 20.4417 18.842 20.8 18.4002 20.8H5.6002C5.15837 20.8 4.8002 20.4417 4.8002 20V3.99998ZM5.6002 1.59998C4.27471 1.59998 3.2002 2.67449 3.2002 3.99998V20C3.2002 21.3254 4.27471 22.4 5.6002 22.4H18.4002C19.7256 22.4 20.8002 21.3254 20.8002 20V7.36566C20.8002 7.0474 20.6738 6.74218 20.4487 6.51713L15.7659 1.8343C15.6159 1.68426 15.4124 1.59998 15.2002 1.59998H5.6002ZM8.4002 11.2C7.95837 11.2 7.6002 11.5582 7.6002 12C7.6002 12.4418 7.95837 12.8 8.4002 12.8H15.6002C16.042 12.8 16.4002 12.4418 16.4002 12C16.4002 11.5582 16.042 11.2 15.6002 11.2H8.4002Z"
        fill="currentColor"
      />
    </svg>
  ),
  linkedin: (
    <svg
      className="text-[#0A66C2]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.19961 1.59998C2.31596 1.59998 1.59961 2.31633 1.59961 3.19998V20.8C1.59961 21.6837 2.31596 22.4 3.19961 22.4H20.7996C21.6833 22.4 22.3996 21.6837 22.3996 20.8V3.19998C22.3996 2.31633 21.6833 1.59998 20.7996 1.59998H3.19961ZM4.87961 9.59998H7.91961V19.2H4.87961V9.59998ZM8.11961 6.40798C8.11961 7.35791 7.34955 8.12798 6.39961 8.12798C5.44969 8.12798 4.67961 7.35791 4.67961 6.40798C4.67961 5.45804 5.44969 4.68798 6.39961 4.68798C7.34955 4.68798 8.11961 5.45804 8.11961 6.40798ZM19.1996 13.3714C19.1996 10.4833 17.333 9.3605 15.4788 9.3605C14.8716 9.33058 14.2671 9.45788 13.7256 9.72969C13.3144 9.93609 12.8838 10.4083 12.5519 11.2296H12.4665V9.60068H9.59961V19.2075H12.6495V14.0979C12.6054 13.5746 12.7728 12.8982 13.1155 12.4958C13.4581 12.0933 13.9482 11.9972 14.3198 11.9484H14.4357C15.4056 11.9484 16.1254 12.5488 16.1254 14.0619V19.2075H19.1751L19.1996 13.3714Z"
        fill="currentColor"
      />
    </svg>
  ),
  x: (
    <svg
      className="text-[#D1D5DB]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.133 19.8478L14.2643 10.6247L20.0552 4.25438C20.1862 4.10674 20.2537 3.91343 20.2431 3.71636C20.2325 3.51929 20.1446 3.33435 19.9986 3.20161C19.8525 3.06888 19.66 2.99907 19.4628 3.00731C19.2657 3.01555 19.0797 3.10117 18.9452 3.24562L13.4289 9.31312L9.633 3.34781C9.56531 3.24127 9.47183 3.15353 9.36121 3.09274C9.25059 3.03194 9.12642 3.00004 9.00019 3H4.50019C4.36571 2.99993 4.2337 3.03603 4.11796 3.10449C4.00222 3.17296 3.90702 3.27129 3.84232 3.38918C3.77763 3.50707 3.74582 3.64018 3.75023 3.77458C3.75463 3.90898 3.7951 4.03973 3.86738 4.15313L9.73613 13.3753L3.94519 19.7503C3.87756 19.823 3.82503 19.9083 3.79063 20.0014C3.75623 20.0945 3.74065 20.1935 3.74479 20.2927C3.74894 20.3918 3.77272 20.4892 3.81477 20.5791C3.85681 20.669 3.91628 20.7496 3.98973 20.8164C4.06318 20.8831 4.14915 20.9346 4.24265 20.9679C4.33615 21.0012 4.43533 21.0156 4.53443 21.0103C4.63354 21.0049 4.7306 20.98 4.81999 20.9369C4.90938 20.8937 4.98932 20.8333 5.05519 20.7591L10.5714 14.6916L14.3674 20.6569C14.4356 20.7625 14.5293 20.8494 14.6399 20.9093C14.7505 20.9693 14.8744 21.0005 15.0002 21H19.5002C19.6345 21 19.7664 20.9638 19.882 20.8954C19.9976 20.827 20.0927 20.7288 20.1573 20.611C20.222 20.4933 20.2539 20.3604 20.2496 20.2261C20.2453 20.0918 20.205 19.9612 20.133 19.8478ZM15.4118 19.5L5.86613 4.5H8.58488L18.1343 19.5H15.4118Z"
        fill="currentColor"
      />
    </svg>
  ),
  github: (
    <svg
      className="text-[#F0F6FC]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_20_6732)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0983 -0.0513916C5.19104 -0.0513916 0.400391 4.73864 0.400391 10.6478C0.400391 15.3741 3.46565 19.3845 7.71708 20.7999C8.25238 20.8977 8.44744 20.5674 8.44744 20.2837C8.44744 20.0294 8.43824 19.3569 8.43299 18.4643C5.45705 19.1106 4.82916 17.0299 4.82916 17.0299C4.34247 15.7938 3.64102 15.4648 3.64102 15.4648C2.66963 14.8014 3.71459 14.8146 3.71459 14.8146C4.78844 14.8901 5.35328 15.9174 5.35328 15.9174C6.30761 17.552 7.85764 17.0798 8.46715 16.8059C8.56436 16.115 8.84086 15.6433 9.14627 15.3761C6.77064 15.1054 4.27286 14.1879 4.27286 10.0882C4.27286 8.91979 4.68992 7.96548 5.3743 7.21738C5.26396 6.94678 4.89682 5.85912 5.47938 4.38592C5.47938 4.38592 6.37722 4.09823 8.42117 5.4821C9.27435 5.245 10.1899 5.12678 11.0996 5.12218C12.0086 5.12678 12.9235 5.245 13.778 5.4821C15.8206 4.09823 16.7171 4.38592 16.7171 4.38592C17.301 5.85912 16.9339 6.94678 16.8242 7.21738C17.5099 7.96548 17.9236 8.91979 17.9236 10.0882C17.9236 14.1985 15.4219 15.1029 13.0391 15.3675C13.4227 15.6979 13.7649 16.3508 13.7649 17.3491C13.7649 18.7789 13.7517 19.9329 13.7517 20.2837C13.7517 20.57 13.9448 20.903 14.4873 20.7985C18.7354 19.3805 21.7981 15.3734 21.7981 10.6478C21.7981 4.73864 17.0074 -0.0513916 11.0983 -0.0513916Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_20_6732">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  india: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.3337 18.3333V9.16663M6.66699 9.16663V18.3333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.90068 9.16667C3.68684 5.83333 8.62242 4.16667 9.99967 2.5C11.377 4.16667 16.3125 5.83333 13.0987 9.16667H6.90068Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0791 10C19.2631 7.72728 16.5738 6.69422 15.8222 5.83333C15.5037 6.19825 14.167 6.66667 14.167 7.08333M15.8337 5.83333V5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2.49996V1.66663"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M2.92095 10C0.736906 7.72728 3.42617 6.69422 4.17773 5.83333C4.49627 6.19825 5.83301 6.66667 5.83301 7.08333M4.16634 5.83333V5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 9.16663L3.60572 10.2891C3.14437 10.4583 2.67728 10.5416 2.18343 10.5416C1.8632 10.5416 1.66699 10.7146 1.66699 11.058V18.3333H18.3337V11.058C18.3337 10.7146 18.1375 10.5416 17.8172 10.5416C17.3234 10.5416 16.8563 10.4583 16.3949 10.2891L13.3337 9.16663"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.833 15V14.1666"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10 18.3334V15.8334"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.16699 15V14.1666"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M10 13.3333V12.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  ),
  chevron: (
    <svg
      width="18"
      height="18"
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
  ),
};

/* ---------- intentional press: mouse = instant, touch = real taps only ---------- */
const TAP_MOVE = 10; // px a finger may drift and still count as a tap
const TAP_TIME = 350; // ms, longer presses are not taps

function onPress(handler) {
  const touches = new Map();

  const down = (e) => {
    if (e.pointerType === "mouse") {
      handler(e.clientX, e.clientY);
      return;
    }
    touches.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY,
      t: performance.now(),
    });
  };

  const up = (e) => {
    const s = touches.get(e.pointerId);
    if (!s) return;
    touches.delete(e.pointerId);
    const moved = Math.hypot(e.clientX - s.x, e.clientY - s.y);
    if (moved <= TAP_MOVE && performance.now() - s.t <= TAP_TIME) {
      handler(e.clientX, e.clientY);
    }
  };

  // when a scroll starts the browser sends pointercancel, so scrolls never count
  const cancel = (e) => touches.delete(e.pointerId);

  window.addEventListener("pointerdown", down);
  window.addEventListener("pointerup", up);
  window.addEventListener("pointercancel", cancel);
  return () => {
    window.removeEventListener("pointerdown", down);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", cancel);
  };
}

/* ---------- galaxy pixel cursor trail ---------- */
const CELL = 8; // grid spacing in px
const PIXEL = 5; // square size in px (gap = CELL - PIXEL)
const SPREAD = 1; // cells the cloud scatters from the cursor (slimmer)
const DENSITY = 4; // scatter pixels added per step
const SAMPLE_DISTANCE = 5; // px between samples along the path
const TRAIL_LENGTH = 28; // max core pixels alive (the tail length)
const MAX_PARTICLES = 120; // hard cap including the scattered cloud

/* click burst */
const RAYS = 10; // number of pixel-lines flying outward
const RAY_PIXELS = 4; // pixels per line
const RAY_GAP = 3; // px between pixels in a line
const RAY_SIZE = 2; // pixel size in a line
const RAY_START = 10; // px from the click point where lines begin
const RAY_TRAVEL = [16, 26]; // how far lines fly (min, max) px
const RAY_LIFE = [380, 520]; // ms

const PALETTE = [
  ["#7c3aed", 26],
  ["#a855f7", 22],
  ["#d946ef", 16],
  ["#f472b6", 12],
  ["#22d3ee", 12],
  ["#67e8f9", 7],
  ["#ffffff", 5],
];
const TOTAL_WEIGHT = PALETTE.reduce((s, [, w]) => s + w, 0);

function pickColor() {
  let r = Math.random() * TOTAL_WEIGHT;
  for (const [color, w] of PALETTE) {
    if ((r -= w) < 0) return color;
  }
  return "#a855f7";
}

// random whole number from -n to n (used to pick a nearby grid cell)
const cellOffset = (n) => Math.floor(Math.random() * (n * 2 + 1)) - n;
const between = ([a, b]) => a + Math.random() * (b - a);

function useCursorTrail(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cells = new Map(); // "gx,gy" -> particle (prevents stacking)
    const core = []; // recent core pixel keys, oldest first
    let rays = []; // click-burst lines
    let raf = 0;
    let last = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (x, y, isCore) => {
      const gx = Math.round(x / CELL) * CELL;
      const gy = Math.round(y / CELL) * CELL;
      const key = gx + "," + gy;
      const now = performance.now();

      const existing = cells.get(key);
      if (existing) {
        existing.born = now; // re-light instead of stacking
        return;
      }

      if (cells.size >= MAX_PARTICLES) {
        cells.delete(cells.keys().next().value); // drop the oldest
      }

      cells.set(key, {
        x: gx,
        y: gy,
        born: now,
        life: isCore ? 300 + Math.random() * 150 : 180 + Math.random() * 220,
        color: pickColor(),
        size: isCore ? PIXEL : PIXEL - Math.floor(Math.random() * 2),
        glow: Math.random() < 0.35,
      });

      if (isCore) {
        core.push(key);
        if (core.length > TRAIL_LENGTH) {
          const old = cells.get(core.shift());
          if (old) old.life = Math.min(old.life, now - old.born + 60);
        }
      }
    };

    const burst = (x, y) => {
      const now = performance.now();
      const offset = Math.random() * Math.PI * 2;
      for (let i = 0; i < RAYS; i++) {
        const angle =
          offset + (i / RAYS) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
        rays.push({
          x,
          y,
          dx: Math.cos(angle),
          dy: Math.sin(angle),
          born: now,
          life: between(RAY_LIFE),
          travel: between(RAY_TRAVEL),
          color: pickColor(),
        });
      }
    };

    const tick = (now) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // trail pixels
      for (const [key, p] of cells) {
        const progress = (now - p.born) / p.life;
        if (progress >= 1) {
          cells.delete(key);
          continue;
        }

        const fade = Math.pow(1 - progress, 2);
        const size = Math.max(2, Math.round(p.size * (0.6 + 0.4 * fade)));
        const off = Math.round((p.size - size) / 2);

        ctx.fillStyle = p.color;

        if (p.glow) {
          ctx.globalAlpha = fade * 0.18;
          ctx.fillRect(p.x - 3, p.y - 3, size + 6, size + 6);
        }

        ctx.globalAlpha = fade;
        ctx.fillRect(p.x + off, p.y + off, size, size);
      }

      // click-burst lines made of pixels
      rays = rays.filter((r) => now - r.born < r.life);
      for (const r of rays) {
        const t = (now - r.born) / r.life;
        const eased = 1 - Math.pow(1 - t, 3); // fast start, soft landing
        const head = RAY_START + eased * r.travel;
        const fade = Math.pow(1 - t, 1.5);

        ctx.fillStyle = r.color;
        for (let i = 0; i < RAY_PIXELS; i++) {
          const dist = head - i * RAY_GAP;
          if (dist < RAY_START) continue;
          // snap to a 2px grid so it reads as pixel art
          const px = Math.round((r.x + r.dx * dist) / 2) * 2;
          const py = Math.round((r.y + r.dy * dist) / 2) * 2;
          ctx.globalAlpha = fade * (1 - i * 0.2); // tail pixels dimmer
          ctx.fillRect(px - 1, py - 1, RAY_SIZE, RAY_SIZE);
        }
      }

      ctx.globalAlpha = 1;
      raf = cells.size || rays.length ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (!raf && (cells.size || rays.length))
        raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (e.pointerType === "touch") return; // trail is mouse/pen only
      const { clientX: x, clientY: y } = e;
      const from = last || { x, y };
      const dx = x - from.x;
      const dy = y - from.y;
      const steps = Math.max(
        1,
        Math.ceil(Math.hypot(dx, dy) / SAMPLE_DISTANCE),
      );

      for (let i = 1; i <= steps; i++) {
        const px = from.x + (dx * i) / steps;
        const py = from.y + (dy * i) / steps;

        spawn(px, py, true);

        if (i > steps - 4) {
          for (let k = 0; k < DENSITY; k++) {
            spawn(
              px + cellOffset(SPREAD) * CELL,
              py + cellOffset(SPREAD) * CELL,
              false,
            );
          }
        }
      }

      if (core.length > TRAIL_LENGTH * 3) {
        core.splice(0, core.length - TRAIL_LENGTH);
      }

      last = { x, y };
      start();
    };

    const onLeave = () => {
      last = null;
    };

    // burst: instant for mouse, only on real taps for touch
    const offPress = onPress((x, y) => {
      burst(x, y);
      if (!raf) raf = requestAnimationFrame(tick);
    });

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      offPress();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [canvasRef]);
}

/* ---------- single crisp click (synthesized, no file needed) ---------- */
function useClickSound() {
  useEffect(() => {
    let ctx = null;
    let noise = null;

    const getCtx = () => {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
        // very short, sharply decaying noise = the crisp "tick"
        const len = Math.floor(ctx.sampleRate * 0.018);
        noise = ctx.createBuffer(1, len, ctx.sampleRate);
        const data = noise.getChannelData(0);
        for (let i = 0; i < len; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 4);
        }
      }
      if (ctx.state === "suspended") ctx.resume();
      return ctx;
    };

    const click = () => {
      const c = getCtx();
      if (!c) return;
      const t = c.currentTime;

      // crisp tick
      const src = c.createBufferSource();
      src.buffer = noise;
      const hp = c.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 2200;
      const g = c.createGain();
      g.gain.setValueAtTime(0.55, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
      src.connect(hp).connect(g).connect(c.destination);
      src.start(t);

      // tiny pop for body (10ms)
      const osc = c.createOscillator();
      osc.type = "square";
      osc.frequency.setValueAtTime(1600, t);
      osc.frequency.exponentialRampToValueAtTime(500, t + 0.012);
      const og = c.createGain();
      og.gain.setValueAtTime(0.12, t);
      og.gain.exponentialRampToValueAtTime(0.001, t + 0.014);
      osc.connect(og).connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.02);
    };

    // sound only on intentional presses (mouse down, or a real tap on touch)
    const offPress = onPress(() => click());

    // iOS only unlocks audio inside certain gestures, so prime it on touchend
    // until the context is actually running
    const unlock = () => {
      if (!ctx || ctx.state !== "running") getCtx();
    };
    window.addEventListener("touchend", unlock, { passive: true });

    return () => {
      offPress();
      window.removeEventListener("touchend", unlock);
      if (ctx) ctx.close();
    };
  }, []);
}

/* ---------- hero sections marquee (fast cruise, short slowdowns, motion blur) ---------- */
const CRUISE_MIN = 900; // px/s, slowest cruising speed
const CRUISE_MAX = 1400; // px/s, fastest cruising speed
const SLOW_SPEED = 90; // px/s, speed during the brief slowdown
const CRUISE_TIME = [3000, 6000]; // ms between slowdowns (min, max)
const SLOW_TIME = [1200, 2200]; // ms the slowdown lasts (min, max)
const EASE_UP = 2.2; // how quickly it accelerates (higher = snappier)
const EASE_DOWN = 4.5; // how quickly it brakes
const MAX_BLUR = 14; // px of horizontal blur at full speed

const rand = ([a, b]) => a + Math.random() * (b - a);

function useVariableMarquee(trackRef, blurRef) {
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0;
    let speed = SLOW_SPEED;
    let target = CRUISE_MIN;
    let slowing = false;
    let last = performance.now();
    let nextPhase = last + rand(CRUISE_TIME);
    let nextWobble = last;
    let raf = 0;

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // switch between cruising and a short slowdown
      if (now > nextPhase) {
        slowing = !slowing;
        nextPhase = now + rand(slowing ? SLOW_TIME : CRUISE_TIME);
      }

      if (slowing) {
        target = SLOW_SPEED;
      } else if (now > nextWobble) {
        // while cruising, vary the speed a little so it feels alive
        target = CRUISE_MIN + Math.random() * (CRUISE_MAX - CRUISE_MIN);
        nextWobble = now + 700 + Math.random() * 900;
      }

      // brake faster than it accelerates
      const ease = target < speed ? EASE_DOWN : EASE_UP;
      speed += (target - speed) * (1 - Math.exp(-dt * ease));
      x -= speed * dt;

      // the track holds the images twice, so wrapping at half width is seamless
      const half = track.scrollWidth / 2;
      if (half) x = ((x % half) - half) % half;

      track.style.transform = `translate3d(${x}px,0,0)`;

      // blur strength follows speed (horizontal only)
      if (blurRef.current) {
        const blur = Math.min(speed / CRUISE_MAX, 1) * MAX_BLUR;
        blurRef.current.setAttribute("stdDeviation", `${blur.toFixed(2)} 0`);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trackRef, blurRef]);
}

function HeroMarquee({ images }) {
  const trackRef = useRef(null);
  const blurRef = useRef(null);
  useVariableMarquee(trackRef, blurRef);

  return (
    <div className="flex aspect-[4/3] w-full items-center overflow-hidden rounded-lg border border-(--border-color) md:aspect-[16/11]">
      {/* horizontal-only blur filter */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="hero-motion-blur" x="-5%" y="0" width="110%" height="100%">
          <feGaussianBlur ref={blurRef} stdDeviation="0 0" />
        </filter>
      </svg>

      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ filter: "url(#hero-motion-blur)" }}
      >
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i < images.length ? "Hero section redesign" : ""}
            aria-hidden={i >= images.length}
            draggable={false}
            className="mr-4 h-36 w-auto shrink-0 rounded-md border border-(--border-color) md:h-44"
          />
        ))}
      </div>
    </div>
  );
}

function ContactFooter() {
  return (
    <footer
      id="footer"
      className="relative flex min-h-[320px] items-center justify-center
        border-t border-(--border-color) bg-black px-5 py-16
        md:min-h-[320px] md:px-8"
    >
      <div className="mx-auto w-full max-w-[700px] text-center">
        <h2
          className="mx-auto max-w-[620px] font-serif
            text-[30px] leading-[1.15] tracking-tight
            text-white sm:text-[36px] md:text-[48px]"
        >
          <span className="text-[#6e6e6e]">Let’s give your product the</span>{" "}
          User experience <span className="text-[#6e6e6e]">it deserves</span>
        </h2>
        <a
          href="https://cal.com/ritesh-n/15min?overlayCalendar=true"
          className="group mt-8 inline-block rounded-xl border border-(--border-color) p-1
    focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span
            className="inline-flex h-11 items-center gap-3 rounded-lg border border-(--border-color)
      bg-(--card-bg) pl-5 pr-4 font-geist-sans text-base text-(--text-primary)
      transition-colors duration-200 group-hover:bg-(--border-color)"
          >
            Start a project
            {/* pixel accent: dim by default, lights up on hover */}
            <span aria-hidden="true" className="flex items-center gap-[3px]">
              <span className="size-[5px] bg-[#7c3aed] opacity-40 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="size-[5px] bg-[#d946ef] opacity-40 transition-opacity delay-75 duration-200 group-hover:opacity-100" />
              <span className="size-[5px] bg-[#22d3ee] opacity-40 transition-opacity delay-150 duration-200 group-hover:opacity-100" />
            </span>
          </span>
        </a>
      </div>
    </footer>
  );
}

/* clipboard.writeText only exists on HTTPS / localhost, so fall back to
   the old textarea + execCommand trick (works on http LAN testing too) */
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;font-size:16px"; // 16px stops iOS zoom
  document.body.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

export default function NewPortfolio() {
  const [copyState, setCopyState] = useState("idle"); // idle | done | fail
  const navLinksCss =
    "relative text-base font-dm-sans tracking-wide after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";
  const trailRef = useRef(null);
  useCursorTrail(trailRef);
  useClickSound();

  async function copyEmail() {
    let ok = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(EMAIL);
        ok = true;
      } catch {
        ok = fallbackCopy(EMAIL);
      }
    } else {
      ok = fallbackCopy(EMAIL);
    }
    setCopyState(ok ? "done" : "fail");
    setTimeout(() => setCopyState("idle"), 1500);
  }

  const renderSocial = (s) => (
    <a
      key={s.label}
      href={s.href}
      target="_blank"
      rel="noreferrer"
      className={pill}
    >
      {icons[s.icon]}
      {s.label}
    </a>
  );
  const [firstSocial, ...otherSocials] = socials;

  return (
    <div
      style={colors}
      className="relative isolate min-h-screen bg-(--body-bg)
    font-geist-sans text-(--text-primary) select-none"
    >
      <canvas
        ref={trailRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      />

      {/* nav */}
      <nav
        aria-label="Primary"
        className={`sticky top-0 z-50 border-b bg-(--body-bg)/80 backdrop-blur py-5 ${line}`}
      >
        <div className="flex w-full items-center justify-between px-8 text-[16px] md:justify-center md:gap-8 text-[#6e6e6e] md:px-0">
          <a href="#" className={`${navLinksCss}`}>
            Home
          </a>
          <a href="#work" className={`${navLinksCss}`}>
            Work
          </a>
          <a href="#contact" className={`${navLinksCss}`}>
            Contact me
          </a>
          <a href={RESUME} download className={`${navLinksCss}`}>
            Resume
          </a>
        </div>
      </nav>

      <main className="relative z-10 mb-[320px] bg-(--body-bg)">
        <div className="mx-auto w-[calc(100%-1.5rem)] max-w-[800px] border-x border-(--border-color) md:px-8">
          {/* intro */}
          <section className={`${col} pt-12 md:pt-14`}>
            <h2 className="font-serif text-2xl text-(--text-primary) md:text-[26px]">
              Ritesh Nishad
            </h2>
            <p className={`mt-1 font-geist-sans text-base text-[#6e6e6e]`}>
              Product designer (UI/UX)
            </p>

            <div
              className={`mt-6 space-y-3 text-base leading-6 md:text-[16px] text-[#dadada]`}
            >
              <p>
                I&apos;m Ritesh, who loves to think a lot. I am a{" "}
                <span className="text-(--text-primary)">product designer</span>{" "}
                from{" "}
                <span className="inline-flex items-baseline gap-1.5 align-middle text-(--text-primary)">
                  {icons.india}
                  INDIA
                </span>
              </p>
              <p>
                I make software interfaces more meaningful, visually appealing,
                delightful, and interfaces that are obvious and easy to use.
              </p>
              <p>
                I care deeply about craft and quality and I like to make people
                feel something through my work. I'm obsessed with details and I
                spend an unreasonable amount of time making sure they feel
                right. I enjoy turning an ambiguous problem into something clear
                and useful.
              </p>
            </div>
          </section>

          {/* contact */}
          <section id="contact" className={`${col} scroll-mt-6 pt-12`}>
            <h3 className="font-geist-sans text-base text-(--text-primary)">
              Contact me :
            </h3>
            {/* order is chosen so the pills pair up two per row on phones */}
            <div className="mt-4 flex w-full flex-wrap gap-3 sm:w-[80%]">
              <button onClick={copyEmail} className={pill}>
                {icons.mail}
                {copyState === "done"
                  ? "Copied!"
                  : copyState === "fail"
                    ? "Copy failed"
                    : "Copy email"}
              </button>

              {renderSocial(firstSocial)}

              <a href={RESUME} download className={pill}>
                {icons.file}
                Download resume
              </a>

              {otherSocials.map(renderSocial)}
            </div>
          </section>

          {/* selected works */}
          <section
            id="work"
            className={`${col} scroll-mt-6 pb-24 pt-16 md:pt-20`}
          >
            <h3 className="font-geist-sans text-base text-(--text-primary)">
              <span className="mr-2">(+_+)</span> Selected works
            </h3>

            <div className="mt-8 flex flex-col gap-14 md:gap-16">
              {works.map((w) => (
                <article key={w.title}>
                  <a
                    href={w.href}
                    className="block rounded-xl border bg-[#0b0b0b] border-(--border-color) p-1"
                  >
                    {w.images ? (
                      <HeroMarquee images={w.images} />
                    ) : (
                      <div className="flex aspect-[4/3] w-full items-start justify-center overflow-hidden rounded-lg border border-(--border-color) px-[9%] pt-[7%] md:aspect-[16/11]">
                        <img
                          src={w.image}
                          alt={`${w.title} landing page`}
                          loading="lazy"
                          className="h-auto w-full shrink-0 rounded-t-md border border-b-0 border-(--border-color)"
                        />
                      </div>
                    )}
                  </a>

                  <h3 className="mt-6 font-geist-sans text-xl text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-6 text-[#dadada]">
                    {w.description}
                  </p>
                  <a
                    href={w.href}
                    className="relative mt-4 inline-flex w-fit items-center gap-1 whitespace-nowrap text-lg text-(--text-primary) hover:opacity-70
    after:absolute after:bottom-0 after:left-0 after:h-[1px]
    after:w-0 after:bg-current after:transition-all
    after:duration-300 hover:after:w-full"
                  >
                    Case study
                    {icons.chevron}
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-0">
        <ContactFooter />
      </div>
    </div>
  );
}
