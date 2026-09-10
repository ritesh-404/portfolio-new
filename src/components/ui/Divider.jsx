export default function Divider({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`${className} pointer-events-none fixed top-0 left-0 z-[1000] w-full h-[32px]
        backdrop-blur-[8px] bg-white/3 border-b border-white
        shadow-[0_1px_0_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.15)]`}
      style={{
        backgroundImage: `repeating-linear-gradient(
          135deg,
          transparent 0px,
          transparent 7px,
          rgba(255,255,255,0.12) 7px,
          rgba(255,255,255,0.12) 8px
        )`,
      }}
    />
  );
}
