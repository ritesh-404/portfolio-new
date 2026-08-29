import BaseGrid from "../ui/BaseGrid";
import Container from "../ui/Container";
import HeadingSubHeading from "../ui/HeadingSubHeading";
import ProcessSectionCard from "../ui/ProcessSectionCard";
import Section from "../ui/Section";

const formatStep = (n) => `${String(n).padStart(2, "0")}`;

const processCardsData = [
  {
    id: "step1",
    title: "Discovery & Strategy",
    description:
      "We align on your business goals, target audience, and scope to build a clear roadmap and contract terms before writing a line of code.",
  },
  {
    id: "step2",
    title: "Design & UX Prototyping",
    description:
      "We create pixel-perfect, responsive Figma designs and wireframes, refining them until you've approved the complete visual direction.",
  },
  {
    id: "step3",
    title: "Modern Development",
    description:
      "We build your site using React.js, Tailwind CSS, and Motion for lightning-fast loading speeds, flawless SEO, and smooth animations.",
  },
  {
    id: "step4",
    title: " Deliverables & Launch",
    description:
      "We launch your live site, transfer full asset and codebase ownership, and provide video walkthroughs so you can manage it easily",
  },
];
const pricingProcessCardsData = [
  {
    id: "step1",
    title: "Milestone Structure",
    description:
      "Projects are split into two clear payments: a 50% deposit to kick off design and reserve your timeline, and the remaining 50% upon final approval prior to live handover.",
  },
  {
    id: "step2",
    title: "Invoicing & Asset Transfer",
    description:
      "Invoices are issued securely via online payment or direct bank transfer. Full ownership of all design files, GitHub code, and live site deployment is transferred as soon as the final balance is settled.",
  },
];

export default function ProcessSection() {
  return (
    <Section id="processSection">
      <Container>
        <BaseGrid>
          {/* heading and subheading */}
          <HeadingSubHeading
            heading="How I Work With Founders"
            subHeading="Clear communication and fixed timelines. You’ll always know exactly where your project stands from day one to launch.Complete transparency at every step."
          />

          {/* grid layout  */}
          <div className="col-span-12 h-full mt-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <h1 className="text-muted-light lg:text-xl font-body lg:col-span-2 tracking-tight">
                WORK
              </h1>
              {processCardsData.map((data, index) => (
                <ProcessSectionCard
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  number={formatStep(index + 1)}
                />
              ))}
            </div>

            {/* payment process  */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
              <h1 className="text-muted-light lg:text-xl font-body lg:col-span-2 tracking-tight">
                PAYMENT
              </h1>
              {pricingProcessCardsData.map((data, index) => (
                <ProcessSectionCard
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  number={formatStep(index + 1)}
                />
              ))}
            </div>
          </div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
