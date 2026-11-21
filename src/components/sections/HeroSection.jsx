import { createContext, useContext, useEffect, useState } from "react";

import SelectedWorks from "../ui/SelectedWorks";
import Button from "../ui/Button";

import favNew from "../../assets/images/fav-new.jpg";
import envelopeIcon from "../../assets/icons/Envelope.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

/* ------------------------------------------------------ */
/* BLUR-IN REVEAL (styles in index.css: .blur-in)         */
/* ------------------------------------------------------ */

// Order everything appears in on load.
// To reorder the page, just change these numbers.
const REVEAL_ORDER = {
  quote: 0,
  signature: 1,
  photo: 2,
  toggle: 3,
  about: 4,
  workStyle: 5,
  journey: 6,
  goal: 7,
  works: 8,
};

const STEP_MS = 140; // gap between one block starting and the next

// Fades a block in from blurred. Styles live in hero.css (.blur-in)
function BlurIn({ id, show, step = 0, className = "", children }) {
  return (
    <div
      id={id}
      className={`blur-in ${show ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: show ? `${step * STEP_MS}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------ */
/* QUOTE TEXT                                             */
/* ------------------------------------------------------ */

// Split where the layout needs it: a line break after the first
// sentence, and the closing mark glued to the last word.
const PART_1 = "Design is not just what it looks like and feels like. ";
const PART_2 = "Design is how it ";
const PART_3 = "works.";
const QUOTE = PART_1 + PART_2 + PART_3;

/* ------------------------------------------------------ */
/* SMALL PIECES                                           */
/* ------------------------------------------------------ */

function QuoteMark({ flip = false, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="4 5 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block h-[0.85em] w-[0.95em] align-[-0.05em] text-neutral-300 ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <path
        d="M6 11H10V7C10 6.73478 9.89464 6.48043 9.70711 6.29289C9.51957 6.10536 9.26522 6 9 6H6C5.73478 6 5.48043 6.10536 5.29289 6.29289C5.10536 6.48043 5 6.73478 5 7V10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11Z"
        fill="currentColor"
      />
      <path
        d="M10 11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H9C9.26522 6 9.51957 6.10536 9.70711 6.29289C9.89464 6.48043 10 6.73478 10 7V11ZM10 11V13C10 15.667 8.667 17.333 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11H19V7C19 6.73478 18.8946 6.48043 18.7071 6.29289C18.5196 6.10536 18.2652 6 18 6H15C14.7348 6 14.4804 6.10536 14.2929 6.29289C14.1054 6.48043 14 6.73478 14 7V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11Z"
        fill="currentColor"
      />
      <path
        d="M19 11H15C14.7348 11 14.4804 10.8946 14.2929 10.7071C14.1054 10.5196 14 10.2652 14 10V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18C18.2652 6 18.5196 6.10536 18.7071 6.29289C18.8946 6.48043 19 6.73478 19 7V11ZM19 11V13C19 15.667 17.667 17.333 15 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------ */
/* HERO QUOTE                                             */
/* ------------------------------------------------------ */

function HeroQuote({ show }) {
  return (
    <figure className="mx-auto pb-12 text-center pt-8">
      <BlurIn show={show} step={REVEAL_ORDER.quote}>
        <blockquote>
          <h1
            aria-label={QUOTE}
            className="mx-auto max-w-[680px] text-balance font-geist-sans text-2xl leading-[1.15] tracking-[-0.03em] text-neutral-900 sm:text-3xl"
          >
            <QuoteMark flip /> {PART_1}
            <br className="hidden sm:block" />
            {PART_2}
            <span className="whitespace-nowrap">
              {PART_3} <QuoteMark />
            </span>
          </h1>
        </blockquote>
      </BlurIn>

      <figcaption className="mt-5">
        <BlurIn show={show} step={REVEAL_ORDER.signature}>
          <span className="inline-block font-script text-4xl leading-none text-neutral-900">
            Steve Jobs
          </span>
        </BlurIn>
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------ */
/* ABOUT INTRO  (Story / TL;DR)                           */
/* ------------------------------------------------------ */

/* ------------------------------------------------------ */
/* STORY / TL;DR                                          */
/* ------------------------------------------------------ */
/* Story:  all text is black.                             */
/* TL;DR:  text is light grey, only <Em> phrases are black */

const ModeContext = createContext("tldr");

function Em({ children }) {
  const mode = useContext(ModeContext);
  return (
    <span
      className={`transition-colors duration-300 ${
        mode === "tldr" ? "text-neutral-950" : "text-inherit"
      }`}
    >
      {children}
    </span>
  );
}

function ViewToggle({ mode, onChange }) {
  const options = [
    ["tldr", "Short"],
    ["story", "Full story"],
  ];

  return (
    <div
      className="relative inline-grid grid-cols-2 border border-neutral-950"
      role="group"
      aria-label="About text length"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1/2 bg-neutral-950 transition-transform duration-300 ease-out ${
          mode === "story" ? "translate-x-full" : ""
        }`}
      />
      {options.map(([value, label]) => (
        <button
          key={value}
          type="button"
          aria-pressed={mode === value}
          onClick={() => onChange(value)}
          className={`relative cursor-pointer px-5 py-2.5 text-base leading-none transition-colors duration-300 ${
            mode === value
              ? "text-white"
              : "text-neutral-600 hover:text-neutral-950"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------ */
/* ABOUT INTRO                                            */
/* ------------------------------------------------------ */

function HeroIntro({ show }) {
  const [mode, setMode] = useState("tldr");
  const bodyColor = mode === "story" ? "text-neutral-950" : "text-neutral-300";

  return (
    <ModeContext.Provider value={mode}>
      <div id="aboutSection" className="pb-8">
        <BlurIn show={show} step={REVEAL_ORDER.photo}>
          <img className="w-full" src={favNew} alt="Portrait of Ritesh" />
        </BlurIn>

        <BlurIn show={show} step={REVEAL_ORDER.toggle} className="mt-10">
          <ViewToggle mode={mode} onChange={setMode} />
        </BlurIn>

        <div
          className={`mt-8 space-y-7 text-[18px] leading-[1.6] tracking-[-0.01em] transition-colors duration-300 sm:text-[19px] ${bodyColor}`}
        >
          <BlurIn show={show} step={REVEAL_ORDER.about}>
            <p className="text-pretty">
              Hey! I'm <Em>Ritesh</Em>, a{" "}
              <Em>software product designer from Mumbai, India.</Em> I enjoy
              figuring out how things work, why they look the way they do, and
              how they can be made better. I tend to bring a{" "}
              <Em>
                strong sense of taste and a lot of care into the products I
                design
              </Em>{" "}
              and build.
            </p>
          </BlurIn>

          <BlurIn show={show} step={REVEAL_ORDER.workStyle}>
            <p className="text-pretty">
              I enjoy working with ambitious founders and{" "}
              <Em>teams across product and web design.</Em> I'm currently{" "}
              <Em>open to freelance projects</Em> and{" "}
              <Em>full-time opportunities.</Em>
            </p>
          </BlurIn>

          <BlurIn show={show} step={REVEAL_ORDER.journey}>
            <p className="text-pretty">
              My journey started with frontend development, not design ;){" "}
              <Em>
                I gradually got into design by paying more attention to the
                software I use every day and the little interactions that make
                an experience feel special.
              </Em>{" "}
              Something as simple as the hover interactions in the Microsoft
              Store can catch my attention. They're just so delightful. More
              recently, I've found myself getting{" "}
              <Em>interested in icon design</Em>, partly inspired by the Google
              Gemini app on Android.
            </p>
          </BlurIn>

          <BlurIn show={show} step={REVEAL_ORDER.goal}>
            <p className="text-pretty">
              I'm still learning, building, and exploring different sides of
              design. <Em>My goal is to grow into a design engineer</Em> who can
              think through a problem, design a thoughtful solution, and bring
              it to life.
            </p>
          </BlurIn>
        </div>
      </div>
    </ModeContext.Provider>
  );
}

/* ------------------------------------------------------ */
/* CONTACT                                                */
/* ------------------------------------------------------ */

const EMAIL = "riteshnishadofficial66@gmail.com";
const BOOKING_URL = "https://cal.com/ritesh-n/15min?overlayCalendar=true";

const SOCIALS = [
  {
    label: "X",
    href: "https://x.com",
    icon: twitterIcon,
    iconClass: "scale-90",
  },
  { label: "LinkedIn", href: "https://linkedin.com", icon: linkedinIcon },
  { label: "GitHub", href: "https://github.com/ritesh-404", icon: githubIcon },
];

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function EnvelopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
    </svg>
  );
}

function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  return (
    <section className="panel hero-reveal hero-reveal--rest border-x border-b border-neutral-950 bg-white">
      <div id="footerSection" className="about-footer pt-2">
        <div className="content-column">
          {/* ACTIONS */}
          <div className="about-footer-actions space-y-3">
            <div>
              <Button href={BOOKING_URL} external size="lg" className="w-full">
                Book a call
                <ArrowRightIcon />
              </Button>
            </div>
            <div>
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={copyEmail}
              >
                <EnvelopeIcon />
                {emailCopied ? "Email copied" : "Copy email"}
              </Button>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="about-socials mt-5 flex items-center justify-center gap-[22px]">
            {SOCIALS.map(({ label, href, icon, iconClass = "" }) => (
              <a
                key={label}
                className="cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <img className={`h-6 w-6 ${iconClass}`} src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ */
/* HERO SECTION                                           */
/* ------------------------------------------------------ */

/* Page flow:
   1. everything blurs in on load, one block after another
   2. order: quote, signature, photo, toggle, about, works (see REVEAL_ORDER) */

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => setRevealed(true), []);

  return (
    <main className="site-shell">
      <section id="heroSection" className="relative isolate pt-4">
        {/* Quote + about */}
        <div className="panel section-panel relative z-10 border border-neutral-950 bg-white">
          <HeroQuote show={revealed} />
          <HeroIntro show={revealed} />
        </div>

        {/* Selected works */}
        <BlurIn id="workSection" show={revealed} step={REVEAL_ORDER.works}>
          <div className="panel section-panel border-x border-b border-neutral-950 bg-white">
            <h2 className="pb-6 pt-2 text-2xl leading-none tracking-[-0.02em] text-neutral-950">
              Selected works
            </h2>
            <SelectedWorks />
          </div>
        </BlurIn>

        <ContactSection />
      </section>
    </main>
  );
}
