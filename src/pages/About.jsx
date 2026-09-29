// pages/AboutPage.jsx
import { motion } from "framer-motion";

import Navbar from "../components/ui/Navbar";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import aboutPhoto from "../assets/about-photo.png"; // swap to your actual image path

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

const AboutPage = () => {
  const openCal = () => {
    window.location.href =
      "https://cal.com/ritesh-n/15min?overlayCalendar=true";
  };
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-12 justify-between">
            {/* Left column — text */}
            <div className="flex flex-col md:w-[40%] md:justify-between">
              <div>
                <motion.h1
                  className="font-serif text-[20px] leading-snug text-black md:text-[24px] md:leading-snug"
                  variants={itemBlurFade}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  Hello there! My name's Ritesh and I am a freelance Product
                  design partner for ambitious startup founders.
                </motion.h1>
              </div>

              {/* bottom  */}
              <div className="mt-5 md:mt-4 flex flex-col gap-4">
                <div className="mt-5 flex flex-col gap-4 font-mono text-[13px] leading-[1.6] text-gray-700 md:mt-6">
                  <motion.div
                    variants={itemBlurFade}
                    initial="hidden"
                    animate="visible"
                    custom={0.15}
                  >
                    <p>
                      My background started in visual design, where I learned
                      how much trust and credibility good design can create.
                      Moving into product design taught me to connect that
                      visual thinking with structure, usability, and business
                      goals. I now bring both together to help founders turn
                      ideas into products that are clear, useful, and worth
                      believing in.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemBlurFade}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                  >
                    <p>
                      My main expertise are in well thought designs and designs
                      that require a lot of attention to details, craft,
                      thinking, and solving business problem through design.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemBlurFade}
                    initial="hidden"
                    animate="visible"
                    custom={0.45}
                  >
                    <p>
                      My process is very iterative, artistic, and documented.
                      Design decisions come from constant study of exceptional
                      design and art. I do a lot of research and explore as many
                      directions as i can so that i can make you the best design
                      possible.
                    </p>
                  </motion.div>
                </div>
                {/* -------------------------------------------------------------------------- */}
                {/* CTA */}
                <div className="flex w-full flex-col gap-4 md:w-fit md:flex-row mt-10 items-center md:gap-5">
                  {/* Start a project */}
                  <p>Want to work together?</p>
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

            {/* Right column — image (moves to bottom on mobile via source order) */}
            <motion.div
              className="w-full shrink-0 md:w-[42%]"
              variants={itemBlurFade}
              initial="hidden"
              animate="visible"
              custom={0.85}
            >
              <img
                src={aboutPhoto}
                alt="Ritesh"
                className="h-full w-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
