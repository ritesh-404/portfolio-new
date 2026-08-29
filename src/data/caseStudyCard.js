import { TolgeeImg } from "../assets/featured-card-img";
import {MorphBoys} from "../assets/caseStudyImg/morph-caseStudy-img"
import { FinalPortfolio } from "../assets/caseStudyImg/myPortfolio-caseStudy-img";

const caseStudyData = [
  {
    id: "tolgee",
    image: TolgeeImg,
    tags: [
      "development",
      "web design",
      "strategy",
      "branding",
      "Brand illustrations",
      "visual identity",
    ],
    title: "Tolgee",
    description:
      "Bringing structure and perfect positining to tolgee's website",
  },
  {
    id: "morph",
    image: MorphBoys,
    tags: ["Logo design", "Visual identity", "strategy", "branding"],
    title: "Morph",
    description:
      "Giving morph a global positioning as a GYM wear clothing brand",
  },
  {
    id: "portfolio",
    image: FinalPortfolio,
    tags: ["Web design", "Visual identity", "strategy", "branding"],
    title: "v0.1 of My portfolio",
    description:
      "You are going to love this case study i promise!",
  },

];

export default caseStudyData;
