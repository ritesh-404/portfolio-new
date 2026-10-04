// components/ui/SectionHeading.tsx
import { ReactNode } from "react";

export function SectionHeading({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono text-[14px] tracking-tight text-black">
        {children}
      </span>
    </div>
  );
}
