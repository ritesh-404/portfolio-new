// src/components/sections/HeroSection.jsx

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import SelectedWorks from "../ui/SelectedWorks";
import SectionDivider from "../ui/SectionDivider";

import FAQSection from "./FAQSection";
import ImageGridSection from "./ImageGridSection";

/* -------------------------------------------------------------------------- */
/* Animation                                                                  */
/* -------------------------------------------------------------------------- */

const itemBlurFade = {
  hidden: {
    opacity: 0,
    filter: "blur(6px)",
    y: 8,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,

    transition: {
      delay,
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

const openCal = () => {
  window.location.href = "https://cal.com/ritesh-n/15min?overlayCalendar=true";
};

export default function HeroSection() {
  return (
    <Section id="heroSection">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}

      <Container>
        <div className="flex flex-col gap-12">
          <div className="mt-8 flex w-full flex-col gap-4">
            {/* Heading */}
            <motion.h1
              className="max-w-2xl font-serif text-2xl leading-snug text-black md:text-2xl"
              variants={itemBlurFade}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Custom, High converting websites and landing pages designed and
              built for fast moving startup founders.
            </motion.h1>

            {/* CTA */}
            <div className="flex w-full md:w-fit">
              <motion.div
                variants={itemBlurFade}
                initial="hidden"
                animate="visible"
                custom={0.15}
              >
                <Button onClick={openCal} className="w-full">
                  Start a project
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* ------------------------------------------------------------------ */}
      {/* Divider                                                            */}
      {/* ------------------------------------------------------------------ */}

      <SectionDivider />

      {/* ------------------------------------------------------------------ */}
      {/* Selected works                                                     */}
      {/* ------------------------------------------------------------------ */}

      <motion.div
        variants={itemBlurFade}
        initial="hidden"
        animate="visible"
        custom={0.3}
      >
        <Container>
          <SelectedWorks />
        </Container>

        {/* ---------------------------------------------------------------- */}
        {/* Divider                                                          */}
        {/* ---------------------------------------------------------------- */}

        <SectionDivider />

        {/* ---------------------------------------------------------------- */}
        {/* FAQs                                                             */}
        {/* ---------------------------------------------------------------- */}

        <Container>
          <ImageGridSection />
        </Container>

        
        {/* ---------------------------------------------------------------- */}
        {/* Divider                                                          */}
        {/* ---------------------------------------------------------------- */}

        <SectionDivider />

        {/* ---------------------------------------------------------------- */}
        {/* FAQs                                                             */}
        {/* ---------------------------------------------------------------- */}

        <Container>
          <FAQSection />
        </Container>
      </motion.div>
    </Section>
  );
}
