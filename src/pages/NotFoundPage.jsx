import BackLinkBtn from "../components/ui/BackLinkBtn";
import Section from "../components/ui/Section";

export default function NotFoundPage() {
  return (
    <Section
      id="heroSection"
      className="bg-[#000080] text-white w-full h-screen flex justify-center items-center flex-col gap-4"
    >
      <h1>404 Not found</h1>
      <BackLinkBtn />
    </Section>
  );
}
