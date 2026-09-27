export default function BeforeAfter({
  beforeImage,
  afterImage,
  title = "",
  description = "",
}) {
  return (
    <section>
      <div className="flex flex-col">
        <div>
          <p className="text-5xl font-dm-sans">{title}</p>

          <p className="mt-4 text-[#ffffffb6] leading-7 font-dm-sans text-lg max-w-200">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BEFORE */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-dm-sans text-white/40 uppercase tracking-wider">
              Before
            </p>

            <div className="w-full overflow-hidden border border-white/10 bg-white/[0.03]">
              <img
                src={beforeImage}
                alt="Before design"
                className="block w-full h-auto"
              />
            </div>
          </div>

          {/* AFTER */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-dm-sans text-white/40 uppercase tracking-wider">
              After
            </p>

            <div className="w-full overflow-hidden border border-white/10 bg-white/[0.03]">
              <img
                src={afterImage}
                alt="After design"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
