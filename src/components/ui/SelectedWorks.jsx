import { useState, useMemo, useRef } from "react";
import caseStudyData from "../../data/caseStudyCard";
import { Link } from "wouter";

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

  return (
    <div className="w-full">
      {/* Gallery controls */}
      <div className="mb-2 flex justify-end gap-1">
        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous image"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-none cursor-pointer bg-[#f0f1f2] text-[#424242]/80 transition-all duration-250 hover:bg-[#e5e6e8] hover:text-[#202020] border border-[#424242]/30 hover:border-[#202020]"
        >
          <Chevron direction="left" color="currentColor" />
        </button>
        <button
          type="button"
          onClick={nextImage}
          aria-label="Previous image"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-none cursor-pointer bg-[#f0f1f2] text-[#424242]/80 transition-all duration-250 hover:bg-[#e5e6e8] hover:text-[#202020] border border-[#424242]/30 hover:border-[#202020]"
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
    h-[600px]
    w-fit
    shrink-0
    overflow-hidden
    bg-neutral-100
    max-sm:h-[500px]
  "
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

/* ---------------------------------------------
   Case study
--------------------------------------------- */

const tagColors = [
  "#FDF4F5", // soft pink
  "#F5FAEE", // soft green
  "#F3F8FC", // soft blue
  "#FFFAE9", // soft yellow
  "#F8F5FC", // soft purple
  "#F2FAF6", // soft mint
  "#FDF4F5", // pink
  "#F4F9FD", // blue
  "#FFFCF2", // cream
  "#F5F6FC", // lavender
  "#F2FAFB", // cyan
  "#FAF6FC", // purple
];

const darkenColor = (hex, amount = 35) => {
  const num = parseInt(hex.replace("#", ""), 16);

  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0xff) - amount);
  const b = Math.max(0, (num & 0xff) - amount);

  return `rgb(${r}, ${g}, ${b})`;
};

// case study images and content
const CaseStudy = ({ study }) => {
  return (
    <article>
      <ImageGallery images={study.images} />

      <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        {/* Left */}
        <div className="sm:w-[58%]">
          <h3 className="max-w-xl text-[20px] font-medium leading-[1.2]">
            {study.title}
          </h3>

          <div className="mt-6 max-w-[420px] flex flex-wrap gap-2">
            {study.tags.map((tag, index) => (
              <span
                key={tag}
                style={{
                  backgroundColor: tagColors[index],
                  borderColor: darkenColor(tagColors[index], 65),
                }}
                className="w-fit text-nowrap rounded-sm border px-1.5 py-1 text-[12px] font-medium leading-[20px] text-neutral-950 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="sm:w-[32%]">
          <p className="text-base leading-6 tracking-[-0.3px] text-neutral-800">
            {study.description}
          </p>

          {study.caseStudy && (
            <Link
              href={`/work/${study.id}`}
              className="
      group mt-5 inline-flex items-center gap-2
      border border-violet-300
      px-3 py-2
      text-[12px] font-medium uppercase
      text-violet-600
      transition-colors duration-200
      hover:bg-violet-50
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
      <div className="space-y-16">
        {caseStudyData.map((study) => (
          <CaseStudy key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
