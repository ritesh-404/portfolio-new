import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../assets/hero_Section_Project_Img/temporal_ai";

import {
  laptopMockup,
  mobile,
  tolgeeHomepage,
  userReviews,
} from "../assets/hero_Section_Project_Img/tolgee_ai";

import {
  faviconDark,
  faviconLight,
  fundRaising,
  logo,
  macbookDeck,
} from "../assets/hero_Section_Project_Img/doctos_ai";

import {
  morphOutdoor,
  clothMockup,
  appMockup,
  logoVariations,
  trackMockup,
} from "../assets/hero_Section_Project_Img/morph";

const caseStudies = [
  {
    id: "temporal",

    title:
      "Temporal ai — Landing page redesign to brind structure and illustrate the process more clearly.",

    description:
      "The current landing page was too messy, no hierarchy that was making it harder to scan the information and also the illustrations were too outdated and held no meaning. The redesign of their landing page makes cleaner and sensible illustrations to explain the product and brought consistency and structure to the design.",

    tags: ["Web design", "Design system", "Strategy", "Illustrations"],

    images: [img1, img2, img3, img4, img5, img6, img7, img8],
    caseStudy: true,
  },

  {
    id: "tolgee",

    title:
      "Tolgee - Landing page redesign to brind structure, and consistent design to keep the brand together everywhere.",

    description:
      "Tolgee’s landing page lacked clear structure and made its localization workflow harder to understand. I redesigned it with stronger hierarchy, cleaner visuals, and product-focused sections that make Tolgee’s AI-powered localization tools easier to scan and understand.",

    tags: ["Web design", "Design system", "Strategy & direction"],

    images: [laptopMockup, mobile, userReviews, tolgeeHomepage],

    // caseStudy: true,
  },

  {
    id: "morph",

    title:
      "MØRPH — Fitness apparel brand for working professionals who care about quality and comfort",

    description:
      "A visual identity and digital experience built around transformation, movement and a modern athletic aesthetic. They needed something that was real process like caterpillars morphing into butterflies this was the idea.",

    tags: ["Logo design", "Strategy", "Direction"],

    images: [trackMockup, appMockup, logoVariations, clothMockup, morphOutdoor],
  },

  {
    id: "doctus",
    title:
      "Doctus: An AI code review platform helping startups and enterprises catch bugs earlier.",

    description:
      "The final Doctus logo uses a magnifying glass effect within the letter D, representing how Doctus closely examines code to catch even the smallest bugs that can easily be overlooked by humans.",
    tags: ["Logo Design", "Strategy", "Direction"],
    images: [logo, fundRaising, macbookDeck, faviconLight, faviconDark],
  },
];

export default caseStudies;
