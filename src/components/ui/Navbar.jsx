import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Button from "./Button";

const links = [
  { label: "HOME", type: "home", href: "/" },
  { label: "ABOUT", type: "scroll", href: "aboutSection" },
  { label: "WORK", type: "scroll", href: "workSection" },
  { label: "RESUME", type: "file", href: "/ritesh_resume.pdf" },
];

export default function Navbar() {
  const [location, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location === "/" || location === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  };

  const handleScrollLink = (event, targetId) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location === "/") {
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/?scroll=${targetId}`);
    }
  };

  useEffect(() => {
    if (location !== "/") return;

    const target = new URLSearchParams(window.location.search).get("scroll");

    if (target) {
      window.requestAnimationFrame(() => {
        document
          .getElementById(target)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location]);

  const renderLink = (link) => {
    const onClick =
      link.type === "home"
        ? handleHomeClick
        : link.type === "scroll"
          ? (event) => handleScrollLink(event, link.href)
          : () => setMenuOpen(false);

    return (
      <a
        key={link.label}
        href={link.type === "scroll" ? `#${link.href}` : link.href}
        onClick={onClick}
        className="cursor-pointer whitespace-nowrap text-base leading-[1.45] text-neutral-950 no-underline transition-colors duration-200 hover:text-neutral-500"
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="site-header sticky top-0 z-50 pt-4">
      <nav className="relative flex w-full flex-col md:flex-row md:flex-wrap items-center justify-between md:gap-4 border border-neutral-950 bg-white px-2 py-2 md:pl-4 md:pr-2">
        {/* Desktop navigation — unchanged */}
        <div className="hidden flex-wrap items-center gap-[clamp(16px,3vw,32px)] md:flex">
          {links.map(renderLink)}
        </div>

        {/* Get in touch + mobile menu */}
        <div className="flex w-full items-center justify-between gap-2 md:w-auto">
          <div className="flex-1 md:flex-initial">
            <Button
              href="/#footerSection"
              onClick={(event) => handleScrollLink(event, "footerSection")}
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Mobile three-dot menu */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-12 w-10 shrink-0 items-center justify-center border border-neutral-950 bg-white text-2xl leading-none text-neutral-950 transition-all duration-150 active:scale-[0.98] md:hidden"
          >
            ⋮
          </button>
        </div>

        {/* Mobile expanding menu with smooth transition */}
        <div
          className={`grid w-full transition-all duration-200 ease-out md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100 pt-3 pb-1"
              : "grid-rows-[0fr] opacity-0 pt-0 pb-0"
          }`}
        >
          <div className="overflow-hidden flex flex-col gap-4">
            {links.map(renderLink)}
          </div>
        </div>
      </nav>
    </header>
  );
}
