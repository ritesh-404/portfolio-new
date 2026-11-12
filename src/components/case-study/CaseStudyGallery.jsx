import { useRef } from "react";

export default function CaseStudyGallery({ images, label }) {
  const track = useRef(null);
  const move = (direction) => track.current?.scrollBy({ left: direction * track.current.clientWidth, behavior: "smooth" });
  return (
    <div className="mb-14 md:mb-16">
      <div className="mb-2 flex gap-2">
        <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label} slide`} className="h-11 w-11 cursor-pointer border border-neutral-400 bg-transparent text-2xl leading-none text-neutral-400 transition-colors duration-200 hover:border-neutral-300 hover:text-white">‹</button>
        <button type="button" onClick={() => move(1)} aria-label={`Next ${label} slide`} className="h-11 w-11 cursor-pointer border border-neutral-400 bg-transparent text-2xl leading-none text-neutral-400 transition-colors duration-200 hover:border-neutral-300 hover:text-white">›</button>
      </div>
      <div className="flex snap-x snap-mandatory items-start gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={track}>
        {images.map((src, index) => <img key={src} src={src} alt={`${label} redesign view ${index + 1}`} loading={index > 1 ? "lazy" : "eager"} className="h-[clamp(18rem,56vw,38rem)] w-auto max-w-[88%] shrink-0 snap-start bg-transparent object-contain object-top" />)}
      </div>
    </div>
  );
}
