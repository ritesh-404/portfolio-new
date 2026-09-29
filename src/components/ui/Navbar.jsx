// components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const openCal = () => {
  window.location.href = "https://cal.com/ritesh-n/15min?overlayCalendar=true";
};

// type: "scroll" → scrolls to a section id on the homepage (navigates home first if elsewhere)
// type: "route"  → a real wouter route
const NAV_LINKS = [
  { label: "Home", type: "route", href: "/" },
  // { label: "Services", type: "route", href: "/services" },
  { label: "About", type: "route", href: "/about" },
  { label: "FAQs", type: "scroll", href: "faqs" },
];

const SOCIAL_LINKS = [
  { label: "Twitter (X)", href: "https://twitter.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!mediaQuery.matches) {
        setShowNavbar(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleViewportChange = () => {
      if (!mediaQuery.matches) {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  // Handles "scroll" type links: scrolls directly if already on "/", otherwise
  // navigates home first and scrolls once the section exists in the DOM.
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

  // On the homepage, if arriving via /?scroll=faqs, scroll to that section once mounted.
  useEffect(() => {
    if (location !== "/") return;

    const params = new URLSearchParams(window.location.search);
    const scrollTarget = params.get("scroll");
    if (!scrollTarget) return;

    const el = document.getElementById(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  const renderNavLink = (link, className) => {
    if (link.type === "route") {
      return (
        <Link
          key={link.label}
          href={link.href}
          onClick={() => setOpen(false)}
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
    <header
      className={`sticky top-0 left-0 z-50 w-full overflow-x-clip border-b border-gray-200 bg-white font-mono text-sm tracking-tight transition-transform duration-300 ease-out ${
        showNavbar ? "lg:translate-y-0" : "lg:-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1380px] items-center justify-between px-8 md:px-16 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
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
          <SwipeFilePill href="/swipe-file" />
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
          <SwipeFilePill href="/swipe-file" className="self-start" />

          <div className="mt-10 flex flex-col gap-6">
            <a onClick={openCal} className="cursor-pointer text-black">
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

const SwipeFilePill = ({ href, className = "" }) => (
  <Link href={href} className={`group/pill inline-block ${className}`}>
    <span
      className="block rounded-full px-2 py-1"
      style={{
        border: "1px solid transparent",
        backgroundImage: "linear-gradient(white, white), var(--gradient-brand)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <span
        className="text-black transition-colors duration-200 group-hover/pill:text-transparent"
        style={{
          backgroundImage: "var(--gradient-brand)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        Swipe file
      </span>
    </span>
  </Link>
);

export default Navbar;
