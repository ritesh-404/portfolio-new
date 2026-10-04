import { useRef, useState, useCallback } from "react";
import caseStudyData from "../../data/caseStudyCard";
import { Link } from "wouter";
import { SectionHeading } from "./SectionHeading";

/* ---------------------------------------------
   Image gallery
--------------------------------------------- */

const ImageGallery = ({ images = [] }) => {
  const galleryRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const isDraggingRef = useRef(false);

  const dragState = useRef({
    startX: 0,
    startY: 0,
  });

  const goToImage = useCallback(
    (index) => {
      if (!galleryRef.current || !images.length) return;

      const nextIndex = Math.max(0, Math.min(index, images.length - 1));

      const image = galleryRef.current.children[nextIndex];

      if (!image) return;

      image.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      setCurrentIndex(nextIndex);
    },
    [images.length],
  );

  const updateCursor = (event) => {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();

    setCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      visible: true,
    });
  };

  const handlePointerDown = (event) => {
    if (images.length <= 1) return;

    isDraggingRef.current = true;

    dragState.current = {
      startX: event.clientX,
      startY: event.clientY,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    updateCursor(event);

    if (!isDraggingRef.current) return;
  };

  const handlePointerUp = (event) => {
    if (!isDraggingRef.current) return;

    const distance = event.clientX - dragState.current.startX;

    isDraggingRef.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const threshold = 50;

    if (Math.abs(distance) < threshold) return;

    if (distance < 0) {
      goToImage(currentIndex + 1);
    } else {
      goToImage(currentIndex - 1);
    }
  };

  const handlePointerCancel = (event) => {
    isDraggingRef.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerEnter = (event) => {
    updateCursor(event);
  };

  const handlePointerLeave = () => {
    if (!isDraggingRef.current) {
      setCursor((current) => ({
        ...current,
        visible: false,
      }));
    }
  };

  return (
    <div
      className="group relative w-full cursor-none"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Custom cursor */}
      <div
        className={`pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/65 px-3 py-2 font-mono text-[10px] leading-none tracking-[-0.01em] text-black backdrop-blur-md transition-opacity duration-150 ${
          cursor.visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      >
        Drag
      </div>

      {/* Gallery */}
      <div
        ref={galleryRef}
        className="flex w-full gap-2 overflow-hidden select-none touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="h-auto w-full shrink-0 overflow-hidden rounded-sm lg:h-[600px] lg:w-fit"
          >
            <img
              src={image}
              alt=""
              draggable="false"
              className="pointer-events-none block h-auto w-full object-contain lg:h-full lg:w-auto"
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
              className="inline-flex items-center whitespace-nowrap rounded-full border border-gray-300 px-3 py-1.5 font-mono text-xs text-gray-700 mt-2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className=" mt-2 font-serif text-[20px] md:max-w-[40%] w-full leading-[1.3] tracking-[-0.01em]">
          {study.title}
        </h3>

        {/* View more */}
        <Link
          href={`/work/${study.id}`}
          className="mt-4 inline-block font-mono text-[14px] leading-[1.3] tracking-[-0.01em] text-black underline underline-offset-3 transition-opacity duration-200 hover:opacity-50"
        >
          more →
        </Link>
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
        <SectionHeading className="mb-0">
          ( +_+ ) Selected works{" "}
          <span className="text-black/50">
            ( <span className="inline md:hidden">swipe</span>
            <span className="hidden md:inline">drag</span> )
          </span>
        </SectionHeading>
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
