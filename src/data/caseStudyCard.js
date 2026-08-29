import { TolgeeCard,MorphCard,Portfolio1Card,Portfolio2Card } from "../assets/caseStudy-card";

const caseStudyData = [
  {
    id: "tolgee",
    image: TolgeeCard,
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
    image: MorphCard,
    tags: ["Logo design", "Visual identity", "strategy", "branding"],
    title: "Morph",
    description:
      "Giving morph a global positioning as a GYM wear clothing brand",
  },
  {
    id: "portfolio",
    image: Portfolio1Card,
    tags: ["Web design", "Visual identity", "strategy", "branding"],
    title: "v1.0 portfolio",
    description: "This is the first version of my portfolio",
  },
  {
    id: "portfolio-v2",
    image: Portfolio2Card,
    tags: ["Web design", "Visual identity", "strategy", "branding"],
    title: "v2.0 portfolio",
    description: "This is the second version of my portfolio - final one",
  },
];

export default caseStudyData;
