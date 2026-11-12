import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Button from "./Button";

const links = [
  { label: "HOME", type: "home", href: "/" },
  { label: "ABOUT", type: "scroll", href: "aboutSection" },
  { label: "WORK", type: "scroll", href: "heroSection" },
  { label: "RESUME", type: "file", href: "/ritesh_resume.pdf" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location, navigate] = useLocation();

  const handleHomeClick = (event) => {
    event.preventDefault();
    setOpen(false);

    if (location === "/" || location === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
    window.requestAnimationFrame(() =>
      window.scrollTo({ top: 0, behavior: "auto" }),
    );
  };

  const handleScrollLink = (event, targetId) => {
    event.preventDefault();
    setOpen(false);

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
      window.requestAnimationFrame(() =>
        document
          .getElementById(target)
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  }, [location]);

  const renderLink = (link) => {
    const className =
      "cursor-pointer text-base leading-[1.45] text-black no-underline transition-colors duration-200 hover:text-neutral-500";

    const onClick =
      link.type === "home"
        ? handleHomeClick
        : link.type === "scroll"
          ? (event) => handleScrollLink(event, link.href)
          : undefined;

    return (
      <a
        key={link.label}
        href={link.type === "scroll" ? `#${link.href}` : link.href}
        onClick={onClick}
        className={className}
      >
        {link.label}
      </a>
    );
  };

  const getInTouch = (className) => (
    <Button
      href="/#footerSection"
      onClick={(event) => handleScrollLink(event, "footerSection")}
      className={className}
    >
      Get in touch
    </Button>
  );

  return (
    <header className="sticky top-9 z-50 mx-auto mt-9 w-full max-w-[1040px] px-3 sm:px-6 lg:px-10 xl:px-0">
      <nav
        className="relative mx-auto flex h-12 w-fit items-center gap-2 max-md:w-full max-md:justify-between"
        aria-label="Main navigation"
      >
        <button
          type="button"
          className="h-12 cursor-pointer border border-neutral-950 bg-white px-4 text-base leading-[1.45] text-black transition-colors duration-200 hover:bg-neutral-100 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "CLOSE" : "MENU"}
        </button>

        <div className="flex h-12 items-center justify-center gap-[clamp(1rem,3vw,2.5rem)] border border-neutral-950 bg-white px-[clamp(1rem,2.5vw,2rem)] max-md:hidden">
          {links.map(renderLink)}
        </div>

        <div className="hidden md:block">
          {getInTouch(
            "h-12 min-h-12 border border-black px-5 py-0 text-xl leading-[1.45]",
          )}
        </div>

        <div className="md:hidden">
          {getInTouch(
            "h-12 min-h-12 border border-black px-4 py-0 text-base leading-[1.45]",
          )}
        </div>

        {open && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-14 flex flex-col gap-4 border border-neutral-950 bg-white p-4 md:hidden"
          >
            {links.map(renderLink)}
          </div>
        )}
      </nav>
    </header>
  );
}
