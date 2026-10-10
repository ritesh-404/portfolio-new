import CaseStudyLayout from "../../components/case-study/CaseStudyLayout";
import { Section, H3, P, UL, Pair } from "../../components/case-study/blocks";

import byteAskOld from "../../assets/case_study_media/hero_sections_case_study/byteAsk_old.webp";
import hyperProbeOld from "../../assets/case_study_media/hero_sections_case_study/hyperProbe_old.webp";
import openSeoOld from "../../assets/case_study_media/hero_sections_case_study/OpenSEO_old.webp";
import threadOtterOld from "../../assets/case_study_media/hero_sections_case_study/threadOtter_old.webp";

import byteAskNew from "../../assets/new_portfolio/byte-ask_newPortfolio.webp";
import hyperProbeNew from "../../assets/new_portfolio/hyperProbe_newPortfolio.webp";
import openSeoNew from "../../assets/new_portfolio/openseo_newPortfolio.webp";
import threadOtterNew from "../../assets/new_portfolio/thread_otter_newPortfolio.webp";

export default function HeroSectionsCaseStudy() {
  return (
    <CaseStudyLayout
      title="Hero sections"
      overview="A side project I keep coming back to. In my free time I pick new startups from VC databases like Y Combinator, work out what they do and who they sell to, and redesign their hero sections so the product is easier to understand."
    >
      {/* ------------------------------------------------------------ */}
      <Section title="Why I keep doing this" toc="Why I do this">
        <P>
          I like fixing broken interfaces. In my free time I go through lists of
          new startups, mostly from VC databases like Y Combinator, pick one
          whose product I find interesting, and redesign its hero section. The
          hero is the first thing a visitor sees, so it's where a confusing page
          costs the most.
        </P>
        <P>
          This case study covers four of those redesigns: ByteAsk, HyperProbe,
          OpenSEO and Thread Otter. I'm not connected to any of these companies,
          and I didn't have their numbers. Everything here is my own thinking,
          based on studying the page and working out who it's for.
        </P>
        <P>
          <strong className="font-medium text-white">A note on dates:</strong>{" "}
          the screenshots in this case study were taken before september 2026.
          If any of these companies has updated its site since then, my
          comparison no longer matches the live page, and that would be a
          different case.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="How I start, before I open Figma" toc="How I start">
        <P>
          Before I design anything I try to answer two questions: what does this
          company actually do, and who is it trying to sell to? I read the site,
          the docs if there are any, and how the founders describe the product
          themselves. I can't fix a hero until I know what it's supposed to say.
        </P>
        <P>Then I look at the existing hero and ask four things:</P>
        <UL className="list-decimal">
          <li>Can I tell what this is within five seconds?</li>
          <li>Is it clear who it's for?</li>
          <li>Is there one obvious next step?</li>
          <li>Is there something on screen that shows it works?</li>
        </UL>
        <P>
          The problems I found came in a few repeating shapes: too many things
          at the same volume, the real explanation hiding in small text, and
          nothing to look at that shows the product. I also try to leave alone
          what already works. Every company here had a good badge, good copy
          somewhere, or a clever idea I didn't want to throw out.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section
        title="ByteAsk: a calmer page for people who read compiler errors"
        toc="ByteAsk"
      >
        <P>
          ByteAsk makes an AI coding agent for C and C++. It runs in your
          terminal, edits the code, then runs the compiler, the sanitizers and
          your tests to check its own work. The people using it write systems
          code: trading, automotive, chips, defence. They read carefully, they
          live in a terminal, and they don't trust hype.
        </P>
        <P>
          The old hero was loud for that audience. The headline ran almost edge
          to edge in huge bold type, half black and half green. The paragraph
          sat on top of the swirly background, so the lines of the pattern cut
          through the text. Five things were stacked in the center: a badge, a
          category line, the headline, the paragraph and the install command.
          There was no sign-up button at all. The install command was the real
          call to action, but nothing on the page said so.
        </P>

        <Pair
          before={byteAskOld}
          after={byteAskNew}
          alt="ByteAsk hero"
          beforeCaption="Original (August 2026). Edge-to-edge headline, text over a patterned background, no clear button."
          afterCaption="Redesigned. Left-aligned, a clean background, and an install panel with a label."
        />

        <H3>What I changed</H3>
        <UL className="list-decimal">
          <li>
            Left-aligned everything. Left-aligned lines all start in the same
            place, the way code and documentation do, which makes them faster to
            scan than a centered stack.
          </li>
          <li>
            Switched to a white background, so the text has nothing behind it.
          </li>
          <li>
            Used a serif for the headline and a monospace for the line under it.
            The serif carries the promise. The monospace says "terminal-native"
            and looks like the tool the page is about.
          </li>
          <li>
            Rewrote the headline to "Ship C &amp; C++ codes with compiler-backed
            certainty". The old one said "Proves it compiles, runs, and passes",
            which is the same idea. I kept the idea and shortened it.
          </li>
          <li>
            Added two buttons: a solid black "Start a 7 day free trial" and a
            quiet outlined "See how it works".
          </li>
          <li>
            Put the install command in its own panel with a label, "Choose your
            Operating system". I removed "How it works" and the Discord icon
            from the nav, since the hero button covers the first and the second
            isn't something a first-time visitor needs.
          </li>
        </UL>
        <P>
          I kept the install command on purpose. A developer who's ready to try
          it will paste a line into a terminal faster than they'll fill in a
          form. But not everyone is ready to do that on a first visit, so the
          trial button is there for people who want to look around first.
        </P>
        <P>
          I also took the paragraph about sanitizers and gdb out of the hero.
          It's the best technical detail on the page, and it belongs lower down.
          In the hero it was a lot to read before the headline had landed.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="HyperProbe: one color, one button" toc="HyperProbe">
        <P>
          HyperProbe is a debugging tool for production. When something breaks
          in a live service, it lets your coding agent (Cursor, Claude Code,
          Codex and so on) place a read-only probe on a line of running code and
          see what the variables actually were, without adding a log line and
          redeploying. It's built for backend teams, especially whoever is on
          call at 2am.
        </P>
        <P>
          The old hero had a great idea in it: a fake alert strip at the top
          that read "02:47 AM, order-service, 847 failures, @priya paged".
          Anyone who has been on call felt that. The trouble was everything
          around it. Orange was on the headline words, the line under the
          paragraph, the alert, the YC badge and the main button, so nothing
          stood out. Three words of the headline were in orange italics, "log,
          redeploy, wait", which made the sentence hard to read as one thought.
          Bright rays ran across the whole background, and a line of languages
          and tools sat at the bottom in tiny gray type.
        </P>

        <Pair
          before={hyperProbeOld}
          after={hyperProbeNew}
          alt="HyperProbe hero"
          beforeCaption="Original (August 2026). Orange on five different things, a busy background, tiny text at the bottom."
          afterCaption="Redesigned. Split layout, orange only on the main button."
        />

        <H3>What I changed</H3>
        <UL className="list-decimal">
          <li>
            Split the hero in two. The headline, which is the problem, sits on
            the left. The explanation, the buttons and what it works with sit on
            the right. You read the pain first and the answer second.
          </li>
          <li>
            Gave orange one job: the Try Now button. "Book a demo" became a
            quiet gray button next to it.
          </li>
          <li>
            Made "Kill the" and "Cycle" white and the three steps gray. The
            steps are the thing being killed, so they fade back, and the
            sentence reads as one idea.
          </li>
          <li>
            Replaced the rays with a faint grid of dark squares that you barely
            notice.
          </li>
          <li>
            Moved "No code change. No restart." into the paragraph as one bold
            sentence. It's the most important line for this product, and now it
            sits where people read.
          </li>
          <li>
            Turned the tool names into logos you can recognise at a glance, and
            turned the language list into a slow scrolling strip below the hero.
          </li>
          <li>
            Took the alert strip out of the hero. It's a good story, but it was
            the third thing to read and it competed with the headline. The
            section right below now opens with "This is what your team is living
            with", which is where that story fits.
          </li>
        </UL>
        <P>
          The people this is for are tired engineers. They want to know three
          things quickly: what is it, does it work with my stack, and what do I
          click. The logos and the language strip answer the middle question
          without taking attention from the other two.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section
        title="OpenSEO: show the tool, not just the promise"
        toc="OpenSEO"
      >
        <P>
          OpenSEO is an open-source SEO tool, meant as a lighter and cheaper
          alternative to Semrush and Ahrefs. It does keyword research,
          backlinks, rank tracking and site audits, and it connects to an AI
          agent so the agent can use the data directly. The people who land here
          are founders, marketers and SEOs who already know the big tools and
          find them expensive or bloated. Many of them already work with an AI
          agent.
        </P>
        <P>
          The old hero was clean, which was good. But after the button there was
          nothing: a big empty gap and no hint of what the product looks like.
          "SEO made simple" could sit on any SEO tool's page, and "Start
          enjoying SEO" didn't say what the button would do. The Discord button
          also floated over the bottom corner of the page.
        </P>

        <Pair
          before={openSeoOld}
          after={openSeoNew}
          alt="OpenSEO hero"
          beforeCaption="Original (August 2026). Clean, but nothing to look at under the button."
          afterCaption="Redesigned. A real screenshot of the app, right under the button."
        />

        <H3>What I changed</H3>
        <UL className="list-decimal">
          <li>
            Added a picture of the real app under the button, in a browser frame
            with the address app.openseo.so. It shows the keyword table (volume,
            CPC, competition, score, intent), a search trend chart and a SERP
            panel.
          </li>
          <li>
            Changed the button to "Get started - Free", with "No credit card
            required" under it.
          </li>
          <li>
            Moved Discord into the nav so it stops floating over the page, and
            made the GitHub star count (22.1k+) easier to see.
          </li>
          <li>Gave the logo a small mark.</li>
          <li>
            Kept the headline, the paragraph and the Product of the Day badge.
          </li>
        </UL>
        <P>
          The people on this page already know what a keyword table looks like.
          Seeing one straight away does a lot of work. It says this is a real
          tool, that it covers what they're used to, and that they can open it
          today. The browser frame with a real address says the same thing. For
          an open-source product the star count is also a form of proof, so it
          should be somewhere people look.
        </P>
        <P>
          I left the headline alone. It's short, and the paragraph under it does
          the explaining. The problem on this page wasn't the words. It was that
          you couldn't see anything.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section
        title="Thread Otter: lead with what you get, not how fast"
        toc="Thread Otter"
      >
        <P>
          Thread Otter is an AI marketing agent for founders. It watches places
          like Reddit, X, LinkedIn and Bluesky for people who are asking for
          something like what you sell, writes a reply in your voice, and tracks
          which conversations turn into signups. It's for founders and small
          teams who have a company to run and no time to hang around on Reddit.
        </P>
        <P>
          The old headline was "Live in 5 minutes. Distribution on autopilot."
          The first line is about setup time and the second is a buzzword. The
          sentence that actually says what the product does, "Your GTM agent. It
          finds buyers across…", was in the small paragraph below. There was
          also a lot of color: an orange eyebrow line, an orange headline, and
          each platform name in its own brand color. Speed got said twice, in
          the headline and again in the chips under the paragraph. The card on
          the right was tilted with a big mascot, and on my screen the only
          button in view was the small "Get started" in the nav.
        </P>

        <Pair
          before={threadOtterOld}
          after={threadOtterNew}
          alt="Thread Otter hero"
          beforeCaption="Original (August 2026). A headline about speed, lots of color, no button in the hero itself."
          afterCaption="Redesigned. A headline about the outcome, one accent color, and a try-it box."
        />

        <H3>What I changed</H3>
        <UL className="list-decimal">
          <li>
            Wrote a new headline: "Find people asking for what you sell." It
            says what you get, in the words a founder would use.
          </li>
          <li>
            Made the headline one color and kept orange for the main button.
          </li>
          <li>
            Cut the eyebrow line and the chips. The numbers are still true, but
            they're details, not the pitch.
          </li>
          <li>
            Added two clear buttons: an orange "Start 7 day free trial" and a
            gray "See pricing", with "No credit card required" below.
          </li>
          <li>
            Moved the explanation to the right column. I kept "It runs on full
            autopilot; approval is optional" as a small italic aside, because
            handing your accounts to an AI is the worry a founder will have.
          </li>
          <li>
            Straightened the activity log and made it the main picture. It tells
            the story of one night: a thread found at 11:47 PM, a reply drafted,
            and a last row, highlighted, that reads "Sign up - attributed".
          </li>
          <li>
            Added a small try-it box: type your website and see your top three
            threads, free, with no signup.
          </li>
        </UL>
        <P>
          A founder doesn't care how fast the agent starts. They care about
          customers. The log shows the whole chain from a thread to a signup and
          ends on the thing they actually want, which is why that row is
          highlighted. The small line beside it, "you slept through most of
          this", says in a human way what the log is for: all of that happened
          while you weren't there.
        </P>
        <P>
          The try-it box is there because seeing value before you sign up is far
          more convincing than a promise. Thread Otter already has a free buyer
          report that works this way, so I brought it up into the hero instead
          of leaving it for later.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="What the four had in common" toc="Patterns">
        <P>
          Looking at the four side by side, I did the same few things each time.
        </P>
        <UL className="list-decimal">
          <li>
            <strong className="font-medium text-white">
              Fewer things at full volume.
            </strong>{" "}
            In every old hero, three or four things were shouting at once. In
            the new ones the headline is loudest, then the main button.
          </li>
          <li>
            <strong className="font-medium text-white">
              Color with a job.
            </strong>{" "}
            Orange or black now marks the main action and not much else.
          </li>
          <li>
            <strong className="font-medium text-white">
              Layouts that read in a line.
            </strong>{" "}
            I replaced centered stacks with left-aligned or split layouts that
            the eye can follow.
          </li>
          <li>
            <strong className="font-medium text-white">
              The headline says what you get.
            </strong>{" "}
            Where the real explanation was hiding in small text, I pulled it up.
          </li>
          <li>
            <strong className="font-medium text-white">
              Something to look at that shows it works.
            </strong>{" "}
            An install command, a row of logos, a real screenshot, an activity
            log. Each one is different, with the same purpose.
          </li>
        </UL>
        <P>
          I changed the actual words only twice, on ByteAsk and Thread Otter,
          where the main message was buried. On the other two the words were
          fine and the problem was how they were shown. The companies know their
          products better than I do, so where I could, I left their words alone
          and changed what the page puts in front of the reader.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="What I can't prove" toc="What I can't prove">
        <P>
          These are concept redesigns. I haven't tested any of them, I don't
          have the companies' analytics, and the screenshots are from August
          2026. If a company has changed its page since, my comparison is out of
          date. This is a record of my thinking, not a claim about results.
        </P>
        <P>If I could test them, I'd start with:</P>
        <UL className="list-decimal">
          <li>
            A five-second test: show each hero for five seconds, then ask "what
            does this do, and who is it for?"
          </li>
          <li>Clicks on the main button, old against new.</li>
          <li>How far people scroll before they leave.</li>
        </UL>
        <P>
          I'd also check that each new hero still says clearly what the product
          is. On a couple of these I cut text I liked to make room, and the real
          test is whether a first-time visitor still gets it. On ByteAsk in
          particular I'd check that people understand it's an AI agent, because
          the new hero leans on the headline and the terminal line to say so.
        </P>
      </Section>
    </CaseStudyLayout>
  );
}
