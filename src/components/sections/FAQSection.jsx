import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the project and what you’re looking to build. Most projects start at $499 for a landing page design, and the price goes up depending on the scope, number of pages or screens, and overall complexity. Once you book a call and share your requirements, I’ll review the project with you and provide a clear, upfront quote tailored to your needs.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I mainly work on websites and product interfaces for B2B, SaaS, AI, and technology companies. This can include landing pages, marketing websites app designs.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Most focused website projects take around 1–2 weeks. The exact timeline depends on the scope, number of pages, complexity, and how quickly feedback and content are provided.",
  },
  {
    question: "What is your design process?",
    answer:
      "I start by understanding the product, users, business goals, and existing experience. From there I work through the structure, visual direction, UI, responsive states, and final polish before preparing everything for handoff or implementation.",
  },
  {
    question: "Do you work from an existing design or start from scratch?",
    answer:
      "Both. I can redesign an existing product or website, work from an existing brand system, or create the interface from scratch when there is no established visual direction.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "The goal is to get the direction right early through structured feedback rather than going through endless revision rounds. Revisions are included throughout the project within the agreed scope.",
  },
  {
    question: "What do you need from me before we start?",
    answer:
      "Usually I need a clear understanding of the product, goals, target users, existing assets, content, and any references you already have. I will tell you exactly what is needed before the project begins.",
  },
  {
    question: "Can you work with my existing developers?",
    answer:
      "Yes. I can work directly with an existing engineering team and provide production-ready Figma files, responsive specifications, interaction details, and implementation guidance.",
  },
  {
    question: "Do you also handle development?",
    answer: "Yes but only for landing pages and micro websites",
  },
  {
    question: "Do you design for mobile and responsive layouts?",
    answer:
      "Yes. Responsive behavior is considered as part of the design rather than treated as an afterthought. The interface is designed to work across desktop, tablet, and mobile breakpoints.",
  },
  {
    question: "What happens after the project is finished?",
    answer:
      "You receive the final design files and assets along with everything needed for implementation. For projects that include development, the finished experience can be handed over as a working website or product interface.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.section
      className="mt-48 w-full"
      id="faqs"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Section heading */}
      <div className="mb-10 md:mb-12">
        <h2 className="font-inter text-4xl font-medium tracking-[-0.03em] md:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ list */}
      <div className="border-t border-black/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="border-b border-black/10">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left md:py-6"
                aria-expanded={isOpen}
              >
                <span className="font-inter text-base font-medium md:text-lg">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="shrink-0 text-2xl font-light leading-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: {
                        duration: 0.25,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[80%] pb-6 font-inter text-sm leading-relaxed text-black/60 md:max-w-[70%] md:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
