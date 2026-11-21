import { useCallback, useEffect, useRef, useState } from "react";

import CaseStudyLayout from "../../components/case-study/CaseStudyLayout";
import { Section, P, UL } from "../../components/case-study/blocks";
import prototypeHtml from "../../experiments/batch-selection-prototype-v4.html?raw";

function PrototypeFrame() {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(900);

  const syncHeight = useCallback(() => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;

    const next = Math.max(
      doc.documentElement.scrollHeight,
      doc.body?.scrollHeight ?? 0,
    );

    setHeight((prev) => (Math.abs(prev - next) > 1 ? next : prev));
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let observer;

    const handleLoad = () => {
      syncHeight();

      const doc = iframe.contentDocument;
      if (doc?.documentElement && "ResizeObserver" in window) {
        observer?.disconnect();
        observer = new ResizeObserver(syncHeight);
        observer.observe(doc.documentElement);
      }
    };

    iframe.addEventListener("load", handleLoad);
    if (iframe.contentDocument?.readyState === "complete") handleLoad();

    window.addEventListener("resize", syncHeight);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", syncHeight);
      observer?.disconnect();
    };
  }, [syncHeight]);

  return (
    <iframe
      ref={iframeRef}
      title="Batch selection prototype"
      srcDoc={prototypeHtml}
      style={{ height }}
      className="w-full rounded-[10px] border-0 bg-white"
    />
  );
}

export default function BatchSelectionCaseStudy() {
  return (
    <CaseStudyLayout
      title="Batch selection prototype"
      overview="An interaction study exploring accessible batch selection, grouped options, and keyboard-friendly range selection."
      snapshot={[
        {
          label: "Type",
          text: "Self-initiated interaction prototype",
        },
        {
          label: "Focus",
          text: "Accessible multi-select, grouped options, and range selection",
        },
        {
          label: "Built with",
          text: "Vanilla HTML, CSS, and JavaScript",
        },
        {
          label: "Status",
          text: "Working prototype — try it below",
        },
      ]}
    >
      <Section title="The idea" toc="Overview">
        <P>
          Selecting many items at once is usually where interfaces get clumsy.
          Checkbox lists force one click per row, while drag selection ignores
          the keyboard entirely. This prototype explores a middle ground:
          grouped options, a clear selection model, and range selection that
          works with both pointer and keyboard input.
        </P>
        <P>
          It is a small, self-contained study rather than a client project. The
          goal was to make bulk selection feel predictable, accessible, and
          fast without adding visual noise.
        </P>
      </Section>

      <Section title="What it covers" toc="What it covers">
        <UL>
          <li>Click, shift-click, and keyboard range selection.</li>
          <li>Grouped options with clear selected, mixed, and disabled states.</li>
          <li>Touch-friendly selection with a live preview of the range.</li>
          <li>Accessible labels, focus handling, and reduced-motion support.</li>
        </UL>
      </Section>

      <Section title="Interactive prototype" toc="Prototype">
        <P>
          The prototype below is fully interactive. Try selecting a range with
          the mouse, then repeat it with the keyboard to compare the behaviour.
        </P>
        <PrototypeFrame />
      </Section>
    </CaseStudyLayout>
  );
}
