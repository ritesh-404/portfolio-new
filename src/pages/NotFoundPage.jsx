export default function NotFoundPage(params) {
  return (
    <div className="w-full h-[calc(100vh-224px)] flex justify-center items-center">
      <div className="flex flex-col gap-0 justify-center items-center">
        <h1 className="display-xl">
          4<span className="text-muted-dark">0</span>4
        </h1>
        <h4 className="display-xs text-muted-light">Page not found</h4>
      </div>
    </div>
  );
}
