import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import gradient from "../../assets/footer-gradients.png";
import BaseGrid from "../ui/BaseGrid";

import { scrollToSection } from "../../utils/ScrollTo"; 


export default function FooterSection() {
  return (
    <Section id="footerSection" className="bg-body h-[80vh] overflow-clip">
      <Container className="relative z-10 h-full w-full">
        <BaseGrid className="h-full w-full">
          <div className="col-span-12 flex flex-col text-center font-body font-medium justify-center items-center gap-10 h-full w-full">
            <h3 className="lg:text-5xl text-3xl max-w-[680px] tracking-tight">
              Couldn't find what you are looking for ? Just ask.
            </h3>
            <Button onClick={(e) => scrollToSection(e, "contactSection")}>
              Get in touch
            </Button>
          </div>
        </BaseGrid>
      </Container>
      <img
        src={gradient}
        className="absolute lg:-bottom-0.5 bottom-5 lg:right-[-450px] max-w-none lg:w-[150%] w-[200%] pointer-events-none z-0"
        alt=""
      />
    </Section>
  );
}
