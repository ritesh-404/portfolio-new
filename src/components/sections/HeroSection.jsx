import { HeyIcon } from "../icons";
import MarqueeAnimation from "../ui/MarqueeAnimation";

export default function HeroSection() {
  return (
    <div className="pt-9 pb-24 h-auto w-full flex flex-col gap-20 overflow-hidden bg-black">
      {/* content  */}
      <div className="px-9 flex flex-col gap-12">
        <span className="inline-flex items-center gap-2">
          <p className="text-xl font-medium">Hello</p>
          <HeyIcon className="h-6 w-6" />
          <p className="text-xl font-medium">I'm Ritesh</p>
        </span>

        <h1 className="display-lg-medium">
          I help founders by making Websites and Landing pages that includes
          everything{" "}
          <span className="bg-linear-to-r from-[#10E164] to-[#00996B] bg-clip-text text-transparent">
            Branding , Design & Development{" "}
          </span>
          so there’s no hand-offs so that you can focus on your business rather than
          your website.{" "}
        </h1>
      </div>

      <MarqueeAnimation />
    </div>
  );
}
