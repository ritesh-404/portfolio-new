// src/components/ui/Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-[1350px] mx-auto md:px-8 xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
