import Pill from "./Pill";
import { Link } from "wouter";

export default function CaseStudyCard({
  tags = [],
  image,
  title = "",
  description = "",
  className = "",
  id=""
}) {

  return (
    <Link
      href={`/work/${id}`}
      className={`${className} flex flex-col max-w-[600px] min-w-[356px] w-full font-body cursor-pointer hover:border-black/40 border border-transparent transition-all duration-300`}
    >
      {/* header pills */}
      <div className="lg:py-5 py-4 px-4 flex w-full justify-center items-center flex-wrap bg-white border border-b-0 border-border gap-2 h-full">
        {tags.length > 0 && tags.map((label, i) => <Pill>{label}</Pill>)}
      </div>

      {/* responsive img container  */}
      <div className="w-full bg-img-container lg:px-8 px-4 py-10 lg:py-20 border border-border h-full">
        {image && <img src={image} alt="" className="lg:max-w-full" />}
      </div>

      <div className="w-full bg-surface border border-t-0 border-border lg:px-8 px-4 lg:py-9 py-3 h-full">
        {title && description && (
          <h3 className="text-muted-light lg:text-2xl text-xl leading-[28px] font-medium lg:leading-[36px] font-body">
            <span className="text-black">{title}</span> : {description}
          </h3>
        )}
      </div>
    </Link>
  );
}
