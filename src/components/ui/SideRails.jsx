// src/components/ui/SideRails.jsx

export default function SideRails() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1000]"
    >
      <div className="absolute left-[var(--page-gutter)] top-0 h-full w-px bg-gray-300" />

      <div className="absolute right-[var(--page-gutter)] top-0 h-full w-px bg-gray-300" />
    </div>
  );
}
