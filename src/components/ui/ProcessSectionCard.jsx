export default function ProcessSectionCard({
  number = "",
  description = "",
  title = "",
  className = "",
}) {
  return (
    <div
      className={`${className} flex flex-col justify-between items-start lg:py-11 lg:px-9 py-7 px-5 max-w-[600px] min-w-[356px] min-h-[300px] w-full font-body bg-img-container border-border border hover:bg-white transition-colors duration-400 ease-in-out`}
    >
      <span className="font-mono tracking-wide">{number}</span>

      {/* heading and subheading */}
      <div className="flex flex-col items-start gap-5">
        <h3 className="text-2xl leading-[28px] text-black tracking-tight">
          {title}
        </h3>
        <p className="text-base leading-[24px] text-muted-light">
          {description}
        </p>
      </div>
    </div>
  );
}
