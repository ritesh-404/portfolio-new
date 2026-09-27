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
    <div className="relative bg-black text-white">

      <main className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-5 md:px-6 lg:px-[200px]">
        {/* Back */}
        <div className="mb-12 md:mb-16">
          <BackLinkBtn />
        </div>

        {/* Header */}
        <header className="mb-16 md:mb-20">
          <h1 className="font-dm-sans text-3xl font-medium leading-tight tracking-[-0.02em] md:text-4xl">
            {study.title}
          </h1>

          {study.overview && (
            <p className="mt-4 max-w-[85%] font-mono text-sm leading-relaxed text-white/80 md:text-base">
              {study.overview}
            </p>
          )}
        </header>

        {/* Hero Video */}
        {study.heroVideo && (
          <div className="mb-16 w-full overflow-hidden md:mb-20">
            <video
              src={study.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {/* Case Study Content */}
        <div className="flex flex-col gap-16 md:gap-20">
          {study.content?.map((block, index) => {
            /* ================================
               TEXT ONLY
            ================================= */

            if (block.type === "text") {
              return (
                <p
                  key={index}
                  className="max-w-[85%] font-mono text-sm leading-relaxed text-white/80 md:text-base"
                >
                  {block.text}
                </p>
              );
            }

            /* ================================
               HEADING + PARAGRAPHS
            ================================= */

            if (block.type === "section") {
              return (
                <section key={index}>
                  {block.heading && (
                    <h2 className="font-dm-sans text-2xl font-medium leading-tight tracking-[-0.02em] md:text-3xl">
                      {block.heading}
                    </h2>
                  )}

                  {block.paragraphs?.length > 0 && (
                    <div className="mt-4 max-w-[85%] space-y-3 font-mono text-sm leading-relaxed text-white/80 md:text-base">
                      {block.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </section>
              );
            }

            /* ================================
               ONE IMAGE + OPTIONAL LABEL
            ================================= */

            if (block.type === "image") {
              return (
                <figure key={index} className="w-full overflow-hidden">
                  <img
                    src={block.src}
                    alt={block.alt ?? ""}
                    loading="lazy"
                    className="h-auto w-full object-cover"
                  />

                  {block.label && (
                    <figcaption className="mt-3 max-w-[85%] font-mono text-xs leading-relaxed text-white/50 md:text-sm">
                      {block.label}
                    </figcaption>
                  )}
                </figure>
              );
            }

            /* ================================
               ONE VIDEO + OPTIONAL LABEL
            ================================= */

            if (block.type === "video") {
              return (
                <figure key={index} className="w-full overflow-hidden">
                  <video
                    src={block.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-auto w-full object-cover"
                  />

                  {block.label && (
                    <figcaption className="mt-3 max-w-[85%] font-mono text-xs leading-relaxed text-white/50 md:text-sm">
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
