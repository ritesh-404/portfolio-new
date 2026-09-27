import { useState } from "react";
import { motion } from "framer-motion";

import Button from "../ui/Button";

const openCal = () => {
  window.location.href =
    "https://cal.com/ritesh-n/15min?overlayCalendar=true";
};

const pricingPackages = [
  {
    name: "Landing Page",
    designPrice: 449,
    developmentPrice: 1199,
    developmentAvailable: true,
    features: [
      "1 responsive landing page",
      "Custom UI design",
      "Desktop + mobile layouts",
      "Responsive design system",
      "Basic interaction design",
      "Developer-ready Figma file",
    ],
  },

  {
    name: "Full Website",
    designPrice: 999,
    developmentPrice: 2499,
    developmentAvailable: true,
    features: [
      "Up to 6 core pages",
      "Custom UI design",
      "Desktop + mobile layouts",
      "Reusable design system",
      "Basic interactions + motion",
      "Developer-ready Figma file",
    ],
  },

  {
    name: "App Design",
    designPrice: 1299,
    developmentPrice: null,
    developmentAvailable: false,
    features: [
      "Up to 8 core screens",
      "User-flow focused UI",
      "Responsive considerations",
      "Reusable components",
      "Interactive prototype",
      "Developer-ready Figma file",
    ],
  },
];

export default function PricingSection() {
  const [development, setDevelopment] = useState(false);

  return (
    <section className="mt-48 w-full" id="pricing">
      {/* Header */}
      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div>
          <h2 className="font-inter text-4xl font-medium tracking-[-0.03em] md:text-5xl">
            Simple, transparent pricing.
          </h2>
        </div>

        {/* Development toggle */}
        <div className="flex w-fit items-center gap-3 rounded-full border border-black/10 px-2 py-2">
          <span className="pl-2 font-inter text-xs text-black/60 md:text-base">
            Design
          </span>

          <button
            type="button"
            onClick={() => setDevelopment((current) => !current)}
            aria-label="Toggle development"
            aria-pressed={development}
            className="relative h-7 w-12 cursor-pointer rounded-full bg-black/10 transition-colors duration-200"
          >
            <motion.span
              className="absolute left-1 top-1 h-5 w-5 rounded-full bg-black"
              animate={{
                x: development ? 20 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          </button>

          <span className="pr-2 font-inter text-xs text-black/60 md:text-base">
            + Development
          </span>
        </div>
      </motion.div>

      {/* Pricing cards */}
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {pricingPackages.map((pkg, index) => {
          const price =
            development && pkg.developmentAvailable
              ? pkg.developmentPrice
              : pkg.designPrice;

          const isPopular = pkg.name === "Full Website";

          return (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`flex h-full flex-col rounded-2xl p-6 md:p-7 ${
                isPopular
                  ? "border-2 border-black"
                  : "border border-black/10"
              }`}
            >
              {/* Package heading */}
              <div>
                <h3 className="font-inter text-3xl font-medium">
                  {pkg.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mt-8">
                <span className="font-inter text-sm uppercase tracking-wide text-black/40">
                  Starting at
                </span>

                <div className="mt-1">
                  <span className="font-inter text-4xl font-medium tracking-[-0.03em]">
                    ${price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 flex flex-1 flex-col">
                <ul className="mt-4 flex flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 font-inter text-base leading-relaxed"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-black" />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button
                badge="P"
                padding="pl-4 pr-2 py-3"
                badgePadding="px-4 py-1.5"
                onClick={openCal}
                className="mt-10"
                variant="secondary"
              >
                Start a project
              </Button>
            </motion.article>
          );
        })}
      </div>

      {/* Development note */}
      <p className="mx-auto mt-6 max-w-[80%] text-center font-inter text-xs leading-relaxed text-black/40">
        Development pricing covers the implementation of the approved design.
        Hosting, domains, paid third-party services, complex backend systems,
        authentication, dashboards, e-commerce, and custom application logic
        are not included.
      </p>
    </section>
  );
}