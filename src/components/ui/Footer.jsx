import Button from "./Button";
import Pill from "./Pill";
import { CameraIcon, PeaceHandIcon } from "../icons";

const Footer = () => {
  const navItems = ["Home", "Work", "About", "Contact me"];

  return (
    <footer className="w-screen fixed bottom-0 left-0">
      <nav className="w-full h-12 flex items-center bg-black border-y border-border-bg ">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className={`
               flex-1 h-full flex items-center justify-center
              text-md text-muted-dark bg-black
              transition-colors duration-200
              hover:bg-[#050505] hover:text-primary
              ${index < navItems.length - 1 ? "border-r border-border-bg" : ""}
            `}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="w-full px-9 py-6 bg-black">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8">
          {/* Left: Heading + CTAs */}
          <div className="flex flex-col gap-5">
            <h2 className="display-xs text-primary max-w-130">
              Lets design & build the website that your startup deserves !
            </h2>

            <div className="flex gap-5">
              <Button
                variant="primary"
                iconPosition="left"
                icon={PeaceHandIcon}
              >
                Get in touch
              </Button>
              <Button variant="secondary" icon={CameraIcon} iconPosition="left">
                Book a 15min call
              </Button>
            </div>
          </div>

          {/* Right: Pills + Watermark */}
          <div className="flex flex-col items-end gap-4">
            <span className="text-muted-light text-lg">Or email us at <a href="gmail.com" target="_blank" className="text-neutral-100 underline underline-offset-1">hey@budbaks.com</a> for any enqueries.</span>
            <div className="flex gap-2">
              <Pill label="Github" href="https://github.com" />
              <Pill label="X (twitter)" href="https://twitter.com" />
              <Pill label="LinkedIn" href="https://linkedin.com" />
              <Pill label="Dribbble" href="https://dribbble.com" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
