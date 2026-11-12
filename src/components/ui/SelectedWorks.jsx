import { Link } from "wouter";
import caseStudyData from "../../data/caseStudyCard";

function WorkItem({ study }) {
  return (
    <article className="selected-work-item">
      <h2 className="mb-3 text-base font-geist-sans leading-[1.45] sm:text-lg md:text-xl">
        <Link
          href={`/work/${study.id}`}
          className="cursor-pointer text-black underline underline-offset-2 transition-colors duration-200 hover:text-neutral-500"
        >
          {study.label}
        </Link>
      </h2>

      <Link
        href={`/work/${study.id}`}
        className="group block w-full cursor-pointer overflow-hidden border border-neutral-300 bg-white p-2.5 transition-colors duration-200 hover:border-neutral-500"
        aria-label={`Open ${study.label} case study`}
      >
        <img
          className="block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
          src={study.image}
          alt={`${study.label} website redesign`}
          loading="lazy"
        />
      </Link>

      <p className="mt-3 w-full text-base leading-[1.45] text-pretty text-black sm:text-lg md:text-xl">
        {study.cardDescription}
      </p>
    </article>
  );
}

export default function SelectedWorks() {
  return (
    <section
      className="selected-works flex w-full flex-col gap-[60px]"
      aria-label="Selected work"
    >
      {caseStudyData.map((study) => (
        <WorkItem key={study.id} study={study} />
      ))}
    </section>
  );
}
