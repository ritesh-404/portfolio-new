import BackLinkBtn from "../components/ui/BackLinkBtn";
import Section from "../components/ui/Section";

export default function NotFoundPage() {
  return (
    <Section
      id="heroSection"
      className="bg-[#fcfcfc] text-[#202020] w-full h-screen font-inter flex justify-center items-center flex-col gap-4"
    >
      <h1>Not found</h1>
      <BackLinkBtn />
    </Section>
  );
}
