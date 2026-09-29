// components/ui/SectionHeading.tsx
import { ReactNode } from "react";

export function SectionHeading({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className="inline-block h-5 w-5 shrink-0 rounded-[3px] bg-black border border-white/40 ring-1 ring-inset ring-offset-2 ring-offset-black ring-white/70"
        aria-hidden="true"
      />
      <span className="font-mono text-[20px] tracking-tight text-black">
        {children}
      </span>
    </div>
  );
}
