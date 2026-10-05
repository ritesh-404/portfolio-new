import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  temporalDesktop1,
  temporalDesktop2,
  temporalDesktop3,
  temporalDesktop4,
  temporalDesktop5,
  temporalDesktop6,
  temporalDesktop7,
  temporalDesktop4_3,
} from "../assets/hero_Section_Project_Img/temporal_ai";

import {
  typani4,
  typaniDesktop1,
  typaniDesktop2,
  typaniDesktop3,
  typaniDesktop4,
  typaniCard1,
  typaniCard2,
  typaniCard3,
  typaniCard4,
  typaniCard5,
} from "../assets/hero_Section_Project_Img/typani_ai";

import {
  tolgee4,
  tolgeeDesktop1,
  tolgeeDesktop2,
  tolgeeDesktop3,
  tolgeeDesktop4,
} from "../assets/hero_Section_Project_Img/tolgee_ai";

const caseStudies = [
  {
    id: "typani",

    title:
      "Typani — Landing page redesign to give review automation a clearer product story and stronger visual hierarchy.",

    description:
      "A self-initiated redesign of Typani’s website, focused on making the product story clearer, improving the hierarchy, and making features like automated review responses, brand voice, and multi-location management easier to understand at a glance.",

    tags: ["Web design", "UX strategy", "Visual direction"],

    images: [
      typani4,
      typaniDesktop1,
      typaniDesktop2,
      typaniDesktop3,
      typaniDesktop4,
      typaniCard1,
      typaniCard2,
      typaniCard3,
      typaniCard4,
      typaniCard5,
    ],

    caseStudy: true,
  },

  {
    id: "temporal",

    title:
      "Temporal ai — Landing page redesign to brind structure and illustrate the process more clearly.",

    description:
      "The current landing page was too messy, no hierarchy that was making it harder to scan the information and also the illustrations were too outdated and held no meaning. The redesign of their landing page makes cleaner and sensible illustrations to explain the product and brought consistency and structure to the design.",

    tags: ["Web design", "Design system", "Strategy", "Illustrations"],

    images: [
      temporalDesktop4_3,
      temporalDesktop1,
      temporalDesktop2,
      temporalDesktop3,
      temporalDesktop4,
      temporalDesktop5,
      temporalDesktop6,
      temporalDesktop7,
      img1,
      img2,
      img3,
      img4,
      img5,
    ],

    caseStudy: true,
  },

  {
    id: "tolgee",

    title:
      "Tolgee - Landing page redesign to brind structure, and consistent design to keep the brand together everywhere.",

    description:
      "Tolgee’s landing page lacked clear structure and made its localization workflow harder to understand. I redesigned it with stronger hierarchy, cleaner visuals, and product-focused sections that make Tolgee’s AI-powered localization tools easier to scan and understand.",

    tags: ["Web design", "Design system", "Strategy & direction"],

    images: [
      tolgee4,
      tolgeeDesktop1,
      tolgeeDesktop2,
      tolgeeDesktop3,
      tolgeeDesktop4,
    ],

    caseStudy: true,
  },
];

export default caseStudies;
