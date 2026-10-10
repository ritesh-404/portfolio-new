import CaseStudyLayout from "../../components/case-study/CaseStudyLayout";
import {
  Section,
  H3,
  P,
  Figure,
  Video,
  Pair,
} from "../../components/case-study/blocks";

import {
  temporalOriginalActivityImg,
  temporalOriginalBento,
  temporalOriginalCtaFooter,
  temporalOriginalFeatureCards,
  temporalOriginalFooter,
  temporalOriginalHandleFailure,
  temporalOriginalHappyComputer,
  temporalOriginalHeroSection,
  temporalOriginalLanguage,
  temporalOriginalStateMachines,
  temporalOriginalTalks,
  temporalOriginalTestimonials,
  temporalOriginalVisibilityInCode,
  temporalOriginalWatchDemo,
  temporalOriginalWorkflowDemo,
  originalNav,
  moodboard,
  competitors,
} from "../../assets/case_study_media/temporal/original";

import {
  temporalRedesignedActivityImg,
  temporalRedesignedBento,
  temporalRedesignedCtaFooter,
  temporalRedesignedFeatureCards,
  temporalRedesignedFooter,
  temporalRedesignedHandleFailure,
  temporalRedesignedHappyComputer,
  temporalRedesignedHeroSection,
  temporalRedesignedLanguage,
  temporalRedesignedStateMachine,
  temporalRedesignedTalks,
  temporalRedesignedTestimonial,
  temporalRedesignedVisibilityInCode,
  temporalRedesignedWatchDemo,
  temporalRedesignedWorkflowDemo,
  redesignedNav,
} from "../../assets/case_study_media/temporal/redesigned";

import finalVideo from "../../assets/case_study_media/temporal/temporal-comparison.mp4";
import { UL } from "../../components/case-study/blocks";

const PROJECT_URL =
  "https://hvwdoouwqyukyonadjse.supabase.co/storage/v1/object/public/case-studies";

/* [name, what it has to explain, what I changed, before, after] */
const conceptIllustrations = [
  [
    "Language",
    "Temporal's SDKs let you write workflows in the language you already use.",
    "This illustration was very static and life-less so added some motion and improved it visually.",
    temporalOriginalLanguage,
    temporalRedesignedLanguage,
  ],
  [
    "Handle failure",
    "What happens when something fails: retries and recovery, with no lost work.",
    "Their current illustration was a static box illustration with some text written. I researched about this workflow and how temporal handles it and what their process looks like and based on that i made a detailed illustration that explains how temporal handles failures in real life.",
    temporalOriginalHandleFailure,
    temporalRedesignedHandleFailure,
  ],
  [
    "Activity",
    "Activities are the individual steps that do the real work, like calling an API or charging a card, and can be retried on their own.",
    "This illustration had the same issues; static, just box and some text, and no animation so i did some research on how temporal works with this and what is activity(in this case activities are functions that runs on its own to retry the code execution). I proposed the animated illustration concept where i redesigned it to show the process of how activities retry and doesn't stops the execution more clearely and cleanly.",
    temporalOriginalActivityImg,
    temporalRedesignedActivityImg,
  ],
  [
    "State machines",
    "Long-running processes usually end up as hand-built state machines. Temporal lets you write it as plain code.",
    "Same issues here as well and i did research and redesigned this as well!",
    temporalOriginalStateMachines,
    temporalRedesignedStateMachine,
  ],
  [
    "Visibility in code",
    "Seeing what a workflow is doing right now and what it has already done.",
    "Only visual improments were made by me.",
    temporalOriginalVisibilityInCode,
    temporalRedesignedVisibilityInCode,
  ],
  [
    "Happy computer",
    "This illustration has to show how reliable temporal was at handling failure.",
    "A happy compupter is a metaphor not an actual workflow illustration to build trust so dug into temporal's official website to find information about this process and redesigned a realistic workflow showing exactly how temporal is helpful here.",
    temporalOriginalHappyComputer,
    temporalRedesignedHappyComputer,
  ],
  [
    "Watch demo",
    "To make/show the users watch a demo",
    "The original page treated the 'Watch demo' link like a standard text button, which is easy for people to scroll right past. Instead of using a random, meaningless graphic, I went through the actual demo video, pulled a clean frame to use as a thumbnail, and placed a clear play button right over it. Because the visual is much larger, it instantly grabs attention and encourages users to actually watch the product in action rather than ignoring a small link.",
    temporalOriginalWatchDemo,
    temporalRedesignedWatchDemo,
  ],
];

const pageSections = [
  [
    "Feature cards",
    temporalOriginalFeatureCards,
    temporalRedesignedFeatureCards,
  ],
  ["Talks", temporalOriginalTalks, temporalRedesignedTalks],
  ["Testimonials", temporalOriginalTestimonials, temporalRedesignedTestimonial],
  ["Bento", temporalOriginalBento, temporalRedesignedBento],
  ["CTA footer", temporalOriginalCtaFooter, temporalRedesignedCtaFooter],
  ["Footer", temporalOriginalFooter, temporalRedesignedFooter],
];

export default function TemporalCaseStudy() {
  return (
    <CaseStudyLayout
      title="Temporal AI"
      overview="Temporal Technologies Inc. is an American enterprise software company that develops and distributes the world's leading open-source durable execution platform."
      heroVideo={`${PROJECT_URL}/temporal/temporal-video.mp4`}
    >
      <Section title="The problems">
        <P>
          The original temporal.io landing page lacked visual hierarchy, which
          made it hard for engineers to scan. Its outdated illustrations relied
          on generic metaphors that didn't reflect how the product actually
          works.
        </P>
        <P>
          The redesign fixes this with a structured, high-signal experience:
        </P>
        <UL>
          <li>
            <strong className="font-medium text-white">Instant clarity:</strong>{" "}
            Replaced the confusing hero dashboard with a clear value proposition
            and an animated execution flow showing code surviving failure.
          </li>
          <li>
            <strong className="font-medium text-white">
              Meaningful illustrations:
            </strong>{" "}
            Replaced decorative clip-art with custom graphics mapped to core
            concepts like Workflows, Activities and Event History.
          </li>
          <li>
            <strong className="font-medium text-white">
              Scannable navigation:
            </strong>{" "}
            Paired links with icons so people can scan visually instead of
            reading plain text labels one by one.
          </li>
          <li>
            <strong className="font-medium text-white">
              Consistent hierarchy:
            </strong>{" "}
            Organised features into clean bento grids and uniform cards, so
            layout weight matches what matters.
          </li>
        </UL>
      </Section>
      {/* -------------------------------------------------------------------------------- */}

      <Section title="Competitor analysis">
        <P>
          Before touching the design I went through the competitors one by one
          and wrote down what I noticed. Seven in total:{" "}
          <strong>
            Cadence, Restate, Inngest, Trigger.dev, Prefect, Dagster and
            Airflow.
          </strong>{" "}
          Some are direct rivals, some come from the data side, but an engineer
          picking a tool would probably look at all of them. (Checked in August
          2026, these pages change often.)
        </P>

        <Figure
          src={competitors}
          alt="Landing pages of seven Temporal competitors"
          caption="All seven landing pages side by side."
        />

        <UL className="list-decimal">
          <li>
            <strong className="font-medium text-white">Cadence:</strong>{" "}
            Temporal grew out of this project, and you can tell it's the oldest
            of the group. Go code sits right in the hero, and under it are three
            small icon cards. They name Uber and DoorDash as users. No
            illustrations, no motion, and it feels more like docs than a product
            page.
          </li>
          <li>
            <strong className="font-medium text-white">Restate:</strong> Logos
            come first, and then a diagram comparing "classic durable execution"
            with their own approach, animated step by step. Code shows up lower,
            with tabs for different languages. It's one of the few that explains
            how the thing works instead of only what it does. They also have a
            "vs Temporal" page.
          </li>
          <li>
            <strong className="font-medium text-white">Inngest:</strong> The
            snippet and an install command are in the hero. Further down there's
            a before/after graphic showing the tangle of queues and retries
            you'd build yourself versus one step call. Good idea. They have demo
            videos too, and another "vs Temporal" page.
          </li>
          <li>
            <strong className="font-medium text-white">Trigger.dev:</strong>{" "}
            Code in the hero, a video background, and a "how it works" video.
            The page leans hard on AI agents. It also has a really long feature
            list, which is useful but makes the page heavy to scan. Yep, "vs
            Temporal" page here too.
          </li>
          <li>
            <strong className="font-medium text-white">Prefect:</strong> The
            hero is just text and buttons. A Python snippet shows up lower,
            along with an animated run timeline and dashboard mockups. It's
            clean, but the visuals are all the product's own UI.
          </li>
          <li>
            <strong className="font-medium text-white">Dagster:</strong> No code
            anywhere near the top, just a collage of UI screens and big customer
            numbers (like "14x fresher data"). It's clearly written for data
            teams, not backend engineers. Side note: Prefect bought Dagster in
            July 2026, and both sites say so.
          </li>
          <li>
            <strong className="font-medium text-white">Airflow:</strong>{" "}
            Confetti and an install button. The confetti doesn't mean anything,
            it's just there. No code in the hero either.
          </li>
        </UL>
      </Section>

      {/* --------------------------------------------------------------------------------------------------- */}

      <Section title="What I noticed" toc="What I noticed">
        <P>Reading them back to back, the same things kept showing up.</P>

        <UL>
          <li>
            <strong className="font-medium text-white">
              Code is everywhere.
            </strong>{" "}
            Five of the seven put a snippet on the homepage. Engineers trust
            what they can read. Temporal's page had none.
          </li>
          <li>
            <strong className="font-medium text-white">
              Everyone is pitching agents.
            </strong>{" "}
            Five of seven mention AI or agents in the headline or subheading.
            When everyone says it, it stops telling them apart.
          </li>
          <li>
            <strong className="font-medium text-white">
              Illustrations are rare.
            </strong>{" "}
            Most have icons, confetti or screenshots. Only Restate and Inngest
            explain an idea with a real diagram.
          </li>
          <li>
            <strong className="font-medium text-white">
              Motion mostly shows the dashboard.
            </strong>{" "}
            I found animations of the product's UI and of architecture, but none
            that tell a story about a specific situation, like something failing
            halfway and the system picking it back up.
          </li>
          <li>
            <strong className="font-medium text-white">
              Everyone is aiming at Temporal.
            </strong>{" "}
            Four of them have a "vs Temporal" page. So Temporal is the one being
            compared against, and its page should feel like it.
          </li>
        </UL>
      </Section>

      <Section title="The gap" toc="The gap I found">
        <P>
          Next to the others, Temporal's original page had no code,
          illustrations that didn't explain anything, and almost no motion. A
          visitor had to take its word for what durable execution is.
        </P>
        <P>
          I didn't try to win on code. I spent the effort on the two things
          almost nobody did well: illustrations that each explain one real
          concept (workflows, activities, state machines, event history,
          handling failure), and short animations built around a specific
          scenario, so you see what Temporal does for you instead of reading a
          definition.
        </P>
        <P>
          To draw these properly I had to understand the product first. I read
          the docs, watched the tutorials and learned enough backend concepts to
          know what actually happens when a workflow retries or resumes. That
          took the longest, and it was worth it, because a wrong illustration is
          worse than none for an audience of engineers.
        </P>
        <P>
          I kept the animations light: short loops, one idea at a time, so the
          page stays fast.
        </P>

        {/* <Video src={scenarioDemo} caption="…" /> */}
      </Section>

      <Section title="Moodboard">
        <P>
          I wanted the page to feel familiar to someone who has seen these
          tools, but still be recognisably Temporal. Familiar so they trust it,
          different so they remember it.
        </P>

        <Figure
          src={moodboard}
          alt="Moodboard of landing pages and chart references"
          caption="Dark developer-tool pages on the left, light pages top right, chart and illustration references below."
        />

        <P>
          Four of the seven competitors are dark (Inngest, Trigger.dev, Prefect,
          Airflow), and so are tools like Linear, Oxide and Better Stack. The
          lighter ones, Cadence, Restate and Dagster, lean on bright colour or
          speak to data teams. Temporal's audience lives in terminals, so dark
          felt right. The light pages on the board (Parallel, Attio, Ditto) are
          friendly and clean. I borrowed their clarity but not their mood.
        </P>

        <H3>Kept familiar</H3>
        <UL>
          <li>
            The page order developers expect: nav, hero, proof, features, call
            to action.
          </li>
          <li>Big plain headlines and very little decoration.</li>
          <li>A calm, technical feel.</li>
        </UL>

        <H3>Made different</H3>
        <P>
          Every competitor has the same nav, hero, logo strip and code block, so
          changing the layout wouldn't have set Temporal apart. What was missing
          was explanation, so that's where the difference comes from:
          illustrations made for Temporal's own concepts and animations built
          around real scenarios. The chart cards at the bottom of the board were
          my reference for how clean those graphics could be: one big number,
          one accent, nothing extra.
        </P>
      </Section>

      {/* -------------------------------------------------------------------------------- */}
      <Section title="The Approach">
        <P>
          I wanted to make the page much easier to scan and understand without
          relying on standard marketing tricks. If I started designing straight
          away in Figma, I would have just made things look pretty without
          actually fixing why people were confused. So,{" "}
          <strong>
            I forced myself to stop and learn how the product worked first.{" "}
          </strong>
        </P>
        <P>
          I spent days reading through the official docs, watching tutorials,
          and looking at how other developer tools explain themselves.{" "}
          <strong>
            I realized that engineers do not care about generic buzzwords or
            cute graphics.{" "}
          </strong>{" "}
          They want to see real proof. That is why I shaped my research around a
          few clear steps:
        </P>
        <UL>
          <li>
            Figuring out what backend engineers actually care about when they
            look for reliability tools.
          </li>
          <li>
            Looking at what competitors did right and wrong so I could avoid
            their mistakes.
          </li>
          <li>
            Showing people how the product actually behaves instead of hiding it
            behind random metaphors.
          </li>
        </UL>

        <P>
          I chose to{" "}
          <strong>
            drop all the generic stock art because it felt dishonest for a tool
            built on reliability.
          </strong>{" "}
          If a product is all about keeping code safe through server crashes,
          the design itself has to look stable and clear. By figuring out the
          actual product mechanics before drawing anything, every single
          illustration and section on the page finally had a clear job to do.
        </P>
      </Section>

      {/* -------------------------------- */}
      <Section title="1. Navbar" toc="Section-by-Section">
        <P>
          The original navbar menu felt vague and difficult to scan, so I
          redesigned it using a classic UX principle: pairing meaningful icons
          with text to make navigation faster and more intuitive. Instead of
          relying on text alone, each label now has its own recognizable icon,
          helping users identify options at a glance.
        </P>
        <P>Key improvements :</P>

        <UL className="list-decimal">
          <li>
            <strong className="font-medium text-white">
              Color-coded icons:
            </strong>{" "}
            Added meaningful icons with subtle, light colors to distinguish
            navigation options against the dark background.
          </li>
          <li>
            <strong className="font-medium text-white">
              Clear dropdown indicators:
            </strong>{" "}
            Added chevrons to Platform, Use Cases, and Resources to signal
            additional menu options.
          </li>
          <li>
            <strong className="font-medium text-white">
              Structured layout:
            </strong>{" "}
            Grouped related links into three columns with consistent spacing,
            alignment, and padding.
          </li>
          <li>
            <strong className="font-medium text-white">
              Visual highlights:
            </strong>{" "}
            Used subtle background highlights to draw attention to key menu
            items and improve navigation clarity.
          </li>
          <li>
            <strong className="font-medium text-white">
              Consistent styling:
            </strong>{" "}
            Refined typography, icon sizing, and panel contrast to create a
            cohesive interface.
          </li>
        </UL>

        <P>
          <strong>The result:</strong> A more intuitive, visually organized
          navigation menu that helps users find relevant options faster with
          less effort.
        </P>

        <Pair
          before={originalNav}
          after={redesignedNav}
          alt="Temporal navbar"
          beforeCaption="Original navbar — vague labels made the navigation harder to scan."
          afterCaption="Redesigned navbar — clearer labels and meaningful icons make the navigation easier to scan."
        />
      </Section>

      <Section title="Hero section">
        <P>
          The hero is the first thing anyone sees, and on the original page it
          didn't tell me what Temporal is. "The world's best AI runs on
          Temporal" is a claim about who uses it. The line underneath and the
          logo strip say the same thing again: look at the big names. Someone
          who has never heard of Temporal leaves still not knowing what it does.
          The purple space gradient and grid lines behind the text made it
          harder to read too.
        </P>

        <Pair
          before={temporalOriginalHeroSection}
          after={temporalRedesignedHeroSection}
          alt="Temporal hero section"
          beforeCaption="Original hero — a boast about who uses it, on a busy gradient background."
          afterCaption="Redesigned hero — says what Temporal is and shows it working. Static frame of the final state."
        />

        <H3>What I changed</H3>
        <P>
          The headline now says what Temporal is: "The reliability layer for AI
          agents and modern apps." The first line is white and the second is
          grey, so the important part reads first. I kept the supporting copy
          and the logo strip, because the proof was already good. The problem
          was the order, not the content.
        </P>

        <H3>The animation</H3>
        <P>
          Instead of a background image, the top of the hero now shows a
          workflow running. An AI agent calls an LLM, runs a tool, calls the LLM
          again, and runs another tool. That last step fails (red) and then
          recovers (green), while the "Workflow running" bar above it never
          stops. In a few seconds a visitor sees the main idea of durable
          execution: things fail, and the work survives.
        </P>
        <P>
          I picked an agent example because that's what most people are looking
          for right now, and the step names (call_llm, execute_tool) are ones
          engineers will recognise. The bars are meant to animate one after
          another, so the screenshot shows only the final frame. I handed the
          order and timing over to the developers.
        </P>

        {/* <Video src={heroAnimation} caption="…" /> */}

        <H3>Key improvements</H3>
        <UL className="list-decimal">
          <li>The headline says what Temporal is, instead of who uses it.</li>
          <li>
            The page shows the product's promise (failure, then recovery)
            instead of describing it.
          </li>
          <li>
            A calmer background. I removed the gradient and the grid, so the
            text and diagram are easy to read.
          </li>
          <li>
            A clear main action. "Get started" is the only colourful button, and
            "Run locally" stays quiet next to it.
          </li>
          <li>
            The nav now has dropdown arrows on menus, and the GitHub star count
            sits next to the icon, where developers look for proof.
          </li>
          <li>
            A stronger layout: diagram on top, headline on the left, copy and
            buttons on the right.
          </li>
        </UL>

        <P>
          A note on process: I went through a few versions of this hero, but the
          files from my earlier iterations got deleted, so I can only show the
          final one. This is also a self-initiated redesign, so I haven't tested
          it with real visitors.
        </P>
      </Section>

      <Section title="Illustrations">
        <P>
          This was the part of the redesign I spent the most time on. Most of
          the competitors I looked at use illustrations as decoration: icons,
          confetti, screenshots. Temporal's original ones were the same. They
          looked fine, but they didn't explain anything.
        </P>
        <P>
          For an audience of engineers, a drawing is only useful if it's
          correct. A pretty diagram that gets the concept wrong is worse than no
          diagram. So before drawing anything, I had to understand what Temporal
          actually does. I read the docs, watched their tutorials and went
          through the site to learn the backend concepts: workflows, activities,
          retries, event history.
        </P>

        <H3>How I worked on each one</H3>
        <UL>
          <li>Write one sentence on what the illustration has to explain.</li>
          <li>Find the simplest accurate picture of that idea.</li>
          <li>
            Use real names from the product (step names, states) so engineers
            recognise them.
          </li>
          <li>Remove everything that doesn't help someone understand it.</li>
          <li>
            Keep one visual system across all of them, with the same lines,
            colours and spacing.
          </li>
        </UL>
      </Section>

      <Section title="The workflow demo" toc="Workflow demo">
        <P>
          The best example is the workflow demo, because it's the one that
          matters most. It's meant to show Temporal's main idea, and the
          original made it harder to understand.
        </P>
        <UL>
          <li>It had scrollbars and other UI that didn't add anything.</li>
          <li>
            The graph showed the days inverted, which is really confusing to
            read.
          </li>
          <li>The styling was inconsistent from one part to the next.</li>
        </UL>
        <P>
          I removed what didn't carry meaning, fixed the graph so it reads the
          way people expect, and made the parts look like they belong together.
        </P>

        <Pair
          before={temporalOriginalWorkflowDemo}
          after={temporalRedesignedWorkflowDemo}
          alt="Temporal workflow demo"
          beforeCaption="Original — scrollbars, an inverted graph and inconsistent styling."
          afterCaption="Redesigned — only what explains the workflow, and a graph that reads correctly."
        />

        {/* <Video src={workflowAnimation} caption="…" /> */}
      </Section>

      <Section title="Concept illustrations" toc="Concept illustrations">
        <P>
          These are the other illustrations on the page. Each one explains a
          single idea, so I'll show what it had to explain and what I changed.
        </P>
        <div className="flex flex-col gap-16">
          {conceptIllustrations.map(
            ([name, explains, change, before, after], i) => (
              <div key={name} className="flex flex-col gap-4">
                <H3>
                  {String(i + 1).padStart(2, "0")}. {name}
                </H3>
                <P>
                  <span className="text-white">What it has to explain:</span>{" "}
                  {explains}
                </P>
                <P>
                  <span className="text-white">What I changed:</span> {change}
                </P>
                <Pair before={before} after={after} alt={name} />
              </div>
            ),
          )}
        </div>
      </Section>

      <Section title="The rest of the page" toc="Rest of the page">
        <P>
          I used the same system for the rest of the page. They aren't
          illustrations, but they had the same problems: inconsistent visuals
          and weak hierarchy, which made them hard to scan. Rebuilding them with
          the same rules made the whole page feel like one product.
        </P>
        <div className="flex flex-col gap-16">
          {pageSections.map(([name, before, after], i) => (
            <div key={name} className="flex flex-col gap-6">
              <H3>
                {String(i + 1).padStart(2, "0")}. {name}
              </H3>
              <Pair before={before} after={after} alt={name} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Final design side by side" toc="Final comparison">
        <Video
          src={finalVideo}
          caption="Final comparison showing the original and redesigned experience."
        />
      </Section>
    </CaseStudyLayout>
  );
}
