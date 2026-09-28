import { useEffect } from "react";
import { useParams } from "wouter";

import { caseStudies } from "../data/caseStudies";
import NotFoundPage from "./NotFoundPage";
import BackLinkBtn from "../components/ui/BackLinkBtn";

export default function CaseStudyPage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const study = caseStudies.find((item) => item.slug === id);

  if (!study) {
    return <NotFoundPage />;
  }

  return (
    <div className="relative min-h-screen bg-[#f7f8fa] text-[#202020] antialiased">
      <main className="mx-auto w-full max-w-[960px] py-8 px-10 sm:py-10 md:px-8 md:py-12 lg:px-10">
        {/* Back */}
        <div className="mb-14 md:mb-16">
          <BackLinkBtn />
        </div>

        {/* Header */}
        <header className="mb-14 md:mb-20">
          <h1 className="font-dm-sans text-3xl font-medium leading-[1.08] tracking-[-0.025em] sm:text-4xl md:text-[42px]">
            {study.title}
          </h1>

          {study.overview && (
            <p className="mt-5 max-w-[80%] text-pretty font-inter text-base leading-[1.55] tracking-[-0.01em] text-[#424242] sm:text-[17px]">
              {study.overview}
            </p>
          )}
        </header>

        {/* Hero Video */}
        {study.heroVideo && (
          <div className="mb-14 md:mb-20">
            <MediaFrame>
              <video
                src={study.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-auto w-full object-cover"
              />
            </MediaFrame>
          </div>
        )}

        {/* Case Study Content */}
        <div className="flex flex-col gap-16 md:gap-20">
          {study.content?.map((block, index) => {
            /* ========================================
               TEXT ONLY
            ======================================== */

            if (block.type === "text") {
              return (
                <p
                  key={index}
                  className="max-w-[80%] text-pretty font-inter text-base leading-[1.55] tracking-[-0.01em] text-[#424242] sm:text-[17px]"
                >
                  {block.text}
                </p>
              );
            }

            /* ========================================
               HEADING + PARAGRAPHS
            ======================================== */

            if (block.type === "section") {
              return (
                <section key={index}>
                  {block.heading && (
                    <h2 className="max-w-[85%] text-pretty font-dm-sans text-2xl font-medium leading-[1.12] tracking-[-0.025em] sm:text-3xl">
                      {block.heading}
                    </h2>
                  )}

                  {block.paragraphs?.length > 0 && (
                    <div className="mt-4 max-w-[80%] space-y-3 text-pretty font-inter text-base leading-[1.55] tracking-[-0.01em] text-[#424242] sm:text-[17px]">
                      {block.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </section>
              );
            }

            /* ========================================
               ONE IMAGE + OPTIONAL LABEL
            ======================================== */

            if (block.type === "image") {
              return (
                <figure key={index}>
                  <MediaFrame>
                    <img
                      src={block.src}
                      alt={block.alt ?? ""}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full object-cover"
                    />
                  </MediaFrame>

                  {block.label && (
                    <figcaption className="mx-auto mt-3 max-w-[80%] text-center font-inter text-sm leading-[1.5] tracking-[-0.005em] text-[#737780]">
                      {block.label}
                    </figcaption>
                  )}
                </figure>
              );
            }

            /* ========================================
               ONE VIDEO + OPTIONAL LABEL
            ======================================== */

            if (block.type === "video") {
              return (
                <figure key={index}>
                  <MediaFrame>
                    <video
                      src={block.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-auto w-full object-cover"
                    />
                  </MediaFrame>

                  {block.label && (
                    <figcaption className="mx-auto mt-3 max-w-[80%] text-center font-inter text-sm leading-[1.5] tracking-[-0.005em] text-[#737780]">
                      {block.label}
                    </figcaption>
                  )}
                </figure>
              );
            }

            return null;
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-center pt-20 md:pt-28">
          <BackLinkBtn />
        </div>
      </main>
    </div>
  );
}

/* ==========================================
   MEDIA FRAME

   Outer:
   - rounded border
   - subtle background
   - padding

   Inner image/video:
   - NOT rounded
   - fills available width
========================================== */

function MediaFrame({ children }) {
  return (
    <div className="w-full rounded-[14px] border border-[#d9dde3] bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-3">
      {children}
    </div>
  );
}
