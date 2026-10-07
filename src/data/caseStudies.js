const PROJECT_URL =
  "https://hvwdoouwqyukyonadjse.supabase.co/storage/v1/object/public/case-studies";

import {
  temporalOriginalActivityImg,
  temporalOriginalBento,
  temporalOriginalCtaFooter,
  temporalOriginalFeatureCards,
  temporalOriginalFooter,
  temporalOriginalHandleFailure,
  temporalOriginalHappyComputer,
  temporalOriginalHeroSection,
  temporalOriginalLanguage,
  temporalOriginalStateMachines,
  temporalOriginalTalks,
  temporalOriginalTestimonials,
  temporalOriginalVisibilityInCode,
  temporalOriginalWatchDemo,
  temporalOriginalWorkflowDemo,
  originalNav,
} from "../assets/case_study_media/temporal/original";

import {
  temporalRedesignedActivityImg,
  temporalRedesignedBento,
  temporalRedesignedCtaFooter,
  temporalRedesignedFeatureCards,
  temporalRedesignedFooter,
  temporalRedesignedHandleFailure,
  temporalRedesignedHappyComputer,
  temporalRedesignedHeroSection,
  temporalRedesignedLanguage,
  temporalRedesignedStateMachine,
  temporalRedesignedTalks,
  temporalRedesignedTestimonial,
  temporalRedesignedVisibilityInCode,
  temporalRedesignedWatchDemo,
  temporalRedesignedWorkflowDemo,
  redesignedNav,
} from "../assets/case_study_media/temporal/redesigned";

import finalVideo from "../assets/case_study_media/temporal/temporal-comparison.mp4";

export const caseStudies = [
  {
    slug: "temporal",
    type: "self-initiated redesign",
    title: "Temporal AI",
    credits: "Ritesh Nishad",

    /* ==========================================
       HERO VIDEO
       ========================================== */

    heroVideo: `${PROJECT_URL}/temporal/temporal-video.mp4`,

    overview:
      "Temporal Technologies Inc. is an American enterprise software company that develops and distributes the world's leading open-source durable execution platform.",

    content: [
      /* ==========================================
         1. TEXT ONLY
         ========================================== */

      // {
      //   type: "text",
      //   text: "Okay so if you dont have time to read all the stuff you can just go through images ;)",
      // },

      /* ==========================================
         2. HEADING + ONE DESCRIPTION
         ========================================== */

      {
        type: "section",

        heading: "The Problem",

        paragraphs: [
          "The current landing page was too messy, no hierarchy that was making it harder to scan the information and also the illustrations were too outdated and held no meaning. The redesign of their landing page makes cleaner and sensible illustrations to explain the product and brought consistency and structure to the design.",
        ],
      },

      /* ==========================================
         3. HEADING + MULTIPLE DESCRIPTIONS
         ========================================== */

      {
        type: "section",

        heading: "The Approach",

        paragraphs: [
          "The goal was to make the product easier to understand while improving the overall visual hierarchy. I researched the product, the people it serves, and how the different features actually work before redesigning the interface. The research helped me make better decisions instead of designing illustrations and layouts based purely on assumptions.",
        ],
      },

      {
        type: "section",

        heading: "Navbar",

        paragraphs: [
          "For example their navbar menu was too vague and like really hard to scan what were the options so i instead used this very classic design principle where you show the icon before the label and it helps you scan the information way faster than just the text because our mind loves visuals and that's why i have added meaningful icons for each label.",
        ],
      },

      /* ==========================================
         4. ORIGINAL NAVBAR
         ========================================== */

      {
        type: "image",

        src: originalNav,

        alt: "Temporal's original navbar",

        label:
          "Original navbar — vague labels made the navigation harder to scan.",
      },

      /* ==========================================
         5. REDESIGNED NAVBAR
         ========================================== */

      {
        type: "image",

        src: redesignedNav,

        alt: "Temporal's redesigned navbar",

        label:
          "Redesigned navbar — clearer labels and meaningful icons make the navigation easier to scan.",
      },

      /* ==========================================
         6. HERO SECTION
         ========================================== */

      {
        type: "section",

        heading: "Hero section",

        paragraphs: [
          "I researched the product, audience and business requirements to make a solid hero section that actually explains the visitor what temporal is all about. [here developers are supposed to animate those bars]",
        ],
      },

      {
        type: "image",

        src: temporalOriginalHeroSection,

        alt: "Temporal's original hero section",

        label:
          "Original hero section — the design did not clearly communicate what Temporal does.",
      },

      /* ==========================================
         7. REDESIGNED HERO SECTION
         ========================================== */

      {
        type: "image",

        src: temporalRedesignedHeroSection,

        alt: "Temporal's redesigned hero section",

        label:
          "Redesigned hero section — the new design communicates Temporal and its product more clearly.",
      },

      /* ==========================================
         8. ILLUSTRATIONS
         ========================================== */

      {
        type: "section",

        heading: "Illustrations",

        paragraphs: [
          "To make the illustrations more meaningful to understand I researched the product, audience and business requirements by watching their tutorials and their official website for more information to make the illustrations as accurate as possible.",

          "For example here in this hero section there were a lot of unnecessary stuffs like those scrollbars and also that graph was showing inverted days that was really hard to understand and there were a lot of inconsistency in the design that i fixed.",
        ],
      },

      /* ==========================================
         9. WORKFLOW DEMO
         ========================================== */

      {
        type: "image",

        src: temporalOriginalWorkflowDemo,

        alt: "Temporal's original workflow demo illustration",

        label:
          "Original workflow demo — the illustration and animation were difficult to understand.",
      },

      {
        type: "image",

        src: temporalRedesignedWorkflowDemo,

        alt: "Temporal's redesigned workflow demo illustration",

        label:
          "Redesigned workflow demo — a clearer illustration and animation explain the workflow more effectively.",
      },

      /* ==========================================
         10. MORE ILLUSTRATIONS
         ========================================== */

      {
        type: "section",

        heading: "Some more illustrations",

        paragraphs: [
          "Here are other illustrations that i redesigned to make sure they explain the product better and make it cristal clear about the process and product.",
        ],
      },

      /* ==========================================
         01. HAPPY COMPUTER
         ========================================== */

      {
        type: "section",

        heading: "01.",
      },

      {
        type: "image",

        src: temporalOriginalHappyComputer,

        alt: "Temporal's original happy computer illustration",

        label:
          "Original illustration — the visual did not clearly communicate the concept.",
      },

      {
        type: "image",

        src: temporalRedesignedHappyComputer,

        alt: "Temporal's redesigned happy computer illustration",

        label:
          "Redesigned illustration — clearer visual communication of the concept.",
      },

      /* ==========================================
         02. WATCH DEMO
         ========================================== */

      {
        type: "section",

        heading: "02.",
      },

      {
        type: "image",

        src: temporalOriginalWatchDemo,

        alt: "Temporal's original watch demo illustration",

        label:
          "Original watch demo illustration — the visual treatment was unclear.",
      },

      {
        type: "image",

        src: temporalRedesignedWatchDemo,

        alt: "Temporal's redesigned watch demo illustration",

        label:
          "Redesigned watch demo illustration — a clearer and more structured visual treatment.",
      },

      /* ==========================================
         03. LANGUAGE
         ========================================== */

      {
        type: "section",

        heading: "03.",
      },

      {
        type: "image",

        src: temporalOriginalLanguage,

        alt: "Temporal's original language illustration",

        label:
          "Original language illustration — the visual did not clearly explain the concept.",
      },

      {
        type: "image",

        src: temporalRedesignedLanguage,

        alt: "Temporal's redesigned language illustration",

        label:
          "Redesigned language illustration — a clearer visual explanation of the concept.",
      },

      /* ==========================================
         04. HANDLE FAILURE
         ========================================== */

      {
        type: "section",

        heading: "04.",
      },

      {
        type: "image",

        src: temporalOriginalHandleFailure,

        alt: "Temporal's original handle failure illustration",

        label:
          "Original handle-failure illustration — the visual explanation was unclear.",
      },

      {
        type: "image",

        src: temporalRedesignedHandleFailure,

        alt: "Temporal's redesigned handle failure illustration",

        label:
          "Redesigned handle-failure illustration — a clearer explanation of the concept.",
      },

      /* ==========================================
         05. ACTIVITY
         ========================================== */

      {
        type: "section",

        heading: "05.",
      },

      {
        type: "image",

        src: temporalOriginalActivityImg,

        alt: "Temporal's original activity illustration",

        label:
          "Original activity illustration — the visual treatment was inconsistent and unclear.",
      },

      {
        type: "image",

        src: temporalRedesignedActivityImg,

        alt: "Temporal's redesigned activity illustration",

        label:
          "Redesigned activity illustration — clearer structure and visual communication.",
      },

      /* ==========================================
         06. STATE MACHINES
         ========================================== */

      {
        type: "section",

        heading: "06.",
      },

      {
        type: "image",

        src: temporalOriginalStateMachines,

        alt: "Temporal's original state machines illustration",

        label:
          "Original state-machines illustration — the concept was difficult to understand visually.",
      },

      {
        type: "image",

        src: temporalRedesignedStateMachine,

        alt: "Temporal's redesigned state machines illustration",

        label:
          "Redesigned state-machines illustration — a clearer visual representation of the concept.",
      },

      /* ==========================================
         07. VISIBILITY IN CODE
         ========================================== */

      {
        type: "section",

        heading: "07.",
      },

      {
        type: "image",

        src: temporalOriginalVisibilityInCode,

        alt: "Temporal's original visibility in code illustration",

        label:
          "Original visibility-in-code illustration — the visual explanation was unclear.",
      },

      {
        type: "image",

        src: temporalRedesignedVisibilityInCode,

        alt: "Temporal's redesigned visibility in code illustration",

        label:
          "Redesigned visibility-in-code illustration — the concept is explained more clearly.",
      },

      /* ==========================================
         08. FEATURE CARDS
         ========================================== */

      {
        type: "section",

        heading: "08.",
      },

      {
        type: "image",

        src: temporalOriginalFeatureCards,

        alt: "Temporal's original feature cards",

        label:
          "Original feature cards — inconsistent visuals and hierarchy made the information harder to scan.",
      },

      {
        type: "image",

        src: temporalRedesignedFeatureCards,

        alt: "Temporal's redesigned feature cards",

        label:
          "Redesigned feature cards — clearer hierarchy and more consistent visual treatment.",
      },

      /* ==========================================
         09. TALKS
         ========================================== */

      {
        type: "section",

        heading: "09.",
      },

      {
        type: "image",

        src: temporalOriginalTalks,

        alt: "Temporal's original talks section",

        label:
          "Original talks section — the visual presentation lacked clarity and consistency.",
      },

      {
        type: "image",

        src: temporalRedesignedTalks,

        alt: "Temporal's redesigned talks section",

        label:
          "Redesigned talks section — clearer structure and visual hierarchy.",
      },

      /* ==========================================
         10. TESTIMONIALS
         ========================================== */

      {
        type: "section",

        heading: "10.",
      },

      {
        type: "image",

        src: temporalOriginalTestimonials,

        alt: "Temporal's original testimonials section",

        label:
          "Original testimonials section — the presentation lacked consistency and structure.",
      },

      {
        type: "image",

        src: temporalRedesignedTestimonial,

        alt: "Temporal's redesigned testimonials section",

        label:
          "Redesigned testimonials section — clearer presentation and stronger visual consistency.",
      },

      /* ==========================================
         11. BENTO
         ========================================== */

      {
        type: "section",

        heading: "11.",
      },

      {
        type: "image",

        src: temporalOriginalBento,

        alt: "Temporal's original bento section",

        label:
          "Original bento section — the information and visuals were difficult to scan.",
      },

      {
        type: "image",

        src: temporalRedesignedBento,

        alt: "Temporal's redesigned bento section",

        label:
          "Redesigned bento section — clearer organization and visual hierarchy.",
      },

      /* ==========================================
         12. CTA FOOTER
         ========================================== */

      {
        type: "section",

        heading: "12.",
      },

      {
        type: "image",

        src: temporalOriginalCtaFooter,

        alt: "Temporal's original CTA footer section",

        label:
          "Original CTA footer — the visual structure and hierarchy were inconsistent.",
      },

      {
        type: "image",

        src: temporalRedesignedCtaFooter,

        alt: "Temporal's redesigned CTA footer section",

        label:
          "Redesigned CTA footer — clearer hierarchy and stronger visual consistency.",
      },

      /* ==========================================
         13. FOOTER
         ========================================== */

      {
        type: "section",

        heading: "13.",
      },

      {
        type: "image",

        src: temporalOriginalFooter,

        alt: "Temporal's original footer",

        label:
          "Original footer — the layout and information hierarchy were unclear.",
      },

      {
        type: "image",

        src: temporalRedesignedFooter,

        alt: "Temporal's redesigned footer",

        label:
          "Redesigned footer — clearer structure and more consistent visual hierarchy.",
      },

      /* ==========================================
         FINAL EXPERIENCE
         ========================================== */

      {
        type: "section",

        heading: "Here's the final design side by side.",
      },

      /* ==========================================
         FINAL COMPARISON VIDEO
         ========================================== */

      {
        type: "video",

        src: finalVideo,

        label:
          "Final comparison showing the original and redesigned experience.",
      },
    ],
  },
];
