// src/data/caseStudies.js
import morphCover from "../assets/cover-img/morph-cover.webp";
import tolgeeCover from "../assets/cover-img/tolgee-cover.webp";

const PROJECT_URL =
  "https://hvwdoouwqyukyonadjse.supabase.co/storage/v1/object/public/case-studies";

export const caseStudies = [
  {
    slug: "morph",
    type: "Concept",
    title: "Morph",
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
    title: "Tolgee",
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
      "hopepage-tolgee.webp",
      "pricing-card.webp",
      "tlogo-marquee.webp",
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
];
