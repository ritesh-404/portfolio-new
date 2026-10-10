import { useEffect, useRef, useState } from "react";
import BackLinkBtn from "../ui/BackLinkBtn";
import { MediaFrame } from "./blocks";

/**
 * Shared shell for every case study page.
 * It only handles: back button, title, overview, hero, and the
 * "On this page" sidebar. Everything inside is YOUR jsx.
 *
 * The sidebar builds itself from any element with a `data-toc`
 * attribute (the <Section> component adds it for you).
 */
const backBtnClass =
  "bg-portfolio-card-bg text-portfolio-text-muted border-portfolio-border border hover:text-portfolio-text-primary hover:bg-portfolio-card-bg hover:border-portfolio-text-primary";

export default function CaseStudyLayout({
  title,
  overview,
  heroVideo,
  heroImage,
  children,
}) {
  const contentRef = useRef(null);
  const [items, setItems] = useState([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const els = [...contentRef.current.querySelectorAll("[data-toc]")];
    setItems(els.map((el) => ({ id: el.id, label: el.dataset.toc })));
    if (els[0]) setActive(els[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-[#101010] text-[#fff] antialiased">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-8 sm:px-10 md:py-12">
        {/* Back button: mobile and tablet only, the sidebar has its own on desktop */}
        <div className="mb-14 md:mb-16 lg:hidden">
          <BackLinkBtn className={backBtnClass} href="/portfolio" />
        </div>

        <div className="lg:grid lg:grid-cols-[200px_minmax(0,820px)] lg:justify-center lg:gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <BackLinkBtn className={backBtnClass} href="/portfolio" />

              <nav className="mt-10">
                <p className="mb-5 font-inter text-sm text-portfolio-text-secondary">
                  On this page
                </p>
                <ul className="flex flex-col">
                  {items.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => jumpTo(id)}
                        className={`block w-full cursor-pointer border-l py-1 pl-4 text-left font-inter text-[12px] transition-colors duration-200 ${
                          active === id
                            ? "border-[#4b6bfb] text-white"
                            : "border-white/10 text-portfolio-text-muted hover:text-white"
                        }`}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main ref={contentRef} className="min-w-0">
            <header className="mb-14 md:mb-16">
              <h1 className="font-dm-sans text-3xl font-medium leading-[1.08] tracking-[-0.025em] sm:text-4xl md:text-[42px]">
                {title}
              </h1>
              {overview && (
                <p className="mt-5 max-w-[100%] text-pretty font-inter text-[15px] leading-[1.55] tracking-[-0.01em] text-portfolio-text-secondary md:max-w-[75%]">
                  {overview}
                </p>
              )}
            </header>

            {(heroVideo || heroImage) && (
              <div className="mb-14 md:mb-20">
                <MediaFrame>
                  {heroVideo ? (
                    <video
                      src={heroVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-auto w-full object-cover"
                    />
                  ) : (
                    <img
                      src={heroImage}
                      alt=""
                      className="h-auto w-full object-cover"
                    />
                  )}
                </MediaFrame>
              </div>
            )}

            <div className="flex flex-col gap-16 md:gap-20">{children}</div>

            <div className="flex justify-center pt-20 md:pt-28">
              <BackLinkBtn className={backBtnClass} href="/portfolio" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
