export default function HeadingSubHeading({ id = "", className = "", heading="", subHeading=""}) {
  return (
    <div id={id} className="lg:col-span-9 col-span-12 flex flex-col lg:gap-10 gap-5">
      <h3 className="text-muted-light lg:text-xl leading-[25px] font-mono">
        {heading}
      </h3>
      <h2 className="w-full lg:text-4xl text-2xl leading-[32px] lg:leading-[45px] tracking-[-1px] font-title">
        {subHeading}
      </h2>
    </div>
  );
}
