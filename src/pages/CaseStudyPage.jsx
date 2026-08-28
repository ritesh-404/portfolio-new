import { useParams, Link } from "wouter";

import { caseStudies } from "../data/caseStudies";
import NotFoundPage from "./NotFoundPage";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import BaseGrid from "../components/ui/BaseGrid";
import Button from "../components/ui/Button";

const eyebrow =
  "font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-muted-light";

const bracketLabel =
  "font-mono text-base uppercase tracking-[0.1em] text-muted-dark";

export default function CaseStudyPage() {
  const { id } = useParams();

  // Match the dynamic route parameter against the case study slug
  const study = caseStudies.find((item) => item.slug === id);

  if (!study) {
    return <NotFoundPage />;
  }

  const [heroImage, ...restImages] = study.images ?? [];

  return (
    <Section className="py-12 md:py-20">
      <Container>
        <BaseGrid>
          {/* Back Link */}
          <div className="col-span-12 mb-10">
            <Link
              href="/"
              className={`${eyebrow} inline-flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-black`}
            >
              ← Back
            </Link>
          </div>

          {/* Title + short description */}
          <div className="col-span-12 flex flex-col gap-4 mb-12 md:mb-16">
            <h1 className="text-3xl md:text-3xl font-medium font-title text-black leading-[1.05] tracking-[-0.02em]">
              {study.title}
            </h1>

            <p className="text-base font-body text-muted-dark leading-relaxed max-w-[65ch]">
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
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className={eyebrow}>cover image</span>
              )}
            </div>
          </div>

          {/* The Problem / The Approach */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24">
            <div className="flex flex-col gap-4">
              <span className={bracketLabel}>[ The Problem ]</span>

              <p className="text-base font-body text-muted-dark leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="flex flex-col gap-4 md:border-border md:pl-10">
              <span className={bracketLabel}>[ The Approach ]</span>

              <p className="text-base font-body text-muted-dark leading-relaxed">
                {study.approach}
              </p>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="col-span-12 flex flex-col gap-8">
            <span className={`${eyebrow} flex items-center gap-3`}>
              Visual Showcase
              <span className="text-muted-light/60">
                ({study.images?.length ?? 0})
              </span>
            </span>

            {/* Lead Image */}
            {heroImage && (
              <figure className="group border border-border bg-img-container p-3 md:p-4 rounded-none hover:border-black transition-all duration-300">
                <div className="overflow-hidden rounded-[4px] bg-white">
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {heroImage.alt && (
                  <figcaption className="pt-3 text-xs font-mono uppercase tracking-[0.15em] text-muted-light">
                    {heroImage.alt}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Remaining Images */}
            {restImages.length > 0 && (
              <div className="columns-1 md:columns-2 gap-6">
                {restImages.map((img, index) => (
                  <figure
                    key={index}
                    className="mb-6 break-inside-avoid group border border-border bg-img-container p-3 md:p-4 rounded-none hover:border-black transition-all duration-300"
                  >
                    <div className="overflow-hidden rounded-[4px] bg-white">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    {img.alt && (
                      <figcaption className="pt-3 text-xs font-mono uppercase tracking-[0.15em] text-muted-light">
                        {img.alt}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="col-span-12 flex flex-col items-center gap-8 mt-16 pt-10 border-t border-border">
            <span className={`${eyebrow} self-start`}>
              Credits : {study.credits ?? "@Ritesh (twitter)"}
            </span>

            <Link href="/">
              <Button>Go to homepage</Button>
            </Link>
          </div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
