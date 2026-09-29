// src/components/sections/HeroSection.jsx

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import SelectedWorks from "../ui/SelectedWorks";

import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";

/* -------------------------------------------------------------------------- */
/* Animation                                                                   */
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
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

const openCal = () => {
  window.location.href = "https://cal.com/ritesh-n/15min?overlayCalendar=true";
};

export default function HeroSection() {
  return (
    <Section id="heroSection">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Hero content */}
          <div className="mt-8 flex w-full flex-col gap-10">

            {/* Heading */}
            <motion.h1
              className="font-serif text-3xl text-black md:text-4xl md:leading-snug max-w-2xl"
              variants={itemBlurFade}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Custome, High converting websites and landing pages designed and
              built for fast moving startup founders.
            </motion.h1>

            {/* CTA */}
            <div className="flex w-full flex-col gap-4 md:w-fit md:flex-row md:gap-5">
              {/* Start a project */}
              <motion.div
                variants={itemBlurFade}
                initial="hidden"
                animate="visible"
                custom={0.15}
              >
                <Button
                  onClick={openCal}
                  className="w-full"
                >
                  Start a project
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Everything below hero */}
        <motion.div
          variants={itemBlurFade}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          {/* Selected works */}
          <div id="selected-works" className="scroll-mt-20">
            <SelectedWorks />
          </div>

          {/* Pricing */}
          {/* <PricingSection /> */}

          {/* FAQs */}
          <FAQSection />

          {/*
          --------------------------------------------------------------------
          Redesigns
          --------------------------------------------------------------------

          <div className="mt-32 flex flex-col">
            <h3 className="text-center font-inter text-6xl md:text-7xl">
              Redesigns
            </h3>

            <div className="mt-8 flex flex-col gap-16">
              <BeforeAfter
                beforeImage={beforeImage}
                afterImage={afterImage}
              />

              <BeforeAfter
                beforeImage={beforeImage}
                afterImage={afterImage}
              />

              <BeforeAfter
                beforeImage={beforeImage}
                afterImage={afterImage}
              />

              <BeforeAfter
                beforeImage={beforeImage}
                afterImage={afterImage}
              />
            </div>
          </div>
          */}
        </motion.div>
      </Container>
    </Section>
  );
}
