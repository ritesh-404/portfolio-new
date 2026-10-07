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
import { SectionHeading } from "../ui/SectionHeading";

const pairs = [
  { old: hyperProbeOld1, next: hyperProbeNew1 },
  { old: typaniOld, next: typaniNew },
  { old: temporalOld, next: temporalNew },
  { old: byteAskOld, next: byteAskNew },
  { old: openSEOOld, next: openSEONew },
  { old: threadOtterOld, next: threadOtterNew },
  { old: tolgeeOld, next: tolgeeNew },
];

export default function ImageGridSection() {
  return (
    <section className="w-full">
      <div className="mb-10">
        <SectionHeading className="mb-0">
          ( ¬_¬ ) Hero section explorations...
        </SectionHeading>
      </div>

      {/* One row per pair — old | new */}
      <div className="flex w-full flex-col gap-4">
        {pairs.map((pair, index) => (
          <div
            key={index}
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="border border-gray-200 p-4">
              <img
                src={pair.old}
                alt="Original"
                draggable="false"
                className="block h-auto w-full object-contain"
              />
            </div>
            <div className="border border-gray-200 p-4">
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
    </section>
  );
}
