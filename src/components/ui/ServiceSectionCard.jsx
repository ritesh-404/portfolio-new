export default function ServiceSectionCard({ title = "", description = "",className=""}) {
  return (
    <div
      className={`flex flex-col gap-14 min-h-100 justify-between max-w-[400px] w-full font-body bg-img-container border-border border p-6 pt-9 ${className} hover:bg-white transition-colors duration-400 ease-in-out`}
    >
      {/* content */}
        <h3 className="text-xl leading-[24px] tracking-tight w-full">{title}</h3>
        <h3 className="text-sm w-full">{description}</h3>
    </div>
  );
}
