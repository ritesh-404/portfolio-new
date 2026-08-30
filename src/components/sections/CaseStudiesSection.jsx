import CaseStudyCard from "../ui/CaseStudyCard";
import caseStudyData from "../../data/caseStudyCard";

import BaseGrid from "../ui/BaseGrid";
import Container from "../ui/Container";
import Section from "../ui/Section";
import HeadingSubHeading from "../ui/HeadingSubHeading";

export default function CaseStudiesSection() {
  return (
    <Section id="caseStudySection" className="pt-5">
      <Container>
        <BaseGrid>
          {/* heading and subheading */}
          <HeadingSubHeading
            heading="Selected works"
            subHeading="A mix of brand identity, illustration, app design and web work — solving real pain points and business problems with thoughtful design and performance proven to drive
              up to 2X higher conversions."
          />

          {/* grid layout  */}
          <div className="col-span-12 h-full mt-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudyData.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  image={caseStudy.image}
                  tags={caseStudy.tags}
                  title={caseStudy.title}
                  description={caseStudy.description}
                  id = {caseStudy.id}
                />
              ))}
            </div>
          </div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
