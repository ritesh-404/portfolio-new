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
      <div className="w-full bg-img-container p-4 border border-black/50 overflow-hidden">
        {image && (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-200 ease-out group-hover:scale-96 will-change-transform"
            onLoad={(e) => e.currentTarget.classList.add("loaded")}
          />
        )}
      </div>

      <div className="w-full bg-surface border border-t-0 border-black/50  px-5 py-6 h-fit transition-all duration-300 group-hover:border-black/80">
        {title && description && (
          <h4 className="md:text-2xl text-xl text-[#000080]">
            <span>{title}</span> : {description}
          </h4>
        )}
      </div>
    </Link>
  );
}
