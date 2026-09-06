import { useParams } from "wouter";

import { caseStudies } from "../data/caseStudies";
import NotFoundPage from "./NotFoundPage";
import SideRails from "../components/ui/SideRails";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import BaseGrid from "../components/ui/BaseGrid";
import BackLinkBtn from "../components/ui/BackLinkBtn";

const eyebrow = "font-mono text-xs md:text-sm uppercase tracking-[0.18em]";

const bracketLabel = "font-dm-sans text-base tracking-[0.1em] bg-white text-black w-fit p-1";

export default function CaseStudyPage() {
  const { id } = useParams();

  // Match the dynamic route parameter against the case study slug
  const study = caseStudies.find((item) => item.slug === id);

  if (!study) {
    return <NotFoundPage />;
  }

  const [heroImage, ...restImages] = study.images ?? [];

  return (
    <div className="relative">
      <SideRails />
      <Section className="py-12 md:py-20 bg-[#000080] text-white">
        <Container>
          <BaseGrid>
            {/* Back Link */}
            <div className="col-span-12 mb-10">
              <BackLinkBtn />
            </div>

            {/* Title + short description */}
            <div className="col-span-12 flex flex-col gap-4 mb-12 md:mb-16">
              <h1 className="text-3xl md:text-3xl font-medium font-dm-sans leading-[1.05] tracking-[-0.02em]">
                {study.title}
              </h1>

              <p className="text-base font-mono max-w-[65ch] text-white/90">
                {study.overview}
              </p>
            </div>

            {/* Cover / hero image */}
            <div className="col-span-12 mb-14 md:mb-20">
              <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-img-container border border-border overflow-hidden flex items-center justify-center">
                {study.coverImage ? (
                  <img
                    src={study.coverImage}
                    alt={study.coverImageAlt ?? study.title}
                    loading="lazy"
                    className="w-full h-full object-cover img-fallback"
                    onLoad={(e) => e.currentTarget.classList.add("loaded")}
                  />
                ) : (
                  <span className={eyebrow}>cover image</span>
                )}
              </div>
            </div>

            {/* The Problem / The Approach */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24">
              <div className="flex flex-col gap-4">
                <span className={bracketLabel}>The Problem</span>

                <p className="text-base font-mono text-white/80">
                  {study.challenge}
                </p>
              </div>

              <div className="flex flex-col gap-4 md:border-border md:pl-10">
                <span className={bracketLabel}>The Approach</span>

                <p className="text-base font-mono text-white/80">
                  {study.approach}
                </p>
              </div>
            </div>

            {/* Visual Showcase */}
            <div className="col-span-12 flex flex-col gap-8">
              <span className={`${eyebrow} flex items-center gap-3`}>
                Visual Showcase
                <span>({study.images?.length ?? 0})</span>
              </span>

              {/* Lead Image */}
              {heroImage && (
                <figure className="group border border-border bg-img-container p-3 md:p-4 rounded-none hover:border-black transition-all duration-300">
                  <div className="overflow-hidden rounded-[4px] bg-white">
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover img-fallback"
                      onLoad={(e) => e.currentTarget.classList.add("loaded")}
                    />
                  </div>

                  {heroImage.alt && (
                    <figcaption className="pt-3 text-xs font-mono uppercase tracking-[0.15em]">
                      {heroImage.alt}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Remaining Images */}
              {restImages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Left Column */}
                  <div className="flex flex-col gap-6">
                    {restImages
                      .filter((_, i) => i % 2 === 0)
                      .map((img, index) => (
                        <figure
                          key={`col1-${index}`}
                          className="group border border-border bg-img-container p-3 md:p-4 rounded-none hover:border-black transition-all duration-300"
                        >
                          <div className="overflow-hidden rounded-[4px] bg-white">
                            <img
                              src={img.src}
                              alt={img.alt}
                              loading="lazy"
                              className="w-full h-auto object-cover img-fallback"
                              onLoad={(e) =>
                                e.currentTarget.classList.add("loaded")
                              }
                            />
                          </div>
                        </figure>
                      ))}
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-6">
                    {restImages
                      .filter((_, i) => i % 2 === 1)
                      .map((img, index) => (
                        <figure
                          key={`col2-${index}`}
                          className="group border border-border bg-img-container p-3 md:p-4 rounded-none hover:border-black transition-all duration-300"
                        >
                          <div className="overflow-hidden rounded-[4px] bg-white">
                            <img
                              src={img.src}
                              alt={img.alt}
                              loading="lazy"
                              className="w-full h-auto object-cover img-fallback"
                              onLoad={(e) =>
                                e.currentTarget.classList.add("loaded")
                              }
                            />
                          </div>
                          {img.alt && (
                            <figcaption className="pt-3 text-xs font-mono uppercase tracking-[0.15em]">
                              {img.alt}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="col-span-12 flex flex-col items-center gap-8 mt-16 pt-10">
              <BackLinkBtn />
            </div>
          </BaseGrid>
        </Container>
      </Section>
    </div>
  );
}
