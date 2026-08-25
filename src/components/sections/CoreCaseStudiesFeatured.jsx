import CaseStudyCard from "../ui/CaseStudyCard";
import caseStudyData from "../../data/caseStudyCard";

export default function CoreCaseStudiesFeatured() {
  return (
    <section
      id="case-studies"
      className="px-4 sm:px-6 lg:px-9 py-6 sm:py-12 lg:py-24 bg-fff h-auto w-full flex flex-col gap-12 sm:gap-16 lg:gap-20 border-b border-border-dark"
    >
      {/* heading and subheading  */}

      <div className="flex flex-col gap-2">
        <h2 className="display-sm md:display-md lg:display-lg text-(--color-primary)">Selected work</h2>
        <h4 className="text-base sm:text-lg lg:display-xs text-(--color-muted-light)">
          Concept and self-initiated projects in tech and product. I design and
          build each one, so what you see is what ships.
        </h4>
      </div>

      <div className="overflow-hidden flex flex-col gap-12 ">
        {caseStudyData.map((info, i) => (
            <CaseStudyCard
              key={`caseStudy-${i}`}
              image={info.imgUrl}
              logo={info.logo}
              category={info.category}
              title={info.title}
              href={`/case-study/${info.id}`}
            />
        ))}
      </div>
    </section>
  );
}
