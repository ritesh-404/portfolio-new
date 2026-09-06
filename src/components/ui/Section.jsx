export default function Section({ id = "", className = "", children }) {
  return (
    <section id={id} className={`${className} w-full p-10`}>
      {children}
    </section>
  );
}
