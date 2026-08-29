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
              <div className="flex flex-col gap-5 md:w-[60%] w-full text-2xl text-black">
                <p>Hello my name’s Ritesh and </p>
                <p className="text-muted-light">
                  I design brand identities, custom illustrations, and
                  production-ready websites for founders who need to look
                  credible from day one.
                </p>
              </div>
            </div>

            <StripedDivider />

            {/* Middle Text Block */}
            <div className="w-full flex justify-end p-4">
              <div className="flex flex-col gap-5 md:w-[60%] w-full text-2xl text-black text-end">
                <p>
                  Because I write code alongside designing in Figma, you don't
                  have to hire a separate front-end developer to bring the work
                  to life. You get structured design systems, clean assets, and
                  responsive web builds delivered fast without handoff friction.
                </p>
                <p className="text-muted-light">
                  Based in Mumbai. Partnering with ambitious founders worldwide.
                </p>
              </div>
            </div>

            <StripedDivider />

            {/* Bottom Text Block */}
            <div className="w-full flex justify-start p-4">
              <div className="flex flex-col gap-5 md:w-[60%] w-full text-2xl text-black">
                <p>
                  Most of what I make exists to solve a specific business
                  problem: making sure your first impression is accurate,
                  high-value, and memorable.{" "}
                </p>
                <p className="text-muted-light">
                  Whether it’s the logo shown to investors, the product
                  illustrations explaining a core feature, or the landing page
                  converting cold traffic, I focus on positioning your business
                  clearly over chasing short-lived design trends.
                </p>
              </div>
            </div>

            <StripedDivider />

            {/* social media links  */}
            <div className="w-full flex lg:justify-end justify-center py-9 px-4 gap-5">
              {socialLinks.map((link) => (
                <div key={link.label} className="border border-pink border-dashed bg-transparent rounded-none hover:rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out">
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
