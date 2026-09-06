import { Link } from "wouter";

export default function BackLinkBtn() {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border transition-all duration-300 ease-out`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
      >
        <path
          d="M9 14L5 10L9 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 10H16C17.0609 10 18.0783 10.4214 18.8284 11.1716C19.5786 11.9217 20 12.9391 20 14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="tracking-wide uppercase text-sm font-medium">Back</span>
    </Link>
  );
}
