import Button from "./Button";
import { ArrowIcon } from "../icons";

// src/components/ui/ProjectCard.jsx
export default function ProjectCard({ image, category, title, href = "#" }) {
  return (
    <div className="group flex flex-col justify-between gap-14 border border-[var(--color-border-bg)] bg-neutral-950 px-9 py-8 min-h-[364px]">
      {/* Image container */}
      <div className="relative overflow-hidden rounded-lg bg-[var(--color-img-container)]">
        <img
          src={image}
          alt={title}
          className="aspect-[1076/174] w-full object-cover border border-border-bg rounded-lg"
        />
      </div>

      {/* Content row */}
      <div className="flex items-center justify-between w-full">
        {/* Text stack */}
        <div className="flex flex-col gap-2">
          <p className="text-md text-[var(--color-muted-light)]">{category}</p>
          <h3 className="display-sm text-[var(--color-primary)]">{title}</h3>
        </div>

        {/* Case study button */}
        <Button variant="secondary" icon={ArrowIcon}>
          Case study
        </Button>
      </div>
    </div>
  );
}
