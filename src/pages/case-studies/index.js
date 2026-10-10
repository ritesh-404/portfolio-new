import { lazy } from "react";

/**
 * One line per case study: slug -> its own .jsx file.
 * Each page is code-split, so it only loads when visited.
 */
export const caseStudyPages = {
  temporal: lazy(() => import("./TemporalCaseStudy")),
  typani: lazy(() => import("./TypaniCaseStudy")),
};