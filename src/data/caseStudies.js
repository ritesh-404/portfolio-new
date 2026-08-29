// src/data/caseStudies.js

import {
  BrandGuide,
  LogoVariants,
  MorphBoys,
  MorphOutdoor,
  MorphStore,
  MorphVariations,
  Morph,
  StackVariants,
  Pattern,
} from "../assets/caseStudyImg/morph-caseStudy-img";

import {
  EventsPage,
  FeaturesSection,
  LaptopMockup,
  LogoMarquee,
  Mobile,
  PricingCard,
  UserReviews,
  TolgeeHomepage,
  TolgeeDesktop,
  tolgeeCoverImg,
} from "../assets/caseStudyImg/tolgee-caseStudy-img";

import {
  FavIteration10,
  FavIteration13,
  FavIteration6,
  HeroHomeAlt,
  HeroHome,
  HeroIteration1,
  HeroIteration11,
  HeroIteration12,
  HeroIteration2,
  HeroIteration3,
  HeroIteration4,
  HeroIteration5,
  HeroIteration7,
  HeroIteration8,
  HeroIteration9,
  AboutV1a,
  AboutV1b,
  AboutV1c,
  AboutV1d,
  AboutPage,
  AboutMe,
  CaseStudyPage,
  ContactPage,
  ContactMe,
  FeaturedProjects,
  HomeV1,
  HomePage,
  MyWorks,
  PricingPage,
  ProcessPage,
  Writings,
  CleanLayers,
  FinalPortfolio,
  IterationHome,
  IterationMoodboard,
  IterationProjects,
  OldNewLayout,
  Planning,
  PrototypeFigma,
  WritingPost,
} from "../assets/caseStudyImg/myPortfolio-caseStudy-img";

export const caseStudies = [
  {
    slug: "morph",
    type: "Concept",
    title: "Morph case study",
    credits: "Ritesh Nishad",
    coverImageAlt: "Morph cover img",
    coverImage: Pattern,

    overview:
      "Morph is a gymwear label. I set myself the brief of giving it a real visual identity — a logo system and a black-and-white foundation, with one accent colour held back so it punctuates instead of shouting.",

    challenge:
      "Morph had the ambition of a premium label but no identity to match. No logo system, no colour language, no point of view past 'gym clothes.' The brief was to build one from the ground up that felt considered, without losing the edge a younger, style-driven audience expects.",

    approach:
      "I built the identity around restraint — a refined logo system on a black-and-white base, with an electric blue accent reserved to mark key moments rather than fill the palette. Every spacing and export decision was made so the brand holds up from packaging to product tags.",

    scope: ["branding", "logo design", "identity system"],

    images: [
      {
        src: BrandGuide,
        alt: "MØRPH brand guidelines",
      },
      {
        src: LogoVariants,
        alt: "MØRPH logo variations",
      },
      {
        src: MorphVariations,
        alt: "MØRPH visual identity variations",
      },
      {
        src: StackVariants,
        alt: "MØRPH stacked logo variations",
      },
      {
        src: Morph,
        alt: "MØRPH brand identity presentation",
      },
      {
        src: MorphBoys,
        alt: "MØRPH campaign featuring athletes",
      },
      {
        src: MorphOutdoor,
        alt: "MØRPH outdoor advertising campaign",
      },
      {
        src: MorphStore,
        alt: "MØRPH retail and storefront application",
      },
      {
        src: Pattern,
        alt: "MØRPH brand pattern",
      },
    ],
  },

  {
    slug: "tolgee",
    type: "Concept",
    title: "Tolgee case study",
    credits: "Ritesh Nishad",
    coverImageAlt: "Tolgee cover img",
    coverImage: tolgeeCoverImg,

    overview:
      "Tolgee is an open-source localization platform built for developers — letting teams manage translations, edit text directly inside their live app, and use AI-assisted translation without slowing down their workflow.",
    challenge:
      "Tolgee's product is sharp and developer-friendly, which is exactly why I picked it as a concept brief. The landing page spread its value thin, and I wanted to see if a tighter design made the product's strengths land faster for a technical reader.",
    approach:
      "For this concept I rebuilt the landing page around a clearer narrative — leading with the core promise, then giving each feature (in-context translation, AI-powered accuracy, framework integrations) its own focused moment instead of competing for attention. I tightened the typography and spacing for a premium developer-tool feel, and simplified the hierarchy so the capabilities read at a glance. I shared the concept with Tolgee's founders, who responded positively to the direction.",
    scope: ["web design", "UI/UX", "concept exploration"],
    images: [
      {
        src: TolgeeHomepage,
        alt: "Tolgee homepage",
      },
      {
        src: LaptopMockup,
        alt: "Tolgee laptop mockup",
      },
      {
        src: Mobile,
        alt: "Tolgee mobile view",
      },
      {
        src: PricingCard,
        alt: "Tolgee pricing card",
      },

      {
        src: UserReviews,
        alt: "Tolgee user reviews",
      },
      {
        src: EventsPage,
        alt: "Tolgee events page",
      },
      {
        src: FeaturesSection,
        alt: "Tolgee features section",
      },

      {
        src: LogoMarquee,
        alt: "Tolgee logo marquee",
      },
      {
        src: TolgeeDesktop,
        alt: "Tolgee full img",
      },
    ],
  },

  {
    slug: "portfolio",
    type: "Self-initiated",
    title: "My portfolio : the site you're on, built end to end by me",
    credits: "Ritesh Nishad",
    coverImageAlt: "Portfolio cover img",
    coverImage: PrototypeFigma,

    overview:
      "Quick honest note: this is the portfolio you're currently scrolling through. No client, no brief, no deadline — just me, a blank Figma file, and an unreasonable number of opinions about my own taste. It took me 4 weeks and 40+ design iterations to get to the version in front of you, which is either dedication or a mild inability to call something 'done.'",

    challenge:
      "The hardest client I've ever worked with is myself. There was no one to please except the voice in my head that kept whispering 'is this too boring?' at 1am. I swung between 'clean and minimal' and 'wait, add more' so many times I filled an entire folder with hero sections that will never see the light of day. Designing for yourself turns out to be way scarier than designing for a paying client.",

    approach:
      "I stopped trying to be clever and started being honest. I planned the structure, built moodboards, prototyped in Figma, argued with myself, and threw away roughly 95% of what I made. The final design you're looking at is the small, stubborn 5% of iterations that actually felt like me — built in React, because if I'm going to overthink something, I might as well ship it.",

    scope: ["web design", "UI/UX", "branding", "front-end"],

    images: [
      {
        src: FinalPortfolio,
        alt: "Final portfolio design",
      },
      {
        src: HeroHome,
        alt: "Hero home exploration",
      },
      {
        src: HeroHomeAlt,
        alt: "Hero home alternative",
      },
      {
        src: HeroIteration1,
        alt: "Hero iteration 1",
      },
      {
        src: HeroIteration2,
        alt: "Hero iteration 2",
      },
      {
        src: HeroIteration3,
        alt: "Hero iteration 3",
      },
      {
        src: HeroIteration4,
        alt: "Hero iteration 4",
      },
      {
        src: HeroIteration5,
        alt: "Hero iteration 5",
      },
      {
        src: HeroIteration7,
        alt: "Hero iteration 7",
      },
      {
        src: HeroIteration8,
        alt: "Hero iteration 8",
      },
      {
        src: HeroIteration9,
        alt: "Hero iteration 9",
      },
      {
        src: HeroIteration11,
        alt: "Hero iteration 11",
      },
      {
        src: HeroIteration12,
        alt: "Hero iteration 12",
      },
      {
        src: FavIteration6,
        alt: "Favorite hero iteration 6",
      },
      {
        src: FavIteration10,
        alt: "Favorite hero iteration 10",
      },
      {
        src: FavIteration13,
        alt: "Favorite hero iteration 13",
      },
      {
        src: Planning,
        alt: "Portfolio planning",
      },
      {
        src: IterationMoodboard,
        alt: "Moodboard iteration",
      },
      {
        src: OldNewLayout,
        alt: "Old vs new layout direction",
      },
      {
        src: IterationHome,
        alt: "Home page iteration",
      },
      {
        src: IterationProjects,
        alt: "Projects page iteration",
      },
      {
        src: PrototypeFigma,
        alt: "Figma prototype",
      },
      {
        src: CleanLayers,
        alt: "Clean layers exploration",
      },
      {
        src: HomeV1,
        alt: "Home v1",
      },
      {
        src: HomePage,
        alt: "Home page",
      },
      {
        src: FeaturedProjects,
        alt: "Featured projects page",
      },
      {
        src: CaseStudyPage,
        alt: "Case study page",
      },
      {
        src: MyWorks,
        alt: "My works page",
      },
      {
        src: AboutV1a,
        alt: "About v1 exploration",
      },
      {
        src: AboutV1b,
        alt: "About v1 exploration",
      },
      {
        src: AboutV1c,
        alt: "About v1 exploration",
      },
      {
        src: AboutV1d,
        alt: "About v1 exploration",
      },
      {
        src: AboutPage,
        alt: "About page",
      },
      {
        src: ContactPage,
        alt: "Contact page",
      },
      {
        src: AboutMe,
        alt: "About me page",
      },
      {
        src: ContactMe,
        alt: "Contact me page",
      },
      {
        src: PricingPage,
        alt: "Pricing page",
      },
      {
        src: ProcessPage,
        alt: "Process page",
      },
      {
        src: Writings,
        alt: "Writings page",
      },
      {
        src: WritingPost,
        alt: "Writing post page",
      },
    ],
  },
];
