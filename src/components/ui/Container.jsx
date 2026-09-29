// src/components/ui/Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-[1380px] mx-auto lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
