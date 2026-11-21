import { useState } from "react";
import { Link } from "wouter";
import caseStudyData from "../../data/caseStudyCard";

const categories = ["web", "mobile", "experiments"];

function WorkLink({ study, className, children, ariaLabel }) {
  if (study.href) {
    return (
      <a
        href={study.href}
        className={className}
        aria-label={ariaLabel}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={`/work/${study.id}`} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

function WorkItem({ study }) {
  return (
    <article className="selected-work-item">
      <h2 className="mb-3 text-base font-geist-sans leading-[1.45] sm:text-lg md:text-xl">
        <WorkLink
          study={study}
          className="cursor-pointer text-neutral-500 underline underline-offset-2 transition-colors duration-200 hover:text-neutral-950"
        >
          {study.label}
        </WorkLink>
      </h2>

      <WorkLink
        study={study}
        className="group block w-full cursor-pointer overflow-hidden border border-neutral-300 bg-white p-2.5 transition-colors duration-200 hover:border-neutral-500"
        aria-label={`Open ${study.label}`}
      >
        <img
          className="block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
          src={study.image}
          alt={`${study.label} preview`}
          loading="lazy"
        />
      </WorkLink>

      <p className="mt-3 w-full text-base leading-[1.45] text-pretty text-neutral-950 sm:text-lg">
        {study.cardDescription}
      </p>
    </article>
  );
}

export default function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleStudies = activeCategory === "all"
    ? caseStudyData
    : caseStudyData.filter((study) => study.category === activeCategory);

  return (
    <section className="w-full" aria-label="Selected work">
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter selected work by category">
        <button
          type="button"
          className={`rounded-full border px-3.5 py-1.5 text-sm capitalize transition-colors ${activeCategory === "all" ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500 hover:text-neutral-950"}`}
          aria-pressed={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        >
          All <span className="ml-1 tabular-nums">{caseStudyData.length}</span>
        </button>
        {categories.map((category) => {
          const count = caseStudyData.filter((study) => study.category === category).length;
          return (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-3.5 py-1.5 text-sm capitalize transition-colors ${activeCategory === category ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500 hover:text-neutral-950"}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category} <span className="ml-1 tabular-nums">( {count} )</span>
            </button>
          );
        })}
      </div>

      <div className="selected-works flex w-full flex-col gap-[60px]" aria-live="polite">
        {visibleStudies.length > 0 ? visibleStudies.map((study) => (
          <WorkItem key={study.id} study={study} />
        )) : (
          <p className="text-base leading-[1.45] text-neutral-500">No {activeCategory} projects yet.</p>
        )}
      </div>
    </section>
  );
}
