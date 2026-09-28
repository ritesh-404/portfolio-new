import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

import Button from "./Button";

const openCal = () => {
  window.location.href = "https://cal.com/ritesh-n/15min?overlayCalendar=true";
};

const NAV_LINKS = [
  // { label: "Writings", href: "#writings" },
  { label: "FAQs", href: "#faqs" },
  // { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const [location, navigate] = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Do nothing on mobile
      if (!mediaQuery.matches) {
        setShowNavbar(true);
        return;
      }

      const currentScrollY = window.scrollY;

      // Always show at the top
      if (currentScrollY <= 0) {
        setShowNavbar(true);
      }
      // Scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // Scrolling up
      else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleViewportChange = () => {
      // When switching to mobile, make sure navbar is visible
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

  const handleNavClick = (event, href) => {
    event.preventDefault();

    setOpen(false);

    const targetId = href.replace("#", "");

    const isHome = location === "/" || location === "/home";

    // On homepage → smooth scroll directly
    if (isHome) {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    // On case study → go home first
    navigate(`/?scroll=${targetId}`);
  };

  return (
    <header
      className={`sticky top-0 left-0 z-50 w-full overflow-x-clip border-b border-gray-200 bg-white font-inter transition-transform duration-300 ease-out ${
        showNavbar ? "md:translate-y-0" : "md:-translate-y-full"
      }`}
    >
      <nav className="mx-auto box-border flex w-full max-w-[1224px] items-center justify-between px-12 py-2 sm:px-6 md:px-0 py-4">
        {/* Logo */}
        <a
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 text-lg font-medium text-gray-900"
        >
          Ritesh.
        </a>

        {/* Desktop links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex xl:gap-10">
          {NAV_LINKS.map((link) => (
            // <Link
            //   key={link.label}
            //   href={link.href}
            //   // onClick={(event) => handleNavClick(event, link.href)}
            //   className="text-[14px] font-inter text-gray-700 underline underline-offset-3 transition-colors hover:text-gray-900"
            // >
            //   {link.label}
            // </Link>
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-[14px] font-inter text-gray-700 underline underline-offset-3 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 md:block">
          <Button badge="P" badgePadding="px-3 py-1.5" onClick={openCal}>
            Start a project
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gray-200 transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-12 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="block py-2 text-[14px] font-medium tracking-wide text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="pt-2">
            <Button
              variant="primary"
              badge="P"
              className="w-full"
              onClick={openCal}
            >
              Start a project
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
