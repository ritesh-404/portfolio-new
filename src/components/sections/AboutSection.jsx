import myPic from "../../assets/images/me.png";

export default function AboutSection() {
  return (
    <section className="px-9 py-24 bg-black h-auto w-full">
      <div className="flex flex-col gap-11 w-full">
        {/* Top section: Heading + decorative line */}
        <div className="flex flex-col gap-2">
          <h2 className="display-lg text-(--color-primary)">
            So... you wanna know about me ?
          </h2>
          <h4 className="display-xs text-(--color-muted-light)">
            Ok so my name&apos;s Ritesh
          </h4>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <p className="text-xl text-(--color-muted-light) leading-relaxed">
            And I am a website & landing page designer with graphic design
            experience of <span className="text-(--color-primary)">more than 2 years.</span> In those two years I helped clients
            with website/landing designs,posters and logo designs
          </p>

          {/* Image */}
          <div className="w-full aspect-[16/9] bg-(--color-img-container) overflow-hidden my-4">
            <img
              src={myPic}
              alt="Ritesh"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Story paragraphs */}
          <p className="text-xl text-(--color-primary)">But.</p>

          <p className="text-xl text-(--color-muted-light) leading-relaxed">
            About 2 years ago I was using an old HP EliteBook. It had gotten
            really old and I knew I needed a new laptop. Right before I could
            buy one my final exams were only a few months away so I put all my
            freelancing work on hold and focused completely on my studies for
            around 3.5 months. Once my exams were over I opened my laptop
            expecting to continue where I had left off. It never unlocked again.
            Just like that I lost every project I had worked on and I was never
            able to recover any of it.
          </p>

          <p className="text-xl text-(--color-muted-light) leading-relaxed">
            I visited a few service centers but the repair cost was way too high
            so I decided it wasn&apos;t worth fixing. Instead I bought a new
            laptop. So here I am starting from scratch. This portfolio is my
            fresh start and this time I&apos;ll be documenting everything I
            build along the way.
          </p>

          {/* Tip */}
          <p className="text-xl text-(--color-primary) leading-relaxed">
            Tip - Document everything on the internet :)
          </p>
        </div>
      </div>
    </section>
  );
}
