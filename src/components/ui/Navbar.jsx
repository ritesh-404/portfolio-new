import { useState, useRef, useEffect } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

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
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "About me", href: "#about" },
    { label: "Writings", href: "#writings" },
  ];

  return (
    <>
      <nav className="fixed top-10 right-10 z-50 flex items-center gap-2 px-2 py-2 pl-6 rounded-sm bg-[#f0f0f0]/60  saturate-[180%] backdrop-blur-[20px] border border-border transition-all duration-300 md:w-auto w-[calc(100%-2rem)] max-w-[420px] md:max-w-none md:justify-start justify-between">
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block px-4 py-2 text-[15px] font-medium text-[#626277] rounded-full transition-colors duration-200 hover:text-black no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <Button className="hidden md:inline-flex">Get in touch</Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[22px] h-[22px] stroke-[#1a1a2e] stroke-2 stroke-linecap-round stroke-linejoin-round fill-none"
          >
            {isOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[360px] p-3 rounded-[20px] bg-white/55 backdrop-blur-2xl saturate-[180%] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-[999] transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-[#1a1a2e] rounded-xl transition-colors duration-200 hover:bg-black/5 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-2 py-3.5 text-[15px]">Get in touch</Button>
      </div>
    </>
  );
}