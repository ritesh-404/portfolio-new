import Container from "../ui/Container";
import Section from "../ui/Section";
import BaseGrid from "../ui/BaseGrid";
import CaseStudyCard from "../ui/CaseStudyCard";
import caseStudyData from "../../data/caseStudyCard";
import Divider from "../ui/Divider";

export default function HeroSection() {
  let linkStyle =
    "underline underline-offset-3 cursor-pointer hover:text-white/50 ml-2";

  const PROJECT_URL =
    "https://hvwdoouwqyukyonadjse.supabase.co/storage/v1/object/public/case-studies/";

  let images = [
    "design-audit-1.webp",
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
    <Section id="heroSection">
      <Divider />
      <Container className="mt-10">
        <BaseGrid>
          {/* heading + buttons */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-12">
            <h1 className="text-3xl font-dm-sans w-full">
              Ritesh runs an independent design practice specializing in{" "}
              Product, Web, Logo, and Brand design. focused on emerging tech
              teams across crypto, biotech, infra, and AI.
            </h1>
            {/* call button  */}
            <div className="flex items-center gap-4 w-[95%]">
              <a
                href="https://cal.com/ritesh-n/15min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border transition-all duration-300 ease-out cursor-pointer h-11 hover:bg-white hover:text-[#000080] bg-transparent text-white`}
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
                  className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:stroke-[#000080] stroke-white"
                >
                  <path
                    d="M17 7L7 17"
                    // stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 7H17V16"
                    // stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* about me */}
          <div className="col-span-12 lg:col-span-6 flex justify-end gap-10 mt-80">
            <p className="text-white/80 underline decoration-white/20 underline-offset-2 text-right max-w-[500px] font-dm-sans">
              My work spans full identity systems, logo design, and brand-led
              web design - Using human psychology and UI/UX principles with
              experiemntal visuals to keep the brand unique and competitive.
              <br />
              <br />
              You can connect with me here :
              <span>
                <a target="_blank" href="https://x.com/Riteshxdev" className={`${linkStyle}`}>Twitter</a>
              </span>
              <span>
                <a target="_blank" href="https://www.linkedin.com/in/ritesh-nishad-abb9363a4/" className={`${linkStyle}`}>LinkedIn</a>
              </span>
            </p>
          </div>

          {/* case study cards */}
          <div className="col-span-12 mt-20">
            <div className="w-full flex flex-col md:flex-row gap-10">
              {[0, 1].map((colIndex) => (
                <div
                  key={colIndex}
                  className={`flex-1 flex flex-col gap-10 ${
                    colIndex === 1 ? "md:mt-40" : ""
                  }`}
                >
                  {caseStudyData
                    .filter((_, i) => i % 2 === colIndex)
                    .map((caseStudy) => (
                      <CaseStudyCard
                        key={caseStudy.id}
                        image={caseStudy.image}
                        tags={caseStudy.tags}
                        title={caseStudy.title}
                        description={caseStudy.description}
                        id={caseStudy.id}
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>


          {/* Masonry Gallery */}
          <div className="col-span-12 mt-40">
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="mb-6 break-inside-avoid group border border-border border-dashed p-3 md:p-4 rounded-none transition-all duration-300"
                >
                  <div className="overflow-hidden rounded-[4px] bg-white">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover img-fallback"
                      onLoad={(e) => e.currentTarget.classList.add("loaded")}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
