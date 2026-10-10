import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const openCal = () => {
  window.location.href = "https://cal.com/ritesh-n/15min?overlayCalendar=true";
};

// type: "scroll" → scrolls to a section id on the homepage
// type: "route"  → a real wouter route
const NAV_LINKS = [
  { label: "Home", type: "route", href: "/" },
  // { label: "Services", type: "route", href: "/services" },
  { label: "FAQs", type: "scroll", href: "faqs" },
  { label: "Case studies", type: "route", href: "/portfolio" },
];

const SOCIAL_LINKS = [
  {
    label: "Twitter (X)",
    href: "https://twitter.com",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    external: true,
  },
  {
    label: "Github",
    href: "https://github.com/ritesh-404",
    external: true,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [location, navigate] = useLocation();

  // Handle Home click
  const handleHomeClick = (event) => {
    event.preventDefault();
    setOpen(false);

    // Already on the homepage → smoothly scroll to top
    if (location === "/" || location === "/home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Coming from another route → go home
    navigate("/");

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    });
  };

  // Handles "scroll" type links:
  // Scrolls directly if already on "/", otherwise navigates home first.
  const handleScrollLink = (event, targetId) => {
    event.preventDefault();
    setOpen(false);

    const isHome = location === "/";

    if (isHome) {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    navigate(`/?scroll=${targetId}`);
  };

  // On the homepage, scroll to the requested section after navigation.
  useEffect(() => {
    if (location !== "/") return;

    const params = new URLSearchParams(window.location.search);
    const scrollTarget = params.get("scroll");

    if (!scrollTarget) return;

    const el = document.getElementById(scrollTarget);

    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location]);

  const renderNavLink = (link, className) => {
    if (link.type === "route") {
      return (
        <Link
          key={link.label}
          href={link.href}
          onClick={
            link.label === "Home" ? handleHomeClick : () => setOpen(false)
          }
          className={className}
        >
          {link.label}
        </Link>
      );
    }

    // type === "scroll"
    return (
      <a
        key={link.label}
        href={`#${link.href}`}
        onClick={(event) => handleScrollLink(event, link.href)}
        className={className}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full overflow-x-clip border-b border-gray-200 bg-white font-mono text-sm tracking-tight">
      <nav className="mx-auto flex w-full max-w-[1380px] items-center justify-between px-8 py-4 md:px-16">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className="shrink-0 text-black lg:hidden"
        >
          Ritesh.
        </Link>

        {/* Desktop: left group */}
        <div className="group hidden items-center gap-4 lg:flex lg:gap-8">
          {NAV_LINKS.map((link) =>
            renderNavLink(
              link,
              "text-black transition-colors duration-200 group-hover:text-gray-400 hover:!text-black",
            ),
          )}

          {/* <SwipeFilePill href="/swipe-file" /> */}
        </div>

        {/* Desktop: right group */}
        <div className="group hidden items-center gap-4 lg:flex lg:gap-8">
          <a
            onClick={openCal}
            className="cursor-pointer text-black transition-colors duration-200 group-hover:text-gray-400 hover:!text-black"
          >
            [ Get in touch ]
          </a>

          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-black transition-colors duration-200 group-hover:text-gray-400 hover:!text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gray-200 transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 py-6 sm:px-6">
          {NAV_LINKS.map((link) => renderNavLink(link, "text-black"))}

          {/* <SwipeFilePill href="/swipe-file" className="self-start" /> */}

          <div className="mt-10 flex flex-col gap-6">
            <a
              onClick={() => {
                setOpen(false);
                openCal();
              }}
              className="cursor-pointer text-black"
            >
              [ Get in touch ]
            </a>

            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

// const SwipeFilePill = ({ href, className = "" }) => (
//   <Link href={href} className={`group/pill inline-block ${className}`}>
//     <span
//       className="block rounded-full px-2 py-1"
//       style={{
//         border: "1px solid transparent",
//         backgroundImage: "linear-gradient(white, white), var(--gradient-brand)",
//         backgroundOrigin: "border-box",
//         backgroundClip: "padding-box, border-box",
//       }}
//     >
//       <span
//         className="text-black transition-colors duration-200 group-hover/pill:text-transparent"
//         style={{
//           backgroundImage: "var(--gradient-brand)",
//           WebkitBackgroundClip: "text",
//           backgroundClip: "text",
//         }}
//       >
//         Swipe file
//       </span>
//     </span>
//   </Link>
// );

export default Navbar;
