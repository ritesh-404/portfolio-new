// src/components/ui/CaseStudyCard.jsx
import PillTagGroup from "./Pill";

export default function CaseStudyCard({
  tags = [],
  defaultSelectedTag,
  onTagSelect,
  image,
  title = "Tolgee",
  description = "Tolgee is an open-source localization platform built for developers",
}) {
  return (
    <article className="flex w-full flex-col gap-4 font-[var(--font-body)]">
      {/* Pills Navigation */}
      {tags.length > 0 && (
        <PillTagGroup
          tags={tags}
          defaultSelected={defaultSelectedTag}
          onSelect={onTagSelect}
        />
      )}

      {/* Image Preview Container */}
      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-img-container)] p-4 sm:p-6 md:p-8">
        {image ? (
          <img
            src={image}
            alt={`${title} case study preview`}
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-lg bg-[var(--color-muted-dark)] text-sm font-medium text-[var(--color-white)]">
            No Preview Available
          </div>
        )}
      </div>

      {/* Title & Description Text */}
      <p className="text-sm leading-relaxed sm:text-base text-[var(--color-muted-light)]">
        <strong className="font-bold text-[var(--color-black)] font-[var(--font-title)]">
          {title} :{" "}
        </strong>
        {description}
      </p>
    </article>
  );
}
