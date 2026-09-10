import { Link } from "wouter";

export default function CaseStudyCard({
  image,
  title = "",
  description = "",
  className = "",
  id = "",
}) {
  return (
    <Link
      href={`/work/${id}`}
      className={`${className} group flex flex-col max-w-[1000px] min-w-[250px] w-full font-dm-sans cursor-pointer`}
    >
      {/* responsive img container */}
      <div className="w-full bg-img-container p-4 pb-5 rounded-lg border border-black/50 overflow-hidden flex flex-col gap-5">
        {image && (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="w-full h-auto object-cover rounded-lg"
            onLoad={(e) => e.currentTarget.classList.add("loaded")}
          />
        )}

        {title && description && (
          <h4 className="md:text-2xl font-medium font-dm-sans text-[#000080]">
            <span>{title}</span> : {description}
          </h4>
        )}
      </div>
    </Link>
  );
}
