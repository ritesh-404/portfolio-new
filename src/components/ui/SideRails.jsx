export default function SideRails() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1000] hidden md:block"
    >
      {/* Left rail */}
      <div
        className="absolute left-0 top-0 h-full w-[48px] border-r border-white
          bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_7px,rgba(255,255,255,0.3)_7px,rgba(255,255,255,0.3)_8px)]"
      />

      {/* Right rail */}
      <div
        className="absolute right-0 top-0 h-full w-[48px] border-l border-white
          bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_7px,rgba(255,255,255,0.3)_7px,rgba(255,255,255,0.3)_8px)]"
      />
    </div>
  );
}
