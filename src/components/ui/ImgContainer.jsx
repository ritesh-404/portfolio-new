export default function ImgContainer({ src, alt }) {
  return (
    <>
      <div className="outline outline-offset-2 outline-dashed outline-border-default p-2 bg-transparent w-fit flex shrink-0">
        <img className="outline-2 outline-border-bg w-56" src={src} alt={alt} />
      </div>
    </>
  );
}
