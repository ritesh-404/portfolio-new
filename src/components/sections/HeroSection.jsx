import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import gradient from "../../assets/footer-gradients.png";
import BaseGrid from "../ui/BaseGrid";
import { scrollToSection } from "../../utils/ScrollTo";
import ShimmerText from "../ui/ShimmerText";

export default function HeroSection() {
  return (
    <Section id="heroSection" className="bg-body lg:h-screen h-full overflow-clip">
      <Container className="relative z-10 h-full">
        <BaseGrid className="h-full">
          {/* content container  */}
          <div className="col-span-12 flex lg:justify-center lg:items-start flex-col lg:gap-12 gap-10">
            {/* badge  */}
            <Badge>
              <ShimmerText text="Independent design partner for founders" />
            </Badge>

            {/* heading  */}
            <div className="w-full flex flex-col gap-12 justify-center">
              <h1 className="text-5xl font-bold tracking-tighter mt-4 font-title lg:max-w-[1152px] max-w-[400px] lg:leading-[58px] leading-[52px] w-full">
                Brand identity, illustration, brand strategy, web design and
                development for founders who need to look put-together fast.
              </h1>

              <div className="flex items-center justify-center gap-4 w-full md:w-[500px]">
                <Button
                  onClick={(e) => scrollToSection(e, "contactSection")}
                  className="w-full"
                >
                  Get in touch
                </Button>
                <Button
                  onClick={(e) => scrollToSection(e, "caseStudySection")}
                  variant="secondary"
                  className="w-full border-black"
                >
                  Browse my work
                </Button>
              </div>
            </div>
          </div>
        </BaseGrid>
      </Container>
      <img
        src={gradient}
        loading="lazy"
        className="absolute lg:-bottom-0.5 bottom-20 lg:right-[-450px] max-w-none lg:w-[150%] w-[200%] pointer-events-none z-0 img-fallback"
        alt=""
        onLoad={(e) => e.currentTarget.classList.add('loaded')}
      />
    </Section>
  );
}
