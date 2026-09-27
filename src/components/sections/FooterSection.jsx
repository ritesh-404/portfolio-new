import { useRef, useState } from "react";
import Button from "../ui/Button";
import ritesh1 from "../../assets/mypics/ritesh-1.png";
import ritesh2 from "../../assets/mypics/ritesh-2.png";
import ritesh3 from "../../assets/mypics/ritesh-3.png";
import ritesh4 from "../../assets/mypics/ritesh-4.png";
import ritesh5 from "../../assets/mypics/ritesh-5.png";

const openCal = () => {
  window.location.href = "https://cal.com/ritesh-n/15min?overlayCalendar=true";
};

const PHOTOS = [ritesh1, ritesh2, ritesh3, ritesh4, ritesh5];

// One note per image, spanning a C major scale
const NOTES = [261.63, 293.66, 329.63, 349.23, 392.0]; // C4 D4 E4 F4 G4

export default function FooterSection() {
  const audioCtxRef = useRef(null);
  const [pressedIndex, setPressedIndex] = useState(null);

  const playPianoNote = (freq) => {
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.3, now + 0.01);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
    masterGain.connect(ctx.destination);

    // Layer a few harmonics for a warmer, more piano-like timbre
    const harmonics = [
      { mult: 1, gain: 1, type: "triangle" },
      { mult: 2, gain: 0.25, type: "sine" },
      { mult: 3, gain: 0.1, type: "sine" },
    ];

    harmonics.forEach(({ mult, gain, type }) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq * mult, now);
      oscGain.gain.setValueAtTime(gain, now);
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 1.4);
    });
  };

  const handlePress = (i) => {
    playPianoNote(NOTES[i % NOTES.length]);
    setPressedIndex(i);
    setTimeout(
      () => setPressedIndex((curr) => (curr === i ? null : curr)),
      120,
    );
  };

  return (
    <footer className="sticky bottom-0 z-0 flex min-h-[100vh] w-full flex-col items-center justify-between gap-8 bg-black px-5 py-24 text-white sm:px-6 md:px-8 lg:px-10">
      <div className="flex w-full flex-col items-center justify-center gap-7 text-center">
        <p className="font-inter text-2xl font-medium md:text-3xl">
          Still have any questions?
        </p>

        <Button
          variant="secondary"
          badge="P"
          padding="px-4 py-3"
          onClick={openCal}
          className="!bg-white !text-black !ring-white/70 hover:!bg-gray-100 !rounded-full"
        >
          Book a 15-min call
        </Button>
      </div>

      <div className="flex md:flex-row flex-col items-end justify-center gap-2 sm:gap-3 md:gap-4">
        {PHOTOS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Ritesh ${i + 1}`}
            onPointerDown={() => handlePress(i)}
            className={`md:w-40 w-20 cursor-pointer object-cover transition-transform duration-100 ease-out ${
              pressedIndex === i ? "scale-90" : "scale-100"
            }`}
            style={{ touchAction: "manipulation" }}
          />
        ))}
      </div>
    </footer>
  );
}
