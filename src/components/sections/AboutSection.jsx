import BaseGrid from "../ui/BaseGrid";
import Container from "../ui/Container";
import Section from "../ui/Section";
import StripedDivider from "../ui/StripedDivider";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ritesh-nishad-abb9363a4/",
  },
  { label: "Bluesky", href: "https://bsky.app/profile/dumbritesh.bsky.social" },
  { label: "X (Twitter)", href: "https://x.com/Riteshxdev" },
];

export default function AboutSection() {
  return (
    <Section id="aboutSection">
      <Container>
        <BaseGrid>
          {/* Main outer container with red/pink dashed border */}
          <div className="col-span-12 h-full font-headvig-serif flex flex-col border border-dashed border-pink">
            {/* Top Text Block */}
            <div className="w-full flex justify-start p-4">
              <div className="flex flex-col gap-5 md:w-[60%] w-full text-2xl">
                <p className="text-muted-light">
                  <span className="text-black">Hey, I'm Ritesh</span> — a
                  designer and developer currently based in India. My work
                  covers website designs, landing page design and development,
                  brand identity, and product design to improve overall user
                  experience.
                </p>
              </div>
            </div>

            <StripedDivider />

            {/* Middle Text Block */}
            <div className="w-full flex justify-end p-4">
              <div className="flex flex-col gap-5 md:w-[60%] w-full text-2xl text-black text-end">
                <p>
                  I got into design chasing a simple idea: that software doesn't
                  have to look boring and espcially bad user experience. I
                  started designing 3years ago including posters, social media
                  posts and other freelance works and now i am starting to help
                  founders with software designs that doesn't suck.
                </p>
                <p className="text-muted-light">
                  Most of what I make exists to solve a specific business
                  problem and improve user experience.
                </p>
              </div>
            </div>

            <StripedDivider />

            {/* Bottom Text Block */}
            <div className="w-full flex justify-start p-4">
              <div className="flex flex-col gap-5 md:w-[60%] w-full text-2xl text-black">
                <p>
                  I'm still early in this journey — building alongside a
                  computer science degree, taking on projects, and learning fast
                  with every one. I care a lot about understanding business
                  needs, and about work that has real taste, I'm proud of what
                  I've made so far, but I'm most excited about the studio this
                  is becoming.
                </p>
                <p className="text-muted-light">
                  This isn't a side project for me — it's what I'm building my
                  whole career around, which means your project gets the same
                  care I'd give my own 🩵
                </p>
              </div>
            </div>

            <StripedDivider />

            {/* social media links  */}
            <div className="w-full flex lg:justify-end justify-center py-9 px-4 gap-5">
              {socialLinks.map((link) => (
                <div
                  key={link.label}
                  className="border border-pink border-dashed bg-transparent rounded-none hover:rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <a
                    target="_blank"
                    className="w-full h-full block lg:px-6 lg:py-2 px-2 py-1"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
