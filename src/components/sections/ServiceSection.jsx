import BaseGrid from "../ui/BaseGrid";
import Container from "../ui/Container";
import HeadingSubHeading from "../ui/HeadingSubHeading";
import Section from "../ui/Section";
import ServiceSectionCard from "../ui/ServiceSectionCard";

const serviceData = [
  {
    title: "Web Design & Development",
    description:
      "We create modern, effective websites/landing page that actually help your business grow. We focus on clear writing, simple navigation, and easy editing tools with built-in safeguards. That means your team can add and update pages whenever they want without messing up the look.",
  },
  {
    title: "Pitch Deck & One-Pager Design",
    description:
      "For founders heading into investor or partner conversations who need the deck to read as carefully built as the business is. Includes: deck design and template, one-pager, visual system aligned to your existing brand (or built alongside it).",
  },
  {
    title: "Brand Strategy & Visual Identity + logo design",
    description:
      "We map out a clear plan before we ever touch a design tool. We study your market, talk through your goals, and align your team so every decision is based on real facts instead of random guesses.",
  },
  {
    title: "Mobile App Design ",
    description:
      "We turn your product ideas into intuitive iOS and Android app experiences. By putting user comfort first, we build simple, clutter-free screens that feel natural to tap through from day one.",
  },
];

export default function ServiceSection() {
  return (
    <Section id="serviceSection">
      <Container>
        <BaseGrid>
          {/* heading and subheading */}
          <HeadingSubHeading
            heading="How can i help you ?"
            subHeading="Pick the entry point that matches where you are — Strategy, design, development, UI/UX all together."
          />

          {/* grid layout  */}
          <div className="col-span-12 h-full mt-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {serviceData.map((data) => (
                <ServiceSectionCard
                  key={data.title}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>
          </div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
