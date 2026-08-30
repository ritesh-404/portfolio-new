export default function Section({ id = "", className = "", children }) {
  return (
    <section id={id} className={`${className} w-full lg:py-24 py-25 relative`}>
      {children}
    </section>
  );
}
