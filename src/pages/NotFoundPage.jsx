import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import gradient from "../assets/footer-gradients.png";
import BaseGrid from "../components/ui/BaseGrid";
import ShimmerText from "../components/ui/ShimmerText";

export default function NotFoundPage() {
  return (
    <Section id="heroSection" className="bg-body h-screen overflow-clip">
      <Container className="relative z-10 h-full">
        <BaseGrid className="h-full">
          {/* content container  */}
          <div className="col-span-12 flex lg:justify-center lg:items-start flex-col lg:gap-12 gap-10">
            {/* badge  */}
            <Badge>
              <ShimmerText text="This link is broken but i got you ^_^" />
            </Badge>

            {/* heading  */}
            <div className="w-full flex flex-col gap-12 justify-center">
              <h1 className="text-5xl font-medium tracking-tight mt-4 font-title lg:max-w-[1152px] max-w-[400px] lg:leading-[58px] leading-[52px] w-full">
                I help with brand identity, illustration, brand strategy, web
                design and development for founders who need to look
                put-together fast.
              </h1>

              <div className="flex items-center justify-center gap-4 w-full md:w-[500px]">
                <Button className="w-full">Visit working link</Button>
              </div>
            </div>
          </div>
        </BaseGrid>
      </Container>
      <img
        src={gradient}
        className="absolute lg:-bottom-0.5 bottom-20 lg:right-[-450px] max-w-none lg:w-[150%] w-[200%] pointer-events-none z-0"
        alt=""
      />
    </Section>
  );
}
