import { HomeIcon, WorkIcon, PeaceHandIcon, MessageIcon } from "../icons";

const navItems = [
  { label: "Home", icon: HomeIcon, href: "#home" },
  { label: "Work", icon: WorkIcon, href: "#work" },
  { label: "About", icon: PeaceHandIcon, href: "#about" },
  { label: "Contact me", icon: MessageIcon, href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full py-2 border-b border-border-default fixed top-0">
      <div className="flex items-center gap-10 bg-neutral-950 rounded-lg px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="
                group
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-lg
                font-body
                text-sm
                text-muted-light
                transition-colors
                duration-200
                hover:text-primary
              "
            >
              <Icon className="w-5 h-5 transition-colors duration-200" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
