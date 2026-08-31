import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 5;
const EASING = 0.15;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animId;
    const animate = () => {
      const mainDot = dotRef.current;
      if (mainDot) {
        mainDot.style.left = `${mouse.current.x}px`;
        mainDot.style.top = `${mouse.current.y}px`;
      }

      trailPositions.current.forEach((pos, i) => {
        const target = i === 0 ? mouse.current : trailPositions.current[i - 1];
        pos.x += (target.x - pos.x) * EASING;
        pos.y += (target.y - pos.y) * EASING;

        const el = trailRefs.current[i];
        if (el) {
          el.style.left = `${pos.x}px`;
          el.style.top = `${pos.y}px`;
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {trailRefs.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference"
          style={{
            width: `${12 - i * 1.5}px`,
            height: `${12 - i * 1.5}px`,
            backgroundColor: "white",
            opacity: 1 - i * 0.15,
          }}
        />
      ))}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full mix-blend-difference"
        style={{ backgroundColor: "white" }}
      />
    </>
  );
}
