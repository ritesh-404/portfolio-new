export default function Section({ id = "", className = "", children }) {
  return (
    <section id={id} className={`${className} w-full p-12 lg:py-16`}>
      {children}
    </section>
  );
}