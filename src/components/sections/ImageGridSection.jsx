import byteask from "../../assets/hero_Section_Project_Img/coming_soon/byteask_4_3.webp";
import thread_otter from "../../assets/hero_Section_Project_Img/coming_soon/thread_otter_4_3.webp";
import { SectionHeading } from "../ui/SectionHeading";

const images = [byteask, thread_otter];

export default function ImageGridSection() {
  return (
    <section className="w-full">
      <div className="mb-10">
        <SectionHeading className="mb-0">( ¬_¬ ) Coming soon...</SectionHeading>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <div key={index} className="border border-gray-200 p-4">
            <img
              src={image}
              alt=""
              draggable="false"
              className="block h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
