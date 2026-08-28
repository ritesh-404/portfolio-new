// src/components/ui/Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-[1216px] mx-auto px-4 md:px-8 xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
