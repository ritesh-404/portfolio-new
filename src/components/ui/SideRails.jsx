export default function SideRails() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1000]"
    >
      {/* Left rail */}
      <div
        className="absolute left-0 top-0 h-full md:w-[48px] w-[20px] border-r border-gray-300"
      />

      {/* Right rail */}
      <div
        className="absolute right-0 top-0 h-full md:w-[48px] w-[20px] border-l border-gray-300"
      />
    </div>
  );
}