// src/components/sections/HeroSection.jsx

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import AvailabilityBadge from "../ui/AvailabilityBadge";
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
          <div className="mt-8 flex w-full flex-col gap-10 md:mt-24">
            {/* Availability */}
            <motion.div
              variants={itemBlurFade}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <AvailabilityBadge />
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="mt-5 w-full font-inter text-2xl font-medium md:mt-0 md:w-[60%] md:text-3xl"
              variants={itemBlurFade}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Enterprise-grade Web and App design for B2B and tech companies.{" "}
              <span className="text-violet-light">
                Agency-quality design in under 2 weeks — without the agency
                price tag.
              </span>
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
                  badge="P"
                  padding="pl-4 pr-2 py-3"
                  badgePadding="px-4 py-1.5"
                  onClick={openCal}
                  className="w-full"
                >
                  Start a project
                </Button>
              </motion.div>

              {/* View recent works */}
              <motion.div
                variants={itemBlurFade}
                initial="hidden"
                animate="visible"
                custom={0.2}
              >
                <Button
                  variant="secondary"
                  className="w-full md:w-fit"
                  onClick={() => {
                    document.getElementById("selected-works")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  View recent works
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
