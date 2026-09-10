import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import CaseStudyCard from "../ui/CaseStudyCard";
import caseStudyData from "../../data/caseStudyCard";
import Divider from "../ui/Divider";

// heading -> (para + button) sequencing: para group starts only
// once the heading's own 0.5s animation has finished.
const leftPanelStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4 } },
};

// cards don't start until the heading + para/button phase (above)
// has fully finished (~1s), then each card staggers in individually.
const cardsStagger = {
  hidden: {},
  visible: { transition: { delayChildren: 0.9, staggerChildren: 0.08 } },
};

const itemBlurFade = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  const linkStyle =
    "underline underline-offset-3 cursor-pointer hover:text-white/50";

  return (
    <Section id="heroSection">
      <Divider />
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[132px]">
          {/* Left panel — sticky on desktop */}
          <motion.div
            className="w-full flex flex-col gap-40 lg:w-[400px] lg:sticky lg:top-16 lg:h-[87vh] lg:gap-0 lg:justify-between lg:self-start"
            initial="hidden"
            animate="visible"
            variants={leftPanelStagger}
          >
            <motion.h1
              className="lg:text-xl text-2xl font-mono w-full mt-5 md:mt-0"
              variants={itemBlurFade}
            >
              Ritesh runs an independent design practice specializing in{" "}
              <span className="text-blue-300">
                Product, Website, and Brand design.
              </span>{" "}
              focused on emerging tech teams across crypto, biotech, infra, and
              AI.
            </motion.h1>

            <motion.div
              className="flex flex-col gap-16"
              variants={itemBlurFade}
            >
              <motion.p
                variants={itemBlurFade}
                className="text-white/80 font-dm-sans"
              >
                My work spans full identity systems, logo design, and brand-led
                web design - Using human psychology and UI/UX principles with
                experimental visuals to keep the brand unique and competitive.
                <br />
                <br />
                <a
                  target="_blank"
                  href="https://x.com/Riteshxdev"
                  className={`${linkStyle} ml-0`}
                >
                  Twitter
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ritesh-nishad-abb9363a4/"
                  className={`${linkStyle} ml-5`}
                >
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/workwithriteshhh/"
                  className={`${linkStyle} ml-5`}
                >
                  Instagram
                </a>
              </motion.p>

              <motion.div
                className="flex items-center gap-4 w-full"
                variants={itemBlurFade}
              >
                <a
                  href="https://cal.com/ritesh-n/15min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg border transition-all duration-300 ease-out cursor-pointer h-10 bg-white text-[#000080] hover:bg-transparent hover:text-white"
                >
                  <span className="tracking-wide text-base font-medium font-dm-sans">
                    Book a 15 min call
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 stroke-[#000080] group-hover:stroke-white"
                  >
                    <path
                      d="M17 7L7 17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 7H17V16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column — cards */}
          <motion.div
            className="w-full lg:flex-1"
            initial="hidden"
            animate="visible"
            variants={cardsStagger}
          >
            <div className="w-full flex flex-col gap-10 lg:mt-0 mt-10">
              {caseStudyData.map((caseStudy) => (
                <motion.div key={caseStudy.id} variants={itemBlurFade}>
                  <CaseStudyCard
                    image={caseStudy.image}
                    tags={caseStudy.tags}
                    title={caseStudy.title}
                    description={caseStudy.description}
                    id={caseStudy.id}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}