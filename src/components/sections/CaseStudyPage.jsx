import { useRoute, Redirect } from "wouter";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudyPage() {
  // 1. Capture the dynamic route parameter :id from /case-study/:id
  const [match, params] = useRoute("/case-study/:id");

  // 2. Look up the matching project data from src/data/caseStudies.js
  const study = caseStudies.find((item) => item.slug === params?.id);

  // 3. If invalid slug or not found, redirect to 404
  if (!study) {
    return <Redirect to="/404" />;
  }

  return (
    <section className="px-4 sm:px-6 lg:px-9 py-6 sm:py-12 lg:py-24 bg-fff h-auto w-full border-b border-border-dark">
      <div className="flex flex-col gap-11 w-full">
        {/* Dynamic Heading */}
        <span className="inline-flex w-fit items-center rounded-full border border-border-default px-3 py-1 text-xs text-muted-light">
          {study.type}
        </span>
        <h2 className="display-sm md:display-md lg:display-lg text-(--color-primary) tracking-wider">
          {study.title}
        </h2>

        {/* Dynamic Narrative Details */}
        <div className="flex flex-col gap-6">
          <p className="text-base sm:text-lg lg:text-xl text-(--color-muted-light) leading-relaxed">
            {study.overview}
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-(--color-muted-light) leading-relaxed">
            <span className="text-(--color-primary)">Challenge :</span>{" "}
            {study.challenge}
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-(--color-muted-light) leading-relaxed">
            <span className="text-(--color-primary)">Approach :</span>{" "}
            {study.approach}
          </p>

          {/* Dynamic Tasks List */}
          <ul className="flex flex-col gap-1 text-base sm:text-lg lg:text-xl text-(--color-primary)">
            {study.scope.map((task, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-(--color-muted-light)">•</span>
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Masonry Image Grid */}
        <div className="columns-1 sm:columns-2 gap-10 space-y-10 w-full">
          {study.images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-sm outline outline-offset-2 outline-dashed outline-border-default p-2 bg-transparent w-full"
            >
              <img
                src={image.src}
                alt={image.alt || `${study.title} screenshot ${index + 1}`}
                className="w-full h-auto object-cover block outline-2 outline-white/40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
