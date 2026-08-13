import quoradesign from "../../assets/images/quora-login.png";
import pricingdesign from "../../assets/images/pricing-colorful.png";

const caseStudyImages = [
  // Row 1
  { src: quoradesign, alt: "Quora login screen" },
  { src: pricingdesign, alt: "Illustration" },
  // Row 2
  { src: quoradesign, alt: "Quora login screen" },
  { src: pricingdesign, alt: "Illustration" },
  // Row 3
  { src: quoradesign, alt: "Quora login screen" },
  { src: pricingdesign, alt: "Illustration" },
  // Row 4
  { src: quoradesign, alt: "Quora login screen" },
  { src: pricingdesign, alt: "Illustration" },
];

export default function CaseStudySection() {
  return (
    <section className="px-9 py-24 bg-black h-auto w-full">
      <div className="flex flex-col gap-11 w-full">
        {/* Heading */}
        <h2 className="display-lg text-(--color-primary)">
          Dataview case study
        </h2>

        {/* Description */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-(--color-muted-light) leading-relaxed">
            <span className="text-(--color-primary) font-medium">Dataview</span>{" "}
            is building the infrastructure for data-driven decision-making:
            real-time dashboards, predictive analytics, pipeline monitoring,
            collaborative reporting, and AI- generated insight layers. As their
            design partner, a core challenge became finding a way to visualize
            all of these products and capabilities into a language that felt
            cohesive, precise, and deeply technical.
          </p>

          <p className="text-sm text-(--color-muted-light) leading-relaxed">
            <span className="text-(--color-primary) font-medium">
              Problem :
            </span>{" "}
            Dataview had a great product but somehow it was not convincing the
            visitors what dataview actually does and dataview also had a very
            generic and sloppy visuals.
          </p>

          <p className="text-sm text-(--color-muted-light) leading-relaxed">
            <span className="text-(--color-primary) font-medium">
              What i did :
            </span>{" "}
            Bringing clean modern user interface to their website and adding
            more colors and improving the aesthetics of the website
          </p>

          {/* Tags */}
          <ul className="flex flex-col gap-1 text-sm text-(--color-primary)">
            <li className="flex items-center gap-2">
              <span className="text-(--color-muted-light)">•</span>
              web design
            </li>
            <li className="flex items-center gap-2">
              <span className="text-(--color-muted-light)">•</span>
              strategy
            </li>
            <li className="flex items-center gap-2">
              <span className="text-(--color-muted-light)">•</span>
              branding
            </li>
          </ul>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudyImages.map((image, index) => (
            <div key={index} className="w-full overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
