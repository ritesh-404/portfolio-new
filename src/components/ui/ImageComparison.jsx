import { useCallback, useRef, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ImageComparison({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
  leftLabel = "Before",
  rightLabel = "After",
  leftQuote = "",
  rightQuote = "",
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const handlePointerDown = (event) => {
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    handleMove(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    handleMove(event.clientX);
  };

  const handlePointerUp = (event) => {
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const leftClip = `inset(0 ${100 - sliderPosition}% 0 0)`;
  const rightClip = `inset(0 0 0 ${sliderPosition}%)`;

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-sm bg-black"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* BEFORE */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: leftClip }}
        >
          <img
            src={beforeImage}
            alt={altBefore}
            draggable="false"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {leftQuote && (
            <div className="absolute bottom-8 left-8 max-w-sm md:bottom-12 md:left-12">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/70">
                <Sparkles className="h-3 w-3" />
                {leftLabel}
              </div>

              <p className="font-dm-sans text-sm leading-relaxed text-white/80 md:text-base">
                "{leftQuote}"
              </p>
            </div>
          )}
        </div>

        {/* AFTER */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: rightClip }}
        >
          <img
            src={afterImage}
            alt={altAfter}
            draggable="false"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {rightQuote && (
            <div className="absolute bottom-8 right-8 max-w-sm text-right md:bottom-12 md:right-12">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/70">
                <Sparkles className="h-3 w-3" />
                {rightLabel}
              </div>

              <p className="font-dm-sans text-sm leading-relaxed text-white/80 md:text-base">
                "{rightQuote}"
              </p>
            </div>
          )}
        </div>

        {/* SLIDER LINE */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20 w-px bg-white/80"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* HANDLE */}
          <div
            className={`absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform ${
              isDragging ? "scale-110" : ""
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* LABELS */}
        <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
          <span>{leftLabel}</span>
          <span className="h-px w-8 bg-white/30" />
          <span>{rightLabel}</span>
        </div>
      </div>
    </div>
  );
}
