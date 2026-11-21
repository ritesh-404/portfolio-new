// Category options: "web", "mobile", or "experiments". The three original projects are web works.
import temporalImage from "../assets/images/temporal-img.webp";
import typaniImage from "../assets/images/typani-img.webp";
import openSeoImage from "../assets/images/openseo-img.webp";
import batchSelectionImage from "../assets/images/batch-selection-prototype.svg";

const caseStudies = [
  {
    id: "temporal",
    category: "web",
    label: "Temporal AI",
    image: temporalImage,
    cardDescription: "I re-designed the landing page of Temporal AI, I made the illustrations on the landing page more meaningful and technical as its target audience are programmers.",
  },
  {
    id: "typani",
    category: "web",
    label: "Typani AI",
    image: typaniImage,
    cardDescription: "I redesigned Typani’s landing page to clarify its Google review reply workflow, foreground the product demo, and make the value clear to busy local business owners.",
  },
  {
    id: "heroSections",
    category: "web",
    label: "Hero sections",
    image: openSeoImage,
    cardDescription: "I redesign startup hero sections to make each product’s value easier to grasp, bringing the audience, core promise, and next step into focus with clearer layouts.",
  },
  {
    id: "batch-selection-prototype",
    category: "experiments",
    label: "Batch selection prototype",
    image: batchSelectionImage,
    cardDescription: "An interaction study exploring accessible batch selection, grouped options, and keyboard-friendly range selection.",
  },
];

export default caseStudies;
