import BaseGrid from "../ui/BaseGrid";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Pill from "../ui/Pill";

export default function AboutSection() {
  return (
    <Section id="aboutSection">
      <Container>
        <BaseGrid>
          {/* Main outer container with red/pink dashed border */}
          <div className="col-span-12 h-full font-headvig-serif flex flex-col border border-dashed border-[#ff9e9e]">
            {/* Top Text Block */}
            <div className="w-full flex justify-start p-4">
              <div className="flex flex-col gap-5 w-[60%] text-2xl text-black">
                <h3>Hello my name’s Ritesh and </h3>
                <h3 className="text-muted-light">
                  I design brand identities, custom illustrations, and
                  production-ready websites for founders who need to look
                  credible from day one.
                </h3>
              </div>
            </div>

            {/* Striped Divider Space 1 */}
            <div className="h-20 border-y border-dashed border-[#ff9e9e] bg-[repeating-linear-gradient(-45deg,rgba(255,158,158,0.25),rgba(255,158,158,0.25)_2px,transparent_2px,transparent_8px)]" />

            {/* Middle Text Block */}
            <div className="w-full flex justify-end p-4">
              <div className="flex flex-col gap-5 w-[60%] text-2xl text-black text-end">
                <h3>
                  Because I write code alongside designing in Figma, you don't
                  have to hire a separate front-end developer to bring the work
                  to life. You get structured design systems, clean assets, and
                  responsive web builds delivered fast without handoff friction.
                </h3>
                <h3 className="text-muted-light">
                  Based in Mumbai. Partnering with ambitious founders worldwide.
                </h3>
              </div>
            </div>

            {/* Striped Divider Space 2 */}
            <div className="h-20 border-y border-dashed border-[#ff9e9e] bg-[repeating-linear-gradient(-45deg,rgba(255,158,158,0.25),rgba(255,158,158,0.25)_2px,transparent_2px,transparent_8px)]" />

            {/* Bottom Text Block */}
            <div className="w-full flex justify-start p-4">
              <div className="flex flex-col gap-5 w-[60%] text-2xl text-black">
                <h3>
                  Most of what I make exists to solve a specific business
                  problem: making sure your first impression is accurate,
                  high-value, and memorable.{" "}
                </h3>
                <h3 className="text-muted-light">
                  Whether it’s the logo shown to investors, the product
                  illustrations explaining a core feature, or the landing page
                  converting cold traffic, I focus on positioning your business
                  clearly over chasing short-lived design trends.
                </h3>
              </div>
            </div> 

            {/* Striped Divider Space 2 */}
            <div className="h-20 border-y border-dashed border-[#ff9e9e] bg-[repeating-linear-gradient(-45deg,rgba(255,158,158,0.25),rgba(255,158,158,0.25)_2px,transparent_2px,transparent_8px)]" />

            {/* social media links  */}
            <div className="w-full flex justify-end py-9 px-4 gap-5">
              <div className="border border-pink border-dashed bg-transparent rounded-none hover:rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out">
                <a target="_blank"
                className="w-full h-full block lg:px-6 lg:py-2 px-4 py-1" href="https://x.com/Riteshxdev">
                  X (Twitter)
                </a>
              </div>
              <div className="border border-pink border-dashed bg-transparent rounded-none hover:rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out">
                <a
                  target="_blank"
                  className="w-full h-full block lg:px-6 lg:py-2 px-4 py-1"
                  href="https://www.linkedin.com/in/ritesh-nishad-abb9363a4/"
                >
                  LinkedIn
                </a>
              </div>
              <div className="border border-pink border-dashed bg-transparent rounded-none hover:rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out">
                <a
                  target="_blank"
                  className="w-full h-full block lg:px-6 lg:py-2 px-4 py-1"
                  href="https://bsky.app/profile/dumbritesh.bsky.social"
                >
                  Bluesky
                </a>
              </div>
            </div>
          </div>
        </BaseGrid>
      </Container>
    </Section>
  );
}
