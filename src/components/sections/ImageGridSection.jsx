import {
  byteAskNew,
  byteAskOld,
  openSEONew,
  openSEOOld,
  temporalNew,
  temporalOld,
  threadOtterNew,
  threadOtterOld,
  typaniOld,
  typaniNew,
  hyperProbeNew1,
  hyperProbeOld1,
} from "../../assets/redesigns";

import { SectionHeading } from "../ui/SectionHeading";

const pairs = [
  { old: byteAskOld, next: byteAskNew, bordered: true },
  { old: openSEOOld, next: openSEONew, bordered: true },
  { old: hyperProbeOld1, next: hyperProbeNew1, bordered: false },
  { old: threadOtterOld, next: threadOtterNew, bordered: false },
  { old: temporalOld, next: temporalNew, bordered: false },
  { old: typaniOld, next: typaniNew, bordered: true },
];

/* ---------- before / after side by side ---------- */

function BeforeAfterPair({ oldImg, newImg, index, bordered }) {
  const imgBorder = bordered ? "border border-black/20" : "";

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="rounded-2xl border bg-gray-50 border-black/20 p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* before */}
          <img
            src={oldImg}
            alt={`Redesign ${index + 1} — before`}
            draggable="false"
            className={`block h-auto w-full object-contain ${imgBorder}`}
          />

          {/* after */}
          <img
            src={newImg}
            alt={`Redesign ${index + 1} — after`}
            draggable="false"
            className={`block h-auto w-full object-contain ${imgBorder}`}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- section ---------- */

export default function ImageGridSection() {
  return (
    <section className="w-full">
      <div className="mb-10">
        <SectionHeading className="mb-0">[ Hero section ]</SectionHeading>
      </div>

      <div className="grid w-full grid-cols-1 gap-6">
        {pairs.map((pair, index) => (
          <BeforeAfterPair
            key={index}
            oldImg={pair.old}
            newImg={pair.next}
            index={index}
            bordered={pair.bordered}
          />
        ))}
      </div>
    </section>
  );
}
