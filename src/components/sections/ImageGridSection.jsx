import {
  byteAskOld,
  byteAskNew,
  openSEOOld,
  openSEONew,
  temporalOld,
  temporalNew,
  threadOtterOld,
  threadOtterNew,
  tolgeeOld,
  tolgeeNew,
  typaniOld,
  typaniNew,
  hyperProbeNew1,
  hyperProbeOld1,
} from "../../assets/redesigns";

import {
  byteAskNew_new,
  openSEONew_new,
  temporalNew_new,
  threadOtterNew_new,
  tolgeeNew_new,
  typaniNew_new,
  hyperProbeNew1_new,
} from "../../assets/redesigns/only-new";

import { SectionHeading } from "../ui/SectionHeading";

const newImgages = [
  byteAskNew_new,
  openSEONew_new,
  temporalNew_new,
  threadOtterNew_new,
  tolgeeNew_new,
  typaniNew_new,
  hyperProbeNew1_new,
];

const pairs = [
  { old: typaniOld, next: typaniNew },
  { old: byteAskOld, next: byteAskNew },
  { old: openSEOOld, next: openSEONew },
  { old: hyperProbeOld1, next: hyperProbeNew1 },
  { old: threadOtterOld, next: threadOtterNew },
  { old: tolgeeOld, next: tolgeeNew },
  { old: temporalOld, next: temporalNew },
];

export default function ImageGridSection() {
  return (
    <section className="w-full">
      <div className="mb-10">
        <SectionHeading className="mb-0">[ Hero section ]</SectionHeading>
      </div>

      {/* New redesign images only — 1 column mobile, 2 columns desktop */}
      <div className="grid w-full grid-cols-1 gap-8">
        {newImgages.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Redesign ${index + 1}`}
              draggable="false"
              className="block h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/*
        FUTURE: Old vs. new comparison layout
        Uncomment this block and comment out the grid above
        when you want to restore the side-by-side comparisons.

        <div className="flex w-full flex-col gap-16">
          {pairs.map((pair, index) => (
            <div
              key={index}
              className="grid w-full grid-cols-1 gap-4
                         border border-gray-300
                         bg-gray-50/30 p-5 md:grid-cols-2"
            >
              <div>
                <img
                  src={pair.old}
                  alt="Original design"
                  draggable="false"
                  className="block h-auto w-full object-contain"
                />
              </div>

              <div>
                <img
                  src={pair.next}
                  alt="Redesign"
                  draggable="false"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      */}
    </section>
  );
}
