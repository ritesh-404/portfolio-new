import CaseStudyLayout from "../../components/case-study/CaseStudyLayout";
import {
  Section,
  H3,
  P,
  UL,
  Figure,
  Grid,
  Pair,
} from "../../components/case-study/blocks";

import {
  typani_hero_section,
  typaniDesktop1,
  typaniDesktop2,
  typaniDesktop3,
  typaniDesktop4,
  howItWorksCards,
  sixSeconds_bento,
  ninePM1Star_bento,
  howReplyLooksLike_bento,
  pricing_Cards,
  autoPilot_new,
  faq_new,
  footer_new,
} from "../../assets/hero_Section_Project_Img/typani_ai";

import {
  faqOld,
  ninePmOneStartOld,
  typaniAtAGlanceOld,
  typaniAutoPilotOld,
  typaniDemoVideoOld,
  typaniFooterOld,
  typaniHeroOld,
  typaniHowItWorksOld,
  typaniPricingOld,
  typaniReplyLooksLikeOld,
  typaniSeeInActionDemoNew,
  typaniSeeInActionDemoOld,
  typaniSixSecondsBentoOld,
} from "../../assets/case_study_media/typani/old";

export default function TypaniCaseStudy() {
  return (
    <CaseStudyLayout
      title="Typani"
      overview="Typani is an AI-powered software tool designed to help local and multi-location businesses manage and reply to customer reviews effortlessly. Built by Rize Market LLC, it connects directly to a business's Google Business Profile to automate the review-response workflow."
      heroImage={typani_hero_section}
    >
      {/* ------------------------------------------------------------ */}
      <Section title="What I set out to fix" toc="The brief">
        <P>
          This is a concept redesign of Typani's landing page. I'm not on their
          team and I didn't have their numbers, so everything here comes from
          studying the page and thinking about how a first-time visitor reads
          it.
        </P>
        <P>
          The product itself is simple. It watches your Google reviews, writes a
          reply in your voice, and you approve it with one tap. A restaurant
          owner who lands on the page has a few seconds of patience and needs to
          work out three things: what this does, whether it's for them, and what
          to click. The original page made them work for all three.
        </P>
        <P>I set four goals and everything below follows from them:</P>
        <UL className="list-decimal">
          <li>Give the first screen one clear action.</li>
          <li>Cut how much a visitor has to read before they get it.</li>
          <li>Show the product instead of describing it.</li>
          <li>Make the pricing choice obvious.</li>
        </UL>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section
        title="Reading the old page like a visitor"
        toc="First impressions"
      >
        <P>
          I scrolled the original from top to bottom and wrote down every place
          where I got tired or lost. It didn't take long to fill the list.
        </P>
        <UL className="list-decimal">
          <li>
            <strong className="font-medium text-white">
              No focus on the first screen.
            </strong>{" "}
            Two pills labelled FREE sat next to a green sign-up button in the
            nav. Below that were a "Now live" badge and two big buttons. That's
            six things all asking for a click before anyone has read a sentence.
            When everything is loud, nothing is.
          </li>
          <li>
            <strong className="font-medium text-white">Walls of text.</strong>{" "}
            Most sections were a headline and a paragraph of four or five lines.
            Even the "how it works" steps were only text.
          </li>
          <li>
            <strong className="font-medium text-white">
              No room to breathe.
            </strong>{" "}
            Dark and light bands were stacked right on top of each other, each
            with big type, so the page felt busy for a product that is simple.
          </li>
          <li>
            <strong className="font-medium text-white">
              One idea spread over four sections.
            </strong>{" "}
            The features ran as four full-width blocks in a row, all making
            versions of the same point.
          </li>
          <li>
            <strong className="font-medium text-white">
              Things in the wrong place.
            </strong>{" "}
            The demo video sat a full screen below the hero, a block of facts
            sat between the demo and the pricing, and every FAQ answer was open
            at once.
          </li>
        </UL>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="How I worked" toc="Approach">
        <P>
          I didn't open Figma first. I went through the page one section at a
          time, gave each section a single job, and asked what was getting in
          the way of that job. I used four rules:
        </P>
        <UL>
          <li>
            One job per section. If a section had two, I split it or cut one.
          </li>
          <li>
            Show first, explain second. If a picture can do the work of a
            paragraph, use the picture.
          </li>
          <li>
            The main action is the loudest thing on screen. Everything else is
            quieter.
          </li>
          <li>
            Anything that pulls people away from signing up has to earn its
            place.
          </li>
        </UL>
        <P>
          I also kept Typani's words. The copy is actually good. It's specific,
          and it avoids lines like "we appreciate your feedback". The problem
          was how it was laid out, so most of my work is layout, hierarchy and
          visuals, not rewriting.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="The first screen: one job" toc="First screen">
        <P>
          The old first screen was a dark block with a three-line headline in
          two colors, a long paragraph, two big buttons, a small reassurance
          line, and a badge on top. Up in the nav there were two more pills and
          a third button. The headline was the loudest thing, and it was
          shouting a sentence people can read at normal size.
        </P>

        <Pair
          before={typaniHeroOld}
          after={typani_hero_section}
          alt="Typani hero"
          beforeCaption="Original first screen. Six things asking for a click, and the demo video is nowhere to be seen."
          afterCaption="Redesigned first screen. One main button, and the video is right there."
        />

        <H3>What I changed</H3>
        <UL className="list-decimal">
          <li>
            Took the two FREE pills out of the nav so "Get started free" is the
            only button up there. The free tools are still reachable through the
            Tools link.
          </li>
          <li>
            Made the headline smaller, black, and two lines long. It still reads
            first, but it no longer dominates.
          </li>
          <li>
            Kept the paragraph but narrowed it, so the lines are shorter and
            easier to follow.
          </li>
          <li>
            Made "Start Answering Reviews" the solid green button and turned
            "Watch It Write a Reply" into a quiet outline. One main action, one
            backup.
          </li>
          <li>
            Dropped the "Now live" badge and the small line under the buttons.
            The free, no-card promise is already in the button text and shows up
            again lower down.
          </li>
          <li>
            Moved the hero to the same light background as the rest of the page,
            so it reads as the start of the page and not a banner you scroll
            past.
          </li>
        </UL>

        <H3>Why the video moved up</H3>
        <P>
          On the old page the demo video was the next section down, and the
          "Watch It Write a Reply" button just scrolled you to it. That means
          the fastest way to understand the product was behind an extra scroll
          and an extra click. I put the video directly under the buttons. Now
          the first screen has a headline that says what it is, a button to
          start, and a video that shows it working, without scrolling.
        </P>

        <Figure
          src={typaniDemoVideoOld}
          alt="Old demo video section"
          caption="The old demo video section, a full screen below the hero."
        />
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="From a paragraph to a picture" toc="How it works">
        <P>
          The old "how it works" was three numbered circles over three short
          paragraphs, all centered. Centered text in narrow columns wraps
          unevenly, so the lines came out in different lengths and the eye had
          no starting point. And it was all text. "Connect your profile", "a
          reply appears" and "approve it" are things you can show a visitor in a
          second.
        </P>

        <Pair
          before={typaniHowItWorksOld}
          after={howItWorksCards}
          alt="How it works"
          beforeCaption="Original. Three numbers and three paragraphs."
          afterCaption="Redesigned. Each step shows what you'd actually see."
        />

        <UL className="list-decimal">
          <li>
            Each step is now a card with a small picture of the real screen: the
            connect button on a business profile, a review with a reply already
            under it, and a reply with an Approve button and a cursor about to
            click it.
          </li>
          <li>
            Read left to right, the three pictures tell the whole story with no
            reading at all. Connect, the reply appears, you tap approve.
          </li>
          <li>
            The text moved under the pictures and is left-aligned, so every line
            starts in the same place and wraps cleanly.
          </li>
          <li>
            The cards are dark green, which gives the section a clear start and
            end and makes the white screens inside stand out.
          </li>
          <li>
            I removed the line at the bottom about staying manual. It offered a
            second path in the middle of explaining the first one.
          </li>
        </UL>
        <P>
          People skim. A picture of a button that says Approve gets understood
          faster than a sentence telling you that you can approve.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="Four sections that said one thing" toc="Features">
        <P>
          This was the biggest cleanup. The old page had four sections back to
          back: "The 9pm one-star, handled", "Three hours of replies, done over
          one coffee", "Autopilot with a steering wheel" and "What a reply
          actually looks like". Each was a full-width block with a headline, a
          paragraph and one big number, switching between dark and light. Four
          screens of scrolling, and not one picture of the product.
        </P>
        <P>
          They're all answers to the same question: why should I let software
          write my replies? So I grouped them into one bento block. The wide
          card on top is the emotional one, a bad review answered calmly. Then
          two number cards side by side, then a wide card for the last stat.
          Every card leads with a visual and has short text under it.
        </P>

        <H3>The 9pm card</H3>
        <P>
          This had the longest paragraph and the best story, so it gets the
          widest card. It now shows a stack of reviews with Typani's replies
          under them, and a banner that says what Typani does with them.
        </P>
        <Pair
          before={ninePmOneStartOld}
          after={ninePM1Star_bento}
          alt="The 9pm one-star card"
          beforeCaption="Original. Headline, paragraph, and a small reply example."
          afterCaption="Redesigned. The reviews and replies are the picture."
        />

        <H3>The 6 seconds and 89% cards</H3>
        <P>
          These two were mostly a number with a sentence of explanation. Numbers
          are quick to read, so they became the visual. Big number, one line
          under it, nothing extra.
        </P>
        <div className="flex flex-col gap-10">
          <Figure
            src={typaniSixSecondsBentoOld}
            alt="Old 6 seconds section"
            caption="Original: three hours of replies."
          />
          <Figure
            src={sixSeconds_bento}
            alt="New 6 seconds and 89% cards"
            caption="Redesigned. Two cards side by side, each built around its number."
          />
          <Figure
            src={typaniAutoPilotOld}
            alt="Old autopilot section"
            caption="Original: autopilot with a steering wheel."
          />
          <Figure
            src={autoPilot_new}
            alt="new"
            caption="Redesigned: autopilot card"
          />
        </div>

        <H3>The 12% card</H3>
        <P>
          The old version put a stat in a dark box next to a sample reply. In
          the new one the 12% sits inside a pattern of lines that rise like a
          wave, which says "going up" before you read a word.
        </P>
        <Pair
          before={typaniReplyLooksLikeOld}
          after={howReplyLooksLike_bento}
          alt="The 12% card"
          beforeCaption="Original."
          afterCaption="Redesigned."
        />

        <H3>Together</H3>
        <Figure
          src={typaniDesktop2}
          alt="The full bento block"
          caption="The bento block as one piece."
        />
        <UL className="list-decimal">
          <li>
            Four sections became one block, so the page is much shorter in the
            middle.
          </li>
          <li>
            The numbers are now the pictures, so you can take them in at a
            glance.
          </li>
          <li>
            I wrote a short animation note for each card for the developers. The
            reviews on the first card are meant to drift past slowly, and the
            lines on the 12% card to move like a wave. Slow and quiet, so they
            never compete with the sign-up button.
          </li>
          <li>
            The old first section also had a 5 to 9% revenue stat. I left it
            out. Three numbers are enough, and that one needed a bigger claim
            than the others.
          </li>
        </UL>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="Making the demo look like a tool" toc="Live demo">
        <P>
          This section was already a good idea. A visitor pastes in a review and
          watches a reply get written, with no signup. It's the best proof on
          the page. The problem was how it looked: a white card on a light page,
          with nothing to tell you that this part is interactive, and nowhere
          that showed where the answer would go.
        </P>

        <Pair
          before={typaniSeeInActionDemoOld}
          after={typaniSeeInActionDemoNew}
          alt="Live demo"
          beforeCaption="Original. The card barely separates from the page."
          afterCaption="Redesigned. A clear panel, with a place for the result."
        />

        <UL className="list-decimal">
          <li>
            Put the whole tool on a gray panel with a border, so it stands out
            from the page and looks like something you use, not more text.
          </li>
          <li>
            Split it into two sides. Your review goes on the left, and the
            result lands in a dashed box on the right that says where the answer
            will show up.
          </li>
          <li>
            Input and output sit side by side, so you never scroll to see what
            happened after you clicked.
          </li>
          <li>Kept one button, and kept FREE in its label.</li>
        </UL>
        <P>
          The faster someone can tell what a section is for, the faster they use
          it. A visitor who tries the demo has seen the product work, and that's
          the point where they're most likely to sign up.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="The section I took out" toc="Removed section">
        <P>
          There was a block called "Typani at a glance" between the demo and the
          pricing. It had four one-line facts, a box comparing Typani's price
          with Podium and Birdeye, and two lists: who Typani is for and who it's
          not for. I deleted it. My reasons:
        </P>
        <UL className="list-decimal">
          <li>
            Everything in it was already said above or shown right below in the
            pricing. A visitor who just used the demo and is about to see the
            plans doesn't need to read the same facts a third time.
          </li>
          <li>
            It reads like it was written for a search engine or an AI assistant
            to quote, with flat sentences like "Typani does this. Typani has
            that." It isn't written for a person who is deciding.
          </li>
          <li>
            It linked to Podium's and Birdeye's pricing pages. Sending a visitor
            to a competitor's price page right before your own pricing works
            against the whole page.
          </li>
          <li>
            "Who it's not for" gave people a reason to leave at the exact moment
            they were about to choose a plan.
          </li>
        </UL>
        <P>
          If that block is there to help with search ranking, it still has a
          place, just not on the landing page. A comparison page or a blog post
          would carry it better, and it wouldn't sit in the way of the path to
          signing up.
        </P>

        <Figure
          src={typaniAtAGlanceOld}
          alt="Old Typani at a glance section"
          caption="The removed section."
        />
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="Pointing at the right plan" toc="Pricing choice">
        <P>
          On the old pricing, all three cards had about the same weight. The Pro
          card had a green outline and a small "Best value" tag, but the Starter
          card had the same green button, and the Free and Starter lists were
          nearly identical. A visitor had to read all three lists line by line
          to work out the difference.
        </P>

        <Pair
          before={typaniPricingOld}
          after={pricing_Cards}
          alt="Pricing"
          beforeCaption="Original. Three cards of similar weight."
          afterCaption="Redesigned. One card stands out."
        />

        <UL className="list-decimal">
          <li>
            Pro is the only colored card, and its button is black, the highest
            contrast on the page. The eye goes there first.
          </li>
          <li>
            The other two cards fall back to gray with plain white buttons, so
            they read as options and not as equals.
          </li>
          <li>
            The small "Best value" tag is gone, because the color already says
            it.
          </li>
          <li>
            The monthly and annual switch stays above the cards, where people
            look for it. The plans and prices are the same as before.
          </li>
        </UL>
        <P>
          Why Pro? It's the plan where the page's promise comes true. The
          headline says "answered while you run the business", and only Pro
          posts replies automatically. On the other two plans the owner still
          taps approve each time. Pointing people to Pro makes sense because
          it's the plan that does what the headline says.
        </P>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="Closed questions" toc="Closed FAQ">
        <P>
          The old FAQ had every answer open at once. That's a lot of vertical
          space for questions most people don't have, and it buried the
          questions themselves. Someone looking for "does it work for multiple
          locations?" had to scroll through everything else to find it.
        </P>

        <Pair
          before={faqOld}
          after={faq_new}
          alt="FAQ"
          beforeCaption="Original. Every answer open."
          afterCaption="Redesigned. A short list, with the first one open. The FAQ is the lower part of this frame."
        />

        <UL className="list-decimal">
          <li>
            Closed every answer, so the whole list of questions fits on one
            screen and can be scanned.
          </li>
          <li>
            Left the first one open. "How is this different from ChatGPT?" is
            the question most visitors already have in their head, so it's
            answered before they even look for it.
          </li>
          <li>
            The open first item also shows people how the list works, so they
            know to click the others.
          </li>
        </UL>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="The ending" toc="Closing">
        <P>
          The old page ended with a dark block: a centered headline, a line of
          text, one button, and then the footer on the same dark background with
          five columns of links squeezed in. The headline is good. "You didn't
          open a business to write review replies at 11pm" is the best line on
          the page. But it was easy to miss in a block that looked like the
          footer.
        </P>

        <Pair
          before={typaniFooterOld}
          after={footer_new}
          alt="Closing call and footer"
          beforeCaption="Original. The call to action and the footer run together."
          afterCaption="Redesigned. A separate closing section, then a footer. The closing section and footer are the lower part of this frame."
        />

        <UL className="list-decimal">
          <li>
            Gave the closing call its own section on the light background, with
            the headline and button on the left.
          </li>
          <li>
            Added a photo on the right of an owner relaxing with his phone. The
            headline is about not working at 11pm, so the photo shows the
            opposite of the problem.
          </li>
          <li>
            Made the footer a separate dark block, so the page has a clear end.
          </li>
          <li>
            Cut the footer from five columns to four by putting Legal under
            Industries, which also evens out the column heights. Moved the
            social icons under the tagline.
          </li>
          <li>
            Added a large Typani wordmark at the bottom, so the last thing
            someone sees is the name.
          </li>
        </UL>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="The whole page" toc="Full page">
        <P>
          Here's the redesign start to end. The frames overlap a little where
          one ends and the next begins.
        </P>
        <Grid cols={2}>
          <Figure
            src={typaniDesktop1}
            alt="Top of the page"
            caption="Top bar, hero, how it works."
          />
          <Figure
            src={typaniDesktop2}
            alt="Features and live demo"
            caption="Bento block and the start of the live demo."
          />
          <Figure
            src={typaniDesktop3}
            alt="Demo, pricing, FAQ"
            caption="Live demo, pricing and the first FAQ items."
          />
          <Figure
            src={typaniDesktop4}
            alt="FAQ, closing section, footer"
            caption="The rest of the FAQ, closing section and footer."
          />
        </Grid>
      </Section>

      {/* ------------------------------------------------------------ */}
      <Section title="What I can't say yet" toc="Limits">
        <P>
          This is a concept. I haven't tested it and I don't have Typani's
          analytics, so I can't say it converts better. What I can say is why I
          think it should, and what I'd measure to find out:
        </P>
        <UL className="list-decimal">
          <li>
            How many people click the main button in the hero, compared with the
            old page.
          </li>
          <li>How many press play on the video, and how far they watch.</li>
          <li>
            How many use the live demo, and how many of those go on to sign up.
          </li>
          <li>Which plan people click in the pricing section.</li>
          <li>
            How far down the page people get before they leave. I'd hope for
            fewer drop-offs in the middle.
          </li>
        </UL>
        <P>
          If I ran it as an A/B test, I'd start with the top of the page. Most
          visitors never get further than that, and it's where the old and new
          versions differ the most.
        </P>
        <P>
          One thing I'd fix before showing it to anyone: the video thumbnail is
          a stand-in with the logo on it. I'd replace it with a real frame from
          the demo. A true screenshot of the product tells people more than a
          logo does.
        </P>
      </Section>
    </CaseStudyLayout>
  );
}
