// src/components/ui/Container.jsx

export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1380px] md:px-[var(--page-gutter)] px-10 ${className}`}
    >
      {children}
    </div>
  );
}
