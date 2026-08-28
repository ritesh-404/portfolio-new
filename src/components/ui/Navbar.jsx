import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", targetId: "heroSection" },
    { label: "Work", targetId: "caseStudySection" },
    { label: "Process", targetId: "processSection" },
    { label: "Services", targetId: "serviceSection" },
    { label: "Contact me", targetId: "contactSection" },
    { label: "About me", targetId: "aboutSection" },
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    setIsOpen(false)

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      ref={menuRef}
      className="fixed lg:right-10 lg:top-10 z-50 flex flex-col px-5 py-3 rounded-md bg-[#f0f0f0]/80 saturate-[180%] backdrop-blur-[20px] border border-border transition-all duration-300 justify-between w-full lg:w-[300px]"
    >
      {/* Navbar Header Bar */}
      <div className="flex items-center justify-between w-full">

        <Button className="hidden md:inline-flex" onClick={(e) => handleScroll(e, "contactSection")}>Get in touch</Button>

        {/* Interactive Morphing Hamburger / Cross Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="p-1 cursor-pointer focus:outline-none ml-auto"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Line -> Morphs into first arm of "X" */}
            <path
              d="M 5.333 10.666 H 26.666"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              className={`transition-all duration-300 origin-center ${
                isOpen ? "translate-y-[5.33px] rotate-45" : ""
              }`}
            />
            {/* Bottom Line -> Morphs into second arm of "X" */}
            <path
              d="M 5.333 21.333 H 26.666"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              className={`transition-all duration-300 origin-center ${
                isOpen ? "-translate-y-[5.33px] -rotate-45" : ""
              }`}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Navigation Menu */}
      {isOpen && (
        <ul className="flex flex-col pt-4 mt-3 border-t border-black/10 w-full animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((navLink) => (
            <li key={navLink.targetId}>
              <Link
                href={`${navLink.targetId}`}
                onClick={(e) => handleScroll(e, navLink.targetId)}
                className="lg:text-3xl text-2xl font-medium font-body text-muted-light hover:text-black transition-colors block py-3"
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
