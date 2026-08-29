// src/data/caseStudies.js
import morphCover from "../assets/cover-img/morph-cover.webp";
import tolgeeCover from "../assets/cover-img/tolgee-cover.webp";
import portfolio1Cover from "../assets/cover-img/portfolio-v1-cover.webp";
import portfolio2Cover from "../assets/cover-img/portfolio-v2-cover.webp";


const PROJECT_URL =
  "https://hvwdoouwqyukyonadjse.supabase.co/storage/v1/object/public/case-studies";

export const caseStudies = [
  {
    slug: "morph",
    type: "Concept",
    title: "Morph case study",
    credits: "Ritesh Nishad",
    coverImageAlt: "Morph cover img",
    coverImage: morphCover,

    overview:
      "Morph is a gymwear label. I set myself the brief of giving it a real visual identity — a logo system and a black-and-white foundation, with one accent colour held back so it punctuates instead of shouting.",

    challenge:
      "Morph had the ambition of a premium label but no identity to match. No logo system, no colour language, no point of view past 'gym clothes.' The brief was to build one from the ground up that felt considered, without losing the edge a younger, style-driven audience expects.",

    approach:
      "I built the identity around restraint — a refined logo system on a black-and-white base, with an electric blue accent reserved to mark key moments rather than fill the palette. Every spacing and export decision was made so the brand holds up from packaging to product tags.",

    scope: ["branding", "logo design", "identity system"],
    images: [
      "morph-boys.webp",
      "morph-outdoor.webp",
      "morph-store.webp",
      "morph-variations.webp",
      "brand-guide.webp",
      "pattern.webp",
      "stack-variants.webp",
    ].map((fileName) => ({
      src: `${PROJECT_URL}/morph/${fileName}`,
      alt: fileName
        .replace(".webp", "")
        .replace(/([A-Z])/g, " $1")
        .trim(),
    })),
  },

  {
    slug: "tolgee",
    type: "Concept",
    title: "Tolgee case study",
    credits: "Ritesh Nishad",
    coverImageAlt: "Tolgee cover img",
    coverImage: tolgeeCover,

    overview:
      "Tolgee is an open-source localization platform built for developers — letting teams manage translations, edit text directly inside their live app, and use AI-assisted translation without slowing down their workflow.",
    challenge:
      "Tolgee's product is sharp and developer-friendly, which is exactly why I picked it as a concept brief. The landing page spread its value thin, and I wanted to see if a tighter design made the product's strengths land faster for a technical reader.",
    approach:
      "For this concept I rebuilt the landing page around a clearer narrative — leading with the core promise, then giving each feature (in-context translation, AI-powered accuracy, framework integrations) its own focused moment instead of competing for attention. I tightened the typography and spacing for a premium developer-tool feel, and simplified the hierarchy so the capabilities read at a glance. I shared the concept with Tolgee's founders, who responded positively to the direction.",
    scope: ["web design", "UI/UX", "concept exploration"],

    images: [
      "events-page.webp",
      "features-section.webp",
      "laptop-mockup.webp",
      "mobile.webp",
      "morph-1.webp",
      "pricing-card.webp",
      "tlogo-marquee.webp",
      "ttolgee-desktop.webp",
      "tolgee-homepage.webp",
      "user-reviews.webp",
    ].map((fileName) => ({
      src: `${PROJECT_URL}/tolgee/${fileName}`,
      alt: fileName
        .replace(".webp", "")
        .replace(/([A-Z])/g, " $1")
        .trim(),
    })),
  },

  {
  slug: "portfolio",
  type: "Self-initiated",
  title: "Portfolio v1",
  credits: "Ritesh Nishad",
  coverImageAlt: "Portfolio v1 cover img",
  coverImage: portfolio1Cover,

  overview:
    "The first attempt at this site. Built in Figma over a few weeks, never actually launched. I kept redoing the same sections until I lost track of what I even wanted anymore.",

  challenge:
    "There was no client and no deadline, which sounds nice until you realize the only feedback you're getting is from yourself at midnight, and you're a terrible client. I'd finish a version, hate it two days later, and start over. Did that more times than I want to count.",

  approach:
    "Mostly just iterating — moodboards, layout attempts, throwing most of it away. It stayed in Figma and never got built, but a lot of what ended up in v2 came out of figuring out what wasn't working here.",

  scope: ["web design", "UI/UX", "branding"],
  images: [
    "hero-section-iterations.webp",
    "other-itrations.webp",
    "page-itrations.webp",
  ].map((fileName) => ({
    src: `${PROJECT_URL}/portfolio-v1/${fileName}`,
    alt: fileName
      .replace(".webp", "")
      .replace(/([A-Z])/g, " $1")
      .trim(),
  })),
},

{
  slug: "portfolio-v2",
  type: "Self-initiated",
  title: "Portfolio v2",
  credits: "Ritesh Nishad",
  coverImageAlt: "Portfolio v2 cover img",
  coverImage: portfolio2Cover,

  overview:
    "This is the site you're on right now. Designed and built by me, actually shipped this time.",

  challenge:
    "After v1 sat unfinished for weeks, the real problem wasn't design, it was finishing. I had to stop tweaking spacing for the tenth time and just decide something was good enough to put live.",

  approach:
    "Took what I learned from v1, cut a lot of it down, and rebuilt the whole thing with a clearer structure. Wrote the copy myself instead of defaulting to portfolio-speak. Built it in React and pushed it live.",

  scope: ["web design", "UI/UX", "branding", "front-end"],
  images: [
    "hero-section.webp",
    "work-section.webp",
    "service-section.webp",
    "process-section.webp",
    "about-me-footer-section.webp",
    "contact-section.webp",
  ].map((fileName) => ({
    src: `${PROJECT_URL}/portfolio-v2/${fileName}`,
    alt: fileName
      .replace(".webp", "")
      .replace(/([A-Z])/g, " $1")
      .trim(),
  })),
},

];
