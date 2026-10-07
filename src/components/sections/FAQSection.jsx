import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

// Use \n\n inside a string for a paragraph break, \n for a single line break.
// The <p> below has `whitespace-pre-line`, which renders both.
const faqs = [
  {
    question: "How much does a project cost?",
    answer: `Design starts at $800 and development at $900. Book both together and the full package is $1,500, saving you $200.

Every project is custom-designed around your business and your brand. I don't use templates or pre-made layouts. Each page is built from scratch around your audience, your goals, and the story you want your brand to tell, so your site looks like yours and not like a hundred others. That's what turns visitors into customers and gives you a foundation you can grow on.

Final pricing depends on scope: the number of pages or screens, and the complexity of the features. Book a call, share your requirements, and I'll send you a clear, upfront quote with no hidden costs or surprises.`,
  },
  {
    question: "What kind of projects do you work on?",
    answer: `I design and build websites and product interfaces for startups and technology companies, especially in B2B, SaaS, and AI.

That includes landing pages, marketing websites, app screens, and design systems.`,
  },
  {
    question: "Can I book just design or just development?",
    answer: `Yes. Design ($800) and development ($900) can be booked separately.

Booking both together is $1,500 and gives you one person carrying the project from first sketch to live site, with no handoff gaps.`,
  },
  {
    question: "How long does a project usually take?",
    answer: `Most focused website projects take 1–2 weeks.

The exact timeline depends on scope, number of pages, and how quickly feedback and content come back. You'll get a clear delivery date before we start.`,
  },
  {
    question: "What is your design process?",
    answer: `I start by understanding your product, audience, and business goals.

Then I move through structure, visual direction, UI, and responsive layouts across desktop, tablet, and mobile.

I finish with a final polish before handoff or development.`,
  },
  {
    question: "Why not just use a template?",
    answer: `Templates are cheaper upfront, but they look like everyone else's site and rarely fit your message.

A custom design is built around your brand and your customers, so it earns trust faster and converts better.`,
  },
  {
    question: "Do you work from an existing design or start from scratch?",
    answer: `Both. I can redesign your current site, build on an existing brand system, or create everything from scratch if you don't have a visual direction yet.`,
  },
  {
    question: "How many revisions are included?",
    answer: `Revisions are included within the agreed scope.

I focus on getting the direction right early through structured feedback, so you don't end up in endless revision rounds.`,
  },
  {
    question: "What do you need from me before we start?",
    answer: `Your goals, target audience, any existing brand assets, content, and references you like.

If something is missing, I'll tell you exactly what's needed before the project begins.`,
  },
  {
    question: "Do you also handle development?",
    answer: `Yes, for landing pages and micro websites.

You get a fully working, responsive site, so you don't have to find a separate developer.`,
  },
  {
    question: "Can you work with my existing developers?",
    answer: `Yes. I provide production-ready Figma files, responsive specs, and implementation notes so your team can build without guessing.`,
  },
  {
    question: "How does payment work?",
    answer: `50% upfront to start and 50% on delivery.

You'll see the full amount in your quote before anything begins.`,
  },
  {
    question: "What happens after the project is finished?",
    answer: `You receive the final design files, assets, and everything needed for implementation.

If development is included, you get the finished website ready to go live. I'm also happy to help with small tweaks after launch.`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.section
      className="w-full"
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
        <SectionHeading className="mb-0">
          {" "}
          ( ^_^ ) Frequently asked questions
        </SectionHeading>
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
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-dm-sans text-sm text-[#202020]">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="shrink-0 text-2xl font-light leading-none text-[#151515]"
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
                    <p className="max-w-[80%] whitespace-pre-line pb-6 font-mono text-xs leading-relaxed text-[#575757] md:max-w-[70%]">
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
