export default function Section({ id = "", className = "", children }) {
  return (
    <section id={id} className={`${className} w-full py-24 relative`}>
      {children}
    </section>
  );
}
