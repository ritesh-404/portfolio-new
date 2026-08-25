import Button from "../ui/Button";
import CaseStudyCard from "../ui/CaseStudyCard";
import Navbar from "../ui/Navbar";
import { TolgeeThumbnail } from "../../assets/featured-card-img";
import PillTagGroup from "../ui/Pill";

export default function HeroSection() {
  return (
    <section className="flex justify-center items-center">
      <Navbar />
      <CaseStudyCard tags={<PillTagGroup />} image={TolgeeThumbnail}/>
    </section>
  );
}
