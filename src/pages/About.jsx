// pages/AboutPage.jsx

import { motion } from "framer-motion";

import Navbar from "../components/ui/Navbar";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

import aboutPhoto from "../assets/about-photo.png";

// --------------------------------------------------------------------------
// Animation
// --------------------------------------------------------------------------

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

// --------------------------------------------------------------------------
// About
// --------------------------------------------------------------------------

const AboutPage = () => {
  const openCal = () => {
    window.location.href =
      "https://cal.com/ritesh-n/15min?overlayCalendar=true";
  };

  return (
    <>
      <Navbar />

      <Section>
        <Container className="mt-8">
          <div className="grid w-full grid-cols-1 gap-12 pt-4 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] md:items-start md:gap-12 lg:gap-20 xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.78fr)]">
            {/* ---------------------------------------------------------------- */}
            {/* Left column */}
            {/* ---------------------------------------------------------------- */}

            <div className="min-w-0">
              {/* Heading */}
              <motion.h1
                className="max-w-xl font-serif text-[20px] leading-[1.45] tracking-[-0.01em] text-black sm:text-[22px] md:text-[24px] md:leading-[1.45]"
                variants={itemBlurFade}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                Hello there! I’m Ritesh, a freelance product design partner
                creating world-class websites and conversion-focused landing
                pages for ambitious startup founders.
              </motion.h1>

              {/* Body */}
              <div className="mt-10 max-w-xl space-y-6 font-mono text-[13px] leading-[1.65] text-gray-700 md:mt-12">
                <motion.p
                  variants={itemBlurFade}
                  initial="hidden"
                  animate="visible"
                  custom={0.15}
                >
                  My background started in visual design, where I learned how
                  much trust and credibility good design can create. Moving into
                  product design taught me to connect that visual thinking with
                  structure, usability, and business goals. I now bring both
                  together to help founders turn ideas into products that are
                  clear, useful, and worth believing in.
                </motion.p>

                <motion.p
                  variants={itemBlurFade}
                  initial="hidden"
                  animate="visible"
                  custom={0.3}
                >
                  My main expertise are in well thought designs and designs that
                  require a lot of attention to details, craft, thinking, and
                  solving business problem through design.
                </motion.p>

                <motion.p
                  variants={itemBlurFade}
                  initial="hidden"
                  animate="visible"
                  custom={0.45}
                >
                  My process is very iterative, artistic, and documented. Design
                  decisions come from constant study of exceptional design and
                  art. I do a lot of research and explore as many directions as
                  i can so that i can make you the best design possible.
                </motion.p>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5 md:mt-12">
                <p className="text-sm text-black">Want to work together?</p>

                <motion.div
                  variants={itemBlurFade}
                  initial="hidden"
                  animate="visible"
                  custom={0.6}
                >
                  <Button onClick={openCal} className="w-full sm:w-auto">
                    Start a project
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Right column */}
            {/* ---------------------------------------------------------------- */}

            <motion.div
              className="w-full min-w-0"
              variants={itemBlurFade}
              initial="hidden"
              animate="visible"
              custom={0.75}
            >
              <img
                src={aboutPhoto}
                alt="Ritesh"
                className="block aspect-square w-full rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
