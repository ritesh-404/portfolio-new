// components/ui/SectionHeading.tsx
import { ReactNode } from "react";

export function SectionHeading({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-geist-sans text-[36px] tracking-tight text-gray-400">
        {children}
      </span>
    </div>
  );
}
