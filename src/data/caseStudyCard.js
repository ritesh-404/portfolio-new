import {
  MorphBg,
  TolgeeBg,
  MorphLogo,
  TolgeeLogo,
  PortfolioThumbnail,
} from "../assets/featured-card-img";


const caseStudyData = [
  {
    id: "morph",
    imgUrl: MorphBg,
    logo: MorphLogo,
    category: "Concept — Branding & Identity",
    title: "Morph: visual identity for a gymwear label",
  },
  {
    id: "tolgee",
    imgUrl: TolgeeBg,
    logo: TolgeeLogo,
    category: "Concept — Website & UI",
    title: "Tolgee: a redesign concept for a developer tool",
  },
  {
    id: "my-portfolio",
    imgUrl: PortfolioThumbnail,
    category: "Self-initiated — Design & Build",
    title: "This site: a React portfolio I designed, built, and shipped myself",
  }
];

export default caseStudyData;
