import Card from "../ui/Card";
import { Flowers } from "../../assets/images";

export default function FeaturedProjectsSection() {
  return (
    <div className="px-9 py-24 bg-black h-auto w-full flex flex-col gap-20">
      {/* heading and subheading  */}

      <div className="flex flex-col gap-2">
        <h2 className="display-lg text-(--color-primary)">
          Featured projects
        </h2>
        <h4 className="display-xs text-(--color-muted-light)">
          Some of my favorite works that i am proud of : Strategy Branding
          Design Development
        </h4>
      </div>

      <div className="overflow-hidden flex flex-col gap-12">
        <Card
          image={Flowers}
          category="Branding & website"
          title="DataView : We redesigned their website"
          href="/work/dataview"
        />
        <Card
          image={Flowers}
          category="Branding & website"
          title="DataView : We redesigned their website"
          href="/work/dataview"
        />
        <Card
          image={Flowers}
          category="Branding & website"
          title="DataView : We redesigned their website"
          href="/work/dataview"
        />
      </div>
    </div>
  );
}
