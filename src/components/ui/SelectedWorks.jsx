import { useState, useMemo, useRef } from "react";
import caseStudyData from "../../data/caseStudyCard";
import { Link } from "wouter";
import { SectionHeading } from "./SectionHeading";

const Chevron = ({ direction = "right", color }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={direction === "left" ? "-scale-x-100" : ""}
  >
    <path
      d="M7.5 5L12.5 10L7.5 15"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------------------------------------------
   Image gallery
--------------------------------------------- */

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const scrollToImage = (index) => {
    const gallery = galleryRef.current;
    const image = gallery?.children[index];

    if (!gallery || !image) return;

    image.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    scrollToImage(nextIndex);
  };

  const previousImage = () => {
    const previousIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;

    scrollToImage(previousIndex);
  };

  let controlBtnClasses =
    "inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-gray-400 transition-colors duration-200 hover:border-gray-500 hover:text-gray-700 cursor-pointer";

  return (
    <div className="w-full">
      {/* Gallery controls */}
      <div className="mb-5 flex justify-start gap-2">
        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous image"
          className={`${controlBtnClasses}`}
        >
          <Chevron direction="left" color="currentColor" />
        </button>
        <button
          type="button"
          onClick={nextImage}
          aria-label="Previous image"
          className={`${controlBtnClasses}`}
        >
          <Chevron color="currentColor" />
        </button>
      </div>

      {/* Gallery */}
      <div ref={galleryRef} className="flex gap-2 overflow-hidden">
        {images.map((image) => (
          <div
            key={image}
            className="
    md:h-[600px]
    w-fit
    shrink-0
    overflow-hidden rounded-sm"
          >
            <img
              src={image}
              alt=""
              draggable="false"
              className="block h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// case study images and content
const CaseStudy = ({ study }) => {
  return (
    <article>
      <ImageGallery images={study.images} />

      <div className="mt-7 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left */}
        <div className="sm:w-[58%]">
          <h3 className="max-w-xl md:text-[24px] text-lg font-serif font-medium leading-[1.2]">
            {study.title}
          </h3>

          <div className="mt-6 w-full flex flex-wrap gap-2">
            {study.tags.map((tag, index) => (
              <span
                key={tag}
                className="inline-flex items-center whitespace-nowrap rounded-full border border-gray-300 px-3 py-1.5 font-mono text-xs text-gray-700 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="sm:w-[32%] text-pretty">
          <p className="text-sm font-mono leading-[1.6] tracking-tight text-neutral-600">
            {study.description}
          </p>

          {study.caseStudy && (
            <Link
              href={`/work/${study.id}`}
              className="
      group mt-5 inline-flex items-center gap-2
      border border-violet-300
      px-3 py-2
      text-sm font-medium
      text-violet-600
      transition-colors duration-200
      hover:bg-violet-50 font-mono
    "
            >
              <span>View case study</span>

              <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                <Chevron color="#7f22fe" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

/* ---------------------------------------------
   Selected works
--------------------------------------------- */

const SelectedWorks = () => {
  return (
    <section className="w-full mt-40">
      <SectionHeading className="mb-10">Selected works</SectionHeading>

      <div className="space-y-28">
        {caseStudyData.map((study) => (
          <CaseStudy key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
