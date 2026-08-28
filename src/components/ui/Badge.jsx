export default function Badge({className = "", children }) {
  return (
    <section className={`${className} min-w-[300px] w-fit border-border border rounded-full px-4 py-2 text-sm lg:text-base leading-4 font-body`}>
      {children}
    </section>
  );
}
