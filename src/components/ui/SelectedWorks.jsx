import { useEffect, useRef, useState, useCallback } from "react";
import caseStudyData from "../../data/caseStudyCard";
import { Link } from "wouter";
import { SectionHeading } from "./SectionHeading";

/* ---------------------------------------------
   Image gallery
--------------------------------------------- */

const ImageGallery = ({ images = [] }) => {
  const galleryRef = useRef(null);
  const galleryContainerRef = useRef(null);
  const imageRefs = useRef([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);

  /* ---------------------------------------------
     Preload ALL images for THIS gallery only
     when the card gets near the viewport
  --------------------------------------------- */

  useEffect(() => {
    if (!galleryContainerRef.current || !images.length) return;

    let cancelled = false;

    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map(
            (src, index) =>
              new Promise((resolve) => {
                const img = new Image();

                img.onload = async () => {
                  try {
                    if (img.decode) {
                      await img.decode();
                    }
                  } catch {
                    // Ignore decode errors.
                  }

                  if (!cancelled && imageRefs.current[index]) {
                    imageRefs.current[index].src = src;
                  }

                  resolve();
                };

                img.onerror = resolve;
                img.src = src;
              }),
          ),
        );

        if (!cancelled) {
          setImagesReady(true);
        }
      } catch {
        if (!cancelled) {
          setImagesReady(true);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          preloadImages();
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "1200px 0px",
        threshold: 0,
      },
    );

    observer.observe(galleryContainerRef.current);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [images]);

  /* ---------------------------------------------
     Navigate
  --------------------------------------------- */

  const goToImage = useCallback(
    async (index) => {
      if (!galleryRef.current || images.length <= 1) return;

      const nextIndex = Math.max(0, Math.min(index, images.length - 1));
      const slide = galleryRef.current.children[nextIndex];

      if (!slide) return;

      const image = imageRefs.current[nextIndex];

      /*
       * Make absolutely sure the target image is ready
       * before starting the transition.
       */
      if (image && !image.complete) {
        await new Promise((resolve) => {
          const handleLoad = () => {
            image.removeEventListener("load", handleLoad);
            image.removeEventListener("error", handleLoad);
            resolve();
          };

          image.addEventListener("load", handleLoad);
          image.addEventListener("error", handleLoad);
        });
      }

      if (image?.decode) {
        await image.decode().catch(() => {});
      }

      galleryRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
      });

      setCurrentIndex(nextIndex);
    },
    [images.length],
  );

  if (!images.length) return null;

  return (
    <div ref={galleryContainerRef} className="w-full">
      {/* Navigation buttons */}
      {images.length > 1 && (
        <div className="mb-2 flex w-full items-center justify-start gap-2">
          {/* Left */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => goToImage(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#424242]/30 bg-[#fff] text-[#424242]/80 transition-all duration-250 hover:border-[#202020] hover:text-[#202020] disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right */}
          <button
            type="button"
            aria-label="Next image"
            onClick={() => goToImage(currentIndex + 1)}
            disabled={currentIndex === images.length - 1 || !imagesReady}
            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#424242]/30 bg-[#fff] text-[#424242]/80 transition-all duration-250 hover:border-[#202020] hover:text-[#202020] disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Gallery */}
      <div
        ref={galleryRef}
        className="flex w-full gap-2 overflow-x-auto overflow-y-hidden select-none snap-x snap-mandatory scrollbar-none"
      >
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="w-full min-w-full shrink-0 snap-start overflow-hidden rounded-sm lg:h-[600px] lg:w-fit lg:min-w-0"
          >
            <img
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              src={index === 0 ? image : undefined}
              alt=""
              draggable="false"
              decoding="async"
              className="block h-auto w-full max-w-full object-contain lg:h-full lg:w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------------------------------------
   Case study card
--------------------------------------------- */

const CaseStudyCard = ({ study }) => {
  return (
    <article className="w-full">
      <ImageGallery images={study.images} />

      <div className="mt-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {study.tags?.map((tag) => (
            <span
              key={tag}
              className="mt-2 inline-flex items-center whitespace-nowrap rounded-full border border-gray-300 px-3 py-1.5 font-mono text-xs text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-2 w-full font-serif text-[20px] leading-[1.3] tracking-[-0.01em] md:max-w-[40%]">
          {study.title}
        </h3>

        {/* View more */}
        {/* {study.caseStudy && (
          <Link
            href={`/work/${study.id}`}
            className="mt-4 inline-block font-mono text-[14px] leading-[1.3] tracking-[-0.01em] text-black underline underline-offset-3 transition-opacity duration-200 hover:opacity-50"
          >
            case study →
          </Link>
        )} */}
      </div>
    </article>
  );
};

/* ---------------------------------------------
   Selected works
--------------------------------------------- */

const SelectedWorks = () => {
  return (
    <section className="w-full">
      <div className="mb-10">
        <SectionHeading className="mb-0">(+_+) Selected works</SectionHeading>
      </div>

      <div className="space-y-28">
        {caseStudyData.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
