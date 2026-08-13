export default function Pill({ label, href }) {
  return (
    <a
      target="_blank"
      href={href}
      className="inline-flex items-center justify-center rounded-full px-9 py-1 bg-border-bg transition-all duration-300 ease-in-out text-muted-light border border-border-dark hover:border-border-default hover:text-primary text-md"
    >
      {label}
    </a>
  );
}
