export default function StripedDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-20 border-y border-dashed border-pink bg-[repeating-linear-gradient(-45deg,rgba(255,158,158,0.25),rgba(255,158,158,0.25)_2px,transparent_2px,transparent_8px)]"
    />
  );
}
