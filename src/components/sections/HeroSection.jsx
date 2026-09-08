import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import BaseGrid from "../ui/BaseGrid";
import CaseStudyCard from "../ui/CaseStudyCard";
import caseStudyData from "../../data/caseStudyCard";
import Divider from "../ui/Divider";
import SectionDiverText from "../ui/SectionDiverText";

const blurFadeIn = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: (delay) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemBlurFade = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HeroSection() {
  let linkStyle =
    "underline underline-offset-3 cursor-pointer hover:text-white/50 ml-2";

  const PROJECT_URL =
    "https://hvwdoouwqyukyonadjse.supabase.co/storage/v1/object/public/case-studies/";

  let images = [
    "poster-1.webp",
    "poster-2.webp",
    "yookai.webp",
    "design-audit.webp",
    "github-card.webp",
    "pricing-card.webp",
    "pricing-cards-2.webp",
    "profound-inspiration.webp",
    "random-pink.webp",
  ].map((fileName) => ({
    src: `${PROJECT_URL}/images-grid/${fileName}`,
    alt: fileName
      .replace(".webp", "")
      .replace(/([A-Z])/g, " $1")
      .trim(),
  }));

  return (
    <Section id="heroSection" className="overflow-clip">
      <Divider />
      <Container className="mt-10">
        <BaseGrid>
          {/* heading + buttons */}
          <motion.div
            className="col-span-12 lg:col-span-6 flex flex-col gap-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="lg:text-3xl text-2xl font-dm-sans w-full"
              variants={itemBlurFade}
            >
              Ritesh runs an independent design practice specializing in{" "}
              Product, Website, and Brand design. focused on emerging tech
              teams across crypto, biotech, infra, and AI.
            </motion.h1>

            {/* call button */}
            <motion.div
              className="flex items-center gap-4 w-[95%]"
              variants={itemBlurFade}
            >
              <a
                href="https://cal.com/ritesh-n/15min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border transition-all duration-300 ease-out cursor-pointer h-11 bg-white text-[#000080] hover:bg-transparent hover:text-white`}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 7H17V16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* about me */}
          <motion.div
            className="col-span-12 lg:col-span-6 flex justify-end gap-10 lg:mt-80 mt-42"
            initial="hidden"
            animate="visible"
            variants={blurFadeIn}
            custom={0.35}
          >
            <p className="text-white/80 underline decoration-white/20 underline-offset-2 text-right max-w-[500px] font-dm-sans">
              My work spans full identity systems, logo design, and brand-led
              web design - Using human psychology and UI/UX principles with
              experiemntal visuals to keep the brand unique and competitive.
              <br />
              <br />
              You can connect with me here :
              <span>
                <a
                  target="_blank"
                  href="https://x.com/Riteshxdev"
                  className={`${linkStyle}`}
                >
                  Twitter
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ritesh-nishad-abb9363a4/"
                  className={`${linkStyle}`}
                >
                  LinkedIn
                </a>
              </span>
            </p>
          </motion.div>

          {/* case study cards */}
          <motion.div
            className="col-span-12 mt-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="w-full flex flex-col md:flex-row gap-10">
              {[0, 1].map((colIndex) => (
                <motion.div
                  key={colIndex}
                  className={`flex-1 flex flex-col gap-10 ${
                    colIndex === 1 ? "md:mt-40" : ""
                  }`}
                  variants={blurFadeIn}
                  custom={0.5 + colIndex * 0.15}
                >
                  {caseStudyData
                    .filter((_, i) => i % 2 === colIndex)
                    .map((caseStudy, i) => (
                      <motion.div
                        key={caseStudy.id}
                        variants={itemBlurFade}
                        custom={i * 0.1}
                      >
                        <CaseStudyCard
                          image={caseStudy.image}
                          tags={caseStudy.tags}
                          title={caseStudy.title}
                          description={caseStudy.description}
                          id={caseStudy.id}
                        />
                      </motion.div>
                    ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={blurFadeIn}
            custom={0.8}
            className="col-span-12"
          >
            <SectionDiverText>Swipe files</SectionDiverText>
          </motion.div>

          {/* Masonry Gallery */}
          <motion.div
            className="col-span-12 mt-30"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className="mb-6 break-inside-avoid group border border-border border-dashed p-3 md:p-4 rounded-none transition-all duration-300"
                  variants={itemBlurFade}
                >
                  <div className="overflow-hidden bg-white">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover img-fallback"
                      onLoad={(e) => e.currentTarget.classList.add("loaded")}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
