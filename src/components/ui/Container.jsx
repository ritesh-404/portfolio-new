// src/components/ui/Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-[1224px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
