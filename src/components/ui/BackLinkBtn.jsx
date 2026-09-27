import { Link } from "wouter";

export default function BackLinkBtn() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-sm border border-white/80 px-3 py-2 font-mono text-xs uppercase tracking-[0.08em] text-white transition-all duration-200 ease-out hover:border-white hover:bg-white hover:text-black"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
      >
        <path
          d="M19 12H5M5 12L11 6M5 12L11 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>Back</span>
    </Link>
  );
}
