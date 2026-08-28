export default function Pill({ className = "", children }) {
  return (
    <div
      className={`bg-surface border-border border text-sm px-4 py-0.5 inline-flex items-center justify-center  ${className}`}
    >
      {children}
    </div>
  );
}
