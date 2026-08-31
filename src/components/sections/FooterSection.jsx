import { useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import gradient from "../../assets/footer-gradients.png";
import BaseGrid from "../ui/BaseGrid";

import { scrollToSection } from "../../utils/ScrollTo";

const palettes = {
  monarch: {
    primary: "#E8720C",
    secondary: "#F4A93B",
    vein: "#1A1A1A",
    body: "#1A1A1A",
    spots: "#FFFFFF",
  },
  morpho: {
    primary: "#3E6FE0",
    secondary: "#7FA3F2",
    vein: "#12224D",
    body: "#12224D",
    spots: "#DCE6FF",
  },
  swallowtail: {
    primary: "#F6D34B",
    secondary: "#FCE896",
    vein: "#1A1A1A",
    body: "#1A1A1A",
    spots: "#1A1A1A",
  },
  rosepink: {
    primary: "#E0568C",
    secondary: "#F2A4C4",
    vein: "#3B1024",
    body: "#3B1024",
    spots: "#FFF3F8",
  },
};

const MIN_SIZE = 48;
const STAGE_W = 1100;
const STAGE_H = 760;

// Each path is a CLOSED loop — starts and ends at (0,0) — so the
// animation can run "infinite" forever with no jump or reset needed.
const butterflies = [
  {
    id: 1,
    palette: "monarch",
    size: 58,
    startX: -320,
    startY: -40,
    flapDuration: 0.32,
    duration: 14,
    delay: 0,
    path: [
      { x: -190, y: -160, r: 10 },
      { x: -60, y: -230, r: -6 },
      { x: 110, y: -210, r: 8 },
      { x: 270, y: -120, r: -8 },
      { x: 310, y: 30, r: 6 },
      { x: 230, y: 145, r: -6 },
      { x: 80, y: 185, r: 4 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    id: 2,
    palette: "morpho",
    size: 66,
    startX: 330,
    startY: -70,
    flapDuration: 0.28,
    duration: 15.5,
    delay: 0.3,
    path: [
      { x: 190, y: -185, r: -10 },
      { x: 25, y: -245, r: 6 },
      { x: -160, y: -200, r: -8 },
      { x: -305, y: -70, r: 8 },
      { x: -330, y: 85, r: -6 },
      { x: -230, y: 170, r: 10 },
      { x: -70, y: 195, r: -4 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    id: 3,
    palette: "swallowtail",
    size: 52,
    startX: -40,
    startY: 185,
    flapDuration: 0.4,
    duration: 13,
    delay: 0.6,
    path: [
      { x: -205, y: 145, r: 6 },
      { x: -305, y: 15, r: -8 },
      { x: -260, y: -130, r: 5 },
      { x: -100, y: -215, r: -6 },
      { x: 100, y: -230, r: 8 },
      { x: 260, y: -115, r: -4 },
      { x: 300, y: 55, r: 6 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    id: 4,
    palette: "rosepink",
    size: 48,
    startX: 40,
    startY: 195,
    flapDuration: 0.26,
    duration: 12,
    delay: 0.9,
    path: [
      { x: 215, y: 125, r: -6 },
      { x: 310, y: -10, r: 8 },
      { x: 270, y: -155, r: -10 },
      { x: 115, y: -230, r: 6 },
      { x: -85, y: -210, r: -8 },
      { x: -240, y: -115, r: 4 },
      { x: -280, y: 40, r: -6 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    id: 5,
    palette: "monarch",
    size: 60,
    startX: -320,
    startY: 95,
    flapDuration: 0.34,
    duration: 14.5,
    delay: 1.2,
    path: [
      { x: -265, y: -70, r: 8 },
      { x: -185, y: -195, r: -6 },
      { x: 0, y: -240, r: 8 },
      { x: 185, y: -195, r: -8 },
      { x: 280, y: -55, r: 6 },
      { x: 265, y: 115, r: -6 },
      { x: 125, y: 185, r: 4 },
      { x: 0, y: 0, r: 0 },
    ],
  },
];

function ButterflySVG({ size, flapDuration, palette, gradId }) {
  const c = palettes[palette];
  return (
    <svg
      width={size}
      height={size}
      viewBox="-42 -44 84 88"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`wing-${gradId}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={c.primary} />
          <stop offset="100%" stopColor={c.secondary} />
        </linearGradient>
      </defs>
      <g
        style={{
          transformOrigin: "0px 0px",
          animation: `wingFlap ${flapDuration}s ease-in-out infinite`,
        }}
      >
        <path
          d="M0,-3 C-11,-27 -38,-33 -41,-11 C-43,4 -21,11 -3,2 Z"
          fill={`url(#wing-${gradId})`}
          stroke={c.vein}
          strokeWidth="1"
        />
        <path
          d="M0,3 C-9,21 -30,28 -34,10 C-36,0 -18,-2 -3,-2 Z"
          fill={`url(#wing-${gradId})`}
          opacity="0.85"
          stroke={c.vein}
          strokeWidth="0.8"
        />
        <circle cx="-20" cy="-16" r="3" fill={c.spots} opacity="0.9" />
        <circle cx="-24" cy="4" r="2.2" fill={c.spots} opacity="0.8" />
      </g>
      <g
        style={{
          transformOrigin: "0px 0px",
          animation: `wingFlap ${flapDuration}s ease-in-out infinite`,
          animationDelay: `${flapDuration / 2}s`,
        }}
      >
        <path
          d="M0,-3 C11,-27 38,-33 41,-11 C43,4 21,11 3,2 Z"
          fill={`url(#wing-${gradId})`}
          stroke={c.vein}
          strokeWidth="1"
        />
        <path
          d="M0,3 C9,21 30,28 34,10 C36,0 18,-2 3,-2 Z"
          fill={`url(#wing-${gradId})`}
          opacity="0.85"
          stroke={c.vein}
          strokeWidth="0.8"
        />
        <circle cx="20" cy="-16" r="3" fill={c.spots} opacity="0.9" />
        <circle cx="24" cy="4" r="2.2" fill={c.spots} opacity="0.8" />
      </g>
      <ellipse cx="0" cy="0" rx="1.8" ry="16" fill={c.body} />
      <circle cx="0" cy="-15" r="2" fill={c.body} />
    </svg>
  );
}

// Simple even spacing across the closed loop, no fade logic in here at
// all — opacity is handled separately by React/CSS, not by keyframes.
function buildFlightKeyframes(butterfly) {
  const n = butterfly.path.length;
  const frames = butterfly.path
    .map((p, i) => {
      const pct = Math.round((i / n) * 100);
      return `${pct}% { transform: translate(${p.x}px, ${p.y}px) rotate(${p.r}deg); }`;
    })
    .join("\n");
  return `@keyframes flyButterfly${butterfly.id} { 0% { transform: translate(0,0) rotate(0deg); } ${frames} 100% { transform: translate(0,0) rotate(0deg); } }`;
}

export default function FooterSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section id="footerSection" className="bg-body h-[80vh] overflow-clip">
      <Container className="relative z-10 h-full w-full">
        <BaseGrid className="h-full w-full">
          <div className="col-span-12 flex flex-col text-center font-body font-medium justify-center items-center gap-10 h-full w-full relative">
            <h3 className="lg:text-5xl text-3xl max-w-[680px] tracking-tight relative z-10">
              Couldn't find what you are looking for ? Just ask.
            </h3>

            {/* Hover now scoped to just this button wrapper */}
            <div
              className="relative z-10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Button onClick={(e) => scrollToSection(e, "contactSection")}>
                Get in touch
              </Button>
            </div>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden pointer-events-none z-20"
              style={{ width: STAGE_W, maxWidth: "92vw", height: STAGE_H }}
            >
              {butterflies.map((butterfly) => (
                <div
                  key={butterfly.id}
                  className="absolute pointer-events-none top-1/2 left-1/2"
                  style={{
                    width: Math.max(butterfly.size, MIN_SIZE),
                    height: Math.max(butterfly.size, MIN_SIZE),
                    marginLeft: butterfly.startX,
                    marginTop: butterfly.startY,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.35s ease",
                    animation: `flyButterfly${butterfly.id} ${butterfly.duration}s linear ${butterfly.delay}s infinite`,
                  }}
                >
                  <ButterflySVG
                    size={Math.max(butterfly.size, MIN_SIZE)}
                    flapDuration={butterfly.flapDuration}
                    palette={butterfly.palette}
                    gradId={butterfly.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </BaseGrid>
      </Container>
      <img
        src={gradient}
        loading="lazy"
        className="absolute lg:-bottom-0.5 bottom-5 lg:right-[-450px] max-w-none lg:w-[150%] w-[200%] pointer-events-none z-0 img-fallback"
        alt=""
        onLoad={(e) => e.currentTarget.classList.add("loaded")}
      />
      <style>{`
        @keyframes wingFlap {
          0%   { transform: scaleX(1); }
          50%  { transform: scaleX(0.2); }
          100% { transform: scaleX(1); }
        }
        ${butterflies.map(buildFlightKeyframes).join("\n")}
      `}</style>
    </Section>
  );
}
